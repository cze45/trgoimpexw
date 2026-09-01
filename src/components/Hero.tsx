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

      {/* Subtle accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-white/15" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl mx-auto text-center py-8 md:py-12">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-3 border-l-4 border-primary bg-secondary/40 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 bg-primary animate-pulse" />
            <span className="text-secondary-foreground text-base uppercase tracking-widest">
              Niskogradnja • Ogradjivanje • Asfaltiranje
            </span>
          </div>

          <h1 className="font-display text-secondary-foreground leading-tight mb-8">

            <span className="block text-6xl md:text-8xl lg:text-9xl leading-[1.05]">
              Gradimo
              <br />
              temelje budućnosti<span className="text-brand-red">.</span>
            </span>
          </h1>



          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 font-display uppercase tracking-wider text-base hover:shadow-glow transition-smooth"
            >
              Zatražite ponudu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#projekti"
              className="inline-flex items-center gap-3 border-2 border-secondary-foreground text-secondary-foreground px-10 py-5 font-display uppercase tracking-wider text-base hover:bg-secondary-foreground hover:text-secondary transition-smooth"
            >
              Naši projekti
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-4xl mx-auto opacity-90">
          {[
            { n: "25+", l: "Godina iskustva" },
            { n: "180+", l: "Završenih projekata" },
            { n: "15+", l: "Stručnih radnika" },
            { n: "100%", l: "Posvećenost" },
          ].map((s) => (
            <div key={s.l} className="bg-secondary/80 backdrop-blur-sm p-5 md:p-6 relative min-w-0">
              <div className="font-display text-2xl md:text-4xl text-secondary-foreground/90 leading-none">
                {s.n}
              </div>
              <div className="text-secondary-foreground/80 text-[10px] md:text-xs uppercase tracking-wider mt-2 leading-tight break-words">
                {s.l}
              </div>
              <span className="absolute top-2 right-2 md:top-3 md:right-3 w-1.5 h-1.5 bg-brand-green" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
