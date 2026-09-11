import bridge from "@/assets/project-bridge.jpg";
import building from "@/assets/project-building.jpg";
import road from "@/assets/project-road.jpg";

// TODO: zameniti pravim projektima — nazivi, lokacije, obim i godina.
const projects = [
  { img: bridge, cat: "Infrastruktura", title: "Naziv projekta", desc: "Kratak opis radova — lokacija, obim, godina." },
  { img: building, cat: "Visokogradnja", title: "Naziv projekta", desc: "Kratak opis radova — lokacija, obim, godina." },
  { img: road, cat: "Niskogradnja", title: "Naziv projekta", desc: "Kratak opis radova — lokacija, obim, godina." },
];

export function Projects() {
  return (
    <section id="projekti" className="py-20 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              Odabrani <span className="text-brand-green">projekti</span>
            </h2>
            <p className="text-secondary-foreground/70 text-lg">
              Vaši projekti — slike i opisi se dodaju ovde.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden bg-card aspect-[4/5] shadow-industrial"
            >
              <img
                src={p.img}
                alt={p.title}
                width={1280}
                height={896}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />

              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-display uppercase tracking-wider">
                {String(i + 1).padStart(2, "0")} / {p.cat}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-smooth">
                <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                <p className="text-secondary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-smooth">
                  {p.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-smooth duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
