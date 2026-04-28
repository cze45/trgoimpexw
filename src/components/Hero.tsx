import heroImage from "@/assets/hero-construction.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Gradilište Trgoimpex W"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-secondary/60" />

      {/* Diagonal accent stripe */}
      <div className="absolute top-0 right-0 w-2 md:w-4 h-full diagonal-stripes opacity-80" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border-l-4 border-primary bg-secondary/40 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-secondary-foreground text-sm uppercase tracking-widest">
              Niskogradnja • Visokogradnja • Infrastruktura
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary-foreground leading-[0.95] mb-6">
            Gradimo
            <br />
            <span className="text-primary">temelje</span>
            <br />
            budućnosti.
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-xl mb-10 leading-relaxed">
            Trgoimpex W je građevinska kompanija specijalizovana za građevinarstvo
            i niskogradnju. Pouzdanost, preciznost i kvalitet u svakom projektu.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display uppercase tracking-wider text-sm hover:shadow-glow transition-smooth"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#projekti"
              className="inline-flex items-center gap-3 border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-4 font-display uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-smooth"
            >
              Naši projekti
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/20 border border-primary/20 max-w-4xl">
          {[
            { n: "25+", l: "Godina iskustva" },
            { n: "180+", l: "Završenih projekata" },
            { n: "50+", l: "Stručnih radnika" },
            { n: "100%", l: "Posvećenost" },
          ].map((s) => (
            <div key={s.l} className="bg-secondary/80 backdrop-blur-sm p-6">
              <div className="font-display text-3xl md:text-4xl text-primary">
                {s.n}
              </div>
              <div className="text-secondary-foreground/70 text-xs uppercase tracking-wider mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
