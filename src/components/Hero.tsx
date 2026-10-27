import heroImage from "@/assets/hero-construction.jpg";
import { ArrowDownRight, ArrowRight } from "lucide-react";
export function Hero() {
  return (
    <section id="pocetna" className="hero">
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
          <div className="hero-visual">
            <img
              src={heroImage}
              alt="Gradilište Trgoimpex W"
              width={1920}
              height={1280}
              fetchPriority="high"
            />
            <div className="hero-corner" aria-hidden="true" />
            <svg
              className="road-motif"
              viewBox="0 0 600 105"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 75L55 10H460L280 105H0Z" fill="#1B2E3C" />
              <path d="M75 105C220 55 275 55 460 10C330 56 250 75 185 105Z" fill="#FEFEFE" />
              <path d="M505 10H600L540 75H390Z" fill="#6B0F1A" />
              <path
                d="M235 94L260 85M285 76L310 67M334 58L359 49M381 40L406 31"
                stroke="#FEFEFE"
                strokeWidth="4"
              />
            </svg>
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
