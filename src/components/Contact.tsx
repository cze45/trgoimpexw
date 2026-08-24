import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-sm uppercase tracking-widest text-secondary-foreground/60">
              Kontakt
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Imate <span className="text-primary">projekat</span>?
            <br />Razgovarajmo.
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-10 max-w-md">
            Pošaljite nam upit ili nas kontaktirajte direktno. Odgovaramo u roku od
            24 sata radnim danom.
          </p>

          <div className="space-y-6">
            {[
              { icon: MapPin, label: "Adresa", value: "Industrijska zona bb, BiH" },
              { icon: Phone, label: "Telefon", value: "+387 00 000 000" },
              { icon: Mail, label: "Email", value: "info@trgoimpex-w.ba" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-secondary-foreground/60 mb-1">
                    {c.label}
                  </div>
                  <div className="font-display text-lg">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Hvala! Kontaktiraćemo vas uskoro.");
          }}
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
                className="w-full bg-muted border border-border px-4 py-3 focus:border-primary focus:outline-none transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display uppercase tracking-wider text-sm hover:shadow-glow transition-smooth"
            >
              Pošalji upit
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
