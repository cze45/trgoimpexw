import heroImage from "@/assets/hero-construction.jpg";
import { ArrowRight } from "lucide-react";
import { TraceOutline } from "./TraceOutline";

export function Hero() {
  return (
    <section id="pocetna" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Gradilište Trgoimpex W"
        fetchPriority="high"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-secondary/60" />

      {/* Subtle accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-white/15" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="w-full text-center py-8 md:py-12 flex flex-col items-center gap-10 md:gap-11">
          {/* Na telefonu tri reda, veće i kontrastnije; od tableta naviše kao ranije */}
          <h1 className="font-display text-white md:text-secondary-foreground m-0 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] md:drop-shadow-none">
            <span className="block text-[length:min(96px,calc((100vw-48px)/3.3))] md:text-8xl lg:text-9xl leading-[1.1] md:leading-[1.05] text-center md:text-balance">
              <span className="block md:inline">Temelj,</span>{" "}
              <span className="block md:inline">ograda,</span>{" "}
              <span className="block md:inline">
                asfalt<span className="text-brand-red">.</span>
              </span>
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full max-w-xs md:max-w-none md:w-auto">
            <a
              href="#kontakt"
              data-trace
              className="group relative inline-flex items-center justify-center gap-3 bg-brand-green text-white opacity-90 px-9 py-3 md:py-4 font-display uppercase tracking-wider text-sm md:text-base transition-smooth"
            >
              <TraceOutline />
              Zatražite ponudu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#projekti"
              className="inline-flex items-center justify-center gap-3 border-2 border-secondary-foreground text-secondary-foreground px-9 py-3 md:py-4 font-display uppercase tracking-wider text-sm md:text-base hover:bg-secondary-foreground hover:text-secondary transition-smooth"
            >
              Naši projekti
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-4xl mx-auto opacity-90">
          {[
            { n: "25+", l: "Godina iskustva" },
            { n: "180+", l: "Završenih projekata" },
            { n: "15+", l: "Stručnih radnika" },
            { n: "24h", l: "Odgovor na upit" },
          ].map((s) => (
            <div key={s.l} className="bg-secondary/80 backdrop-blur-sm p-6 relative min-w-0">
              <div className="font-display text-4xl text-secondary-foreground md:text-secondary-foreground/90 leading-none">
                {s.n}
              </div>
              <div className="text-secondary-foreground/85 md:text-secondary-foreground/80 text-xs uppercase tracking-wider mt-3 md:mt-2 leading-tight break-words">
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
