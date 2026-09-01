import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";

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

    <section id="kontakt" className="py-28 md:py-36 bg-secondary text-secondary-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-white" />
            <span className="text-sm uppercase tracking-widest text-secondary-foreground/60">
              Kontakt
            </span>
          </div>
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
              { icon: MapPin, label: "Adresa", value: "Titelska 5 Novi Sad, Srbija" },
              { icon: Phone, label: "Telefon", value: "+381 63 504 857" },
              { icon: Mail, label: "Email", value: "trgoimpexw@gmail.com" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5">
                <div className="w-14 h-14 bg-secondary-foreground/10 border border-secondary-foreground/30 flex items-center justify-center shrink-0">
                  <c.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-secondary-foreground/70 mb-1">
                    {c.label}
                  </div>
                  <div className="font-display text-xl md:text-2xl">{c.value}</div>
                </div>
              </div>
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
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
              >
                Poruka
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                maxLength={2000}
                className="w-full bg-muted border border-border px-4 py-3 focus:border-primary focus:outline-none transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display uppercase tracking-wider text-sm hover:shadow-glow transition-smooth disabled:opacity-60"
            >
              {loading ? "Šaljem..." : "Pošalji upit"}
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
}: {
  label: string;
  name: string;
  type?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required
        className="w-full bg-muted border border-border px-4 py-3 focus:border-primary focus:outline-none transition-smooth"
      />
    </div>
  );
}
