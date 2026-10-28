import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";

export function Contact({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  const [loading, setLoading] = useState(false);
  const send = useServerFn(submitContactMessage);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (import.meta.env.VITE_REDESIGN_PREVIEW === "true") {
      toast.info("Privatni pregled - slanje upita nije uključeno.");
      return;
    }
    const form = e.currentTarget;
    const fd = new FormData(form);
    setLoading(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          email: String(fd.get("email") ?? ""),
          project: String(fd.get("project") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      toast.success("Hvala! Vaš upit je poslat, kontaktiraćemo vas uskoro.");
      form.reset();
    } catch (err) {
      toast.error(
        err instanceof Error && err.message ? err.message : "Slanje nije uspelo. Pokušajte ponovo.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="section-space contact-section bg-secondary text-secondary-foreground"
    >
      <div className="container grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <Heading className="section-title mb-6">
            Imate <span className="text-inherit">projekat</span>?
            <br />
            Razgovarajmo.
          </Heading>
          <p className="text-secondary-foreground/80 text-lg mb-12 max-w-md">
            Pošaljite nam upit ili nas kontaktirajte direktno. Odgovaramo u roku od 24 sata radnim
            danom.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                label: "Adresa",
                value: "Titelska 5 Novi Sad, Srbija",
                href: "https://www.google.com/maps/search/?api=1&query=Titelska+5+Novi+Sad+Srbija",
                external: true,
              },
              {
                icon: Phone,
                label: "Telefon",
                value: "+381 63 504 857",
                href: "tel:+38163504857",
              },
              {
                icon: Mail,
                label: "Email",
                value: <>trgoimpexw@gmail.com</>,
                href: "mailto:trgoimpexw@gmail.com",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 border border-secondary-foreground/30 flex items-center justify-center shrink-0 group-hover:border-white transition-smooth">
                  <c.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-secondary-foreground/70 mb-1">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-form bg-background text-foreground p-6 md:p-8"
        >
          <h3 className="font-display text-2xl mb-6">Pošaljite upit</h3>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Ime i prezime" name="name" autoComplete="name" />
              <Field label="Telefon" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
            </div>
            <Field
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              spellCheck={false}
            />
            <Field label="Vrsta projekta" name="project" autoComplete="off" />
            <div className="relative">
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                maxLength={2000}
                placeholder=" "
                className="floating-input w-full bg-muted border border-border px-4 pt-7 pb-3 focus:border-primary focus:outline-none transition-smooth resize-none"
              />
              <label
                htmlFor="contact-message"
                className="floating-label absolute left-4 top-3.5 text-muted-foreground text-sm pointer-events-none transition-smooth origin-left"
              >
                Poruka
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              data-trace
              className="button-primary w-full disabled:opacity-60"
            >
              {loading ? "Šaljem…" : "Pošalji upit"}
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
  spellCheck,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  spellCheck?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        name={name}
        autoComplete={autoComplete}
        inputMode={inputMode}
        spellCheck={spellCheck}
        required
        placeholder=" "
        className="floating-input w-full bg-muted border border-border px-4 pt-6 pb-2 focus:border-primary focus:outline-none transition-smooth"
      />
      <label
        htmlFor={id}
        className="floating-label absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm pointer-events-none transition-smooth origin-left"
      >
        {label}
      </label>
    </div>
  );
}
