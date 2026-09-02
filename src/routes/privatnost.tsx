import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/privatnost")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti — Trgoimpex W" },
      {
        name: "description",
        content:
          "Kako Trgoimpex W prikuplja, koristi i čuva lične podatke koje ostavljate putem kontakt forme na sajtu.",
      },
      { property: "og:title", content: "Politika privatnosti — Trgoimpex W" },
      {
        property: "og:description",
        content:
          "Informacije o obradi ličnih podataka iz kontakt forme Trgoimpex W.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://trgoimpexw.lovable.app/privatnost" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://trgoimpexw.lovable.app/privatnost" }],
  }),
  component: Privatnost,
});

function Privatnost() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl mb-8">Politika privatnosti</h1>

        <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Ko obrađuje podatke</h2>
            <p>
              Podatke prikuplja i obrađuje Trgoimpex W, Titelska 5, Novi Sad, Srbija.
              Kontakt: trgoimpexw@gmail.com, +381 63 504 857.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Koje podatke prikupljamo</h2>
            <p>
              Kada popunite kontakt formu, prikupljamo ime i prezime, broj telefona,
              email adresu, vrstu projekta i tekst poruke. Ne prikupljamo nikakve druge
              lične podatke i ne koristimo kolačiće za praćenje ili oglašavanje.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Svrha obrade</h2>
            <p>
              Podatke koristimo isključivo da odgovorimo na vaš upit i pripremimo ponudu.
              Ne prosleđujemo ih trećim licima i ne koristimo ih za marketinške poruke
              bez vaše saglasnosti.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Čuvanje podataka</h2>
            <p>
              Poruke se čuvaju u zaštićenoj bazi podataka onoliko dugo koliko je potrebno
              za komunikaciju povodom vašeg upita, a najduže dve godine od poslednjeg kontakta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">Vaša prava</h2>
            <p>
              U svakom trenutku možete tražiti uvid u svoje podatke, njihovu ispravku ili
              brisanje. Zahtev pošaljite na trgoimpexw@gmail.com i postupićemo po njemu
              u zakonskom roku.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display uppercase tracking-wider text-sm hover:shadow-glow transition-smooth"
          >
            Nazad na početnu
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
