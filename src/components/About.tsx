import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TraceOutline } from "./TraceOutline";

const points = [
  "Tim iskusnih građevinskih inženjera",
  "Sertifikovana mehanizacija i oprema",
  "Poštovanje rokova i budžeta",
  "Stroge mere zaštite na radu",
];

export function About() {
  return (
    <section id="o-nama" className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="aspect-square bg-secondary relative overflow-hidden shadow-industrial">
            <div className="absolute inset-0 diagonal-stripes opacity-100" />
            {/* TODO: zameniti pravom fotografijom (tim ili mehanizacija na gradilištu) */}
            <div className="absolute inset-4 bg-[oklch(0.18_0_0)] flex flex-col items-center justify-center text-center p-8">
              <span className="text-white/80 text-sm uppercase tracking-widest">
                Mesto za fotografiju
              </span>
              <span className="text-white/50 text-xs mt-2">
                tim ili mehanizacija na gradilištu
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              O kompaniji
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Više od <span className="text-primary">25</span> godina na terenu<span className="text-[#BE0000]">.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Trgoimpex W je porodična građevinska firma iz Novog Sada. Radimo niskogradnju,
            ograđivanje i asfaltiranje. Tim čine inženjeri, majstori i operativci sa
            decenijskim iskustvom.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Radimo sertifikovanom mehanizacijom i držimo se rokova i budžeta.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            data-trace
            className="mt-8 group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display uppercase tracking-wider text-sm transition-smooth hover:scale-[1.02] hover:shadow-glow-green active:scale-[0.98]"
          >
            <TraceOutline />
            Zatražite ponudu
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
