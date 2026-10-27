import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Tim iskusnih građevinskih inženjera",
  "Sertifikovana mehanizacija i oprema",
  "Poštovanje rokova i budžeta",
  "Stroge mere zaštite na radu",
];

export function About() {
  return (
    <section id="o-nama" className="section-space bg-background about-section">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative">
          <div className="about-placeholder">
            {/* TODO: zameniti pravom fotografijom (tim ili mehanizacija na gradilištu) */}
            <div className="flex flex-col items-center justify-center text-center p-8">
              <span className="text-muted-foreground text-sm">Mesto za fotografiju</span>
              <span className="text-muted-foreground text-xs mt-2">
                tim ili mehanizacija na gradilištu
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-title mb-6">
            Više od <span className="text-primary">25 godina</span> na terenu.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Trgoimpex W je porodična građevinska firma iz Novog Sada. Radimo niskogradnju,
            ograđivanje i asfaltiranje. Tim čine inženjeri, majstori i operativci sa decenijskim
            iskustvom.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Radimo sertifikovanom mehanizacijom i držimo se rokova i budžeta.
          </p>

          <ul className="grid md:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <a href="#kontakt" data-trace className="button-primary mt-8">
            Zatražite ponudu
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
