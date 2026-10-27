import heroImage from "@/assets/hero-earthworks-v2.webp";
import { ArrowDownRight, ArrowRight } from "lucide-react";
export function Hero() {
  return (
    <section id="pocetna" className="hero">
      <img
        className="hero-background"
        src={heroImage}
        alt=""
        aria-hidden="true"
        width={1954}
        height={805}
        fetchPriority="high"
        decoding="async"
      />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-rule" aria-hidden="true">
              <span />
            </div>
            <h1>
              <span>Temelj</span>
              <span>ograda</span>
              <span>
                asfalt<span className="hero-period">.</span>
              </span>
            </h1>
            <div className="hero-actions">
              <a href="#kontakt" className="button-primary">
                Zatražite ponudu <ArrowRight size={19} />
              </a>
              <a href="#projekti" className="text-link">
                Naši projekti <ArrowDownRight size={19} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          {[
            { n: "25+", l: "Godina iskustva" },
            { n: "180+", l: "Završenih projekata" },
            { n: "15+", l: "Stručnih radnika" },
            { n: "24h", l: "Odgovor na upit" },
          ].map((s) => (
            <div className="stat" key={s.l}>
              <span className="stat-number">{s.n}</span>
              <span className="stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
