import { CheckCircle2 } from "lucide-react";

const points = [
  "Tim iskusnih građevinskih inženjera",
  "Sertifikovana mehanizacija i oprema",
  "Poštovanje rokova i budžeta",
  "Stroge mjere zaštite na radu",
];

export function About() {
  return (
    <section id="o-nama" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square bg-secondary relative overflow-hidden shadow-industrial">
            <div className="absolute inset-0 diagonal-stripes opacity-100" />
            <div className="absolute inset-4 bg-secondary flex flex-col items-center justify-center text-center p-8">
              <div className="font-display text-8xl md:text-9xl text-primary leading-none">
                25+
              </div>
              <div className="text-secondary-foreground uppercase tracking-widest mt-4 text-sm">
                Godina gradimo
                <br />povjerenje
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary hidden md:flex flex-col items-center justify-center text-primary-foreground">
            <span className="font-display text-3xl">EST</span>
            <span className="font-display text-2xl">2000</span>
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
            Više od četvrt vijeka <span className="text-primary">gradimo</span> zajednicu.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Trgoimpex W je porodična građevinska kompanija osnovana sa misijom da pruža
            vrhunski kvalitet u svim segmentima građevinarstva. Specijalizovani smo za
            niskogradnju i visokogradnju, a naš tim čine iskusni inženjeri, majstori i
            operativci sa decenijskim iskustvom.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Vjerujemo da se reputacija gradi kao i objekti — sloj po sloj, projekat po
            projekat. Zato svakom poslu pristupamo s istom posvećenošću, bez obzira na
            obim.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
