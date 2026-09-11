import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";
import { TraceOutline } from "./TraceOutline";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const send = useServerFn(submitContactMessage);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        err instanceof Error && err.message
          ? err.message
          : "Slanje nije uspelo. Pokušajte ponovo.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (

    <section id="kontakt" className="pt-28 md:pt-36 pb-6 md:pb-10 bg-secondary text-secondary-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Imate <span className="text-brand-green">projekat</span>?
            <br />Razgovarajmo.
          </h2>
          <p className="text-secondary-foreground/80 text-lg md:text-xl mb-12 max-w-md">
            Pošaljite nam upit ili nas kontaktirajte direktno. Odgovaramo u roku od
            24 sata radnim danom.
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
                value: (
                  <>
                    trgoimpexw@gmail<span className="text-[#BE0000]">.</span>com
                  </>
                ),
                href: "mailto:trgoimpexw@gmail.com",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-start gap-5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <div className="w-14 h-14 bg-secondary-foreground/10 border border-secondary-foreground/30 flex items-center justify-center shrink-0 group-hover:border-brand-green transition-smooth">
                  <c.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-secondary-foreground/70 mb-1">
                    {c.label}
                  </div>
                  <div className="font-display text-xl md:text-2xl group-hover:text-brand-green transition-smooth">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background text-foreground p-8 md:p-10 shadow-industrial"
        >
          <h3 className="font-display text-2xl mb-6">Pošaljite upit</h3>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Ime i prezime" name="name" />
              <Field label="Telefon" name="phone" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Vrsta projekta" name="project" />
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
                className="floating-label absolute left-4 top-3.5 text-muted-foreground text-xs uppercase tracking-widest pointer-events-none transition-smooth origin-left"
              >
                Poruka
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              data-trace
              className="w-full group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display uppercase tracking-wider text-sm transition-smooth hover:scale-[1.01] hover:shadow-glow-green active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              <TraceOutline />
              {loading ? "Šaljem..." : "Pošalji upit"}
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
}: {
  label: string;
  name: string;
  type?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        name={name}
        required
        placeholder=" "
        className="floating-input w-full bg-muted border border-border px-4 pt-6 pb-2 focus:border-primary focus:outline-none transition-smooth"
      />
      <label
        htmlFor={id}
        className="floating-label absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs uppercase tracking-widest pointer-events-none transition-smooth origin-left"
      >
        {label}
      </label>
    </div>
  );
}
