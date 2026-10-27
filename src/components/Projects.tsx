import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// TODO: zameniti pravim projektima - nazivi, lokacije, obim i godina.
const projects = [
  {
    cat: "Infrastruktura",
    title: "Naziv projekta",
    desc: "Kratak opis radova - lokacija, obim, godina.",
  },
  {
    cat: "Visokogradnja",
    title: "Naziv projekta",
    desc: "Kratak opis radova - lokacija, obim, godina.",
  },
  {
    cat: "Niskogradnja",
    title: "Naziv projekta",
    desc: "Kratak opis radova - lokacija, obim, godina.",
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="project-card">
      <div className="project-placeholder">
        <span>FOTOGRAFIJA PROJEKTA</span>
        <span className="placeholder-cross" aria-hidden="true">
          +
        </span>
      </div>
      <div className="project-meta">
        <span>{p.cat}</span>
        <ArrowUpRight size={17} aria-hidden="true" />
      </div>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
    </article>
  );
}

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section id="projekti" className="section-space projects-section">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="section-title mb-4">
              Odabrani <span className="text-primary">projekti</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Vaši projekti - slike i opisi se dodaju ovde.
            </p>
          </div>
        </div>

        {/* Mobilni karusel - prevlačenje, indikatori u Instagram stilu */}
        <div className="md:hidden">
          <Carousel setApi={setApi} opts={{ align: "start" }}>
            <CarouselContent className="-ml-6">
              {projects.map((p, i) => (
                <CarouselItem key={i} className="pl-6">
                  <ProjectCard p={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Aktivni indikator postaje crveni krug */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: count }, (_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Projekat ${i + 1}`}
                  aria-current={active}
                  onClick={() => api?.scrollTo(i)}
                  className="h-6 flex items-center"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      active ? "w-2 h-2 bg-primary" : "w-5 h-1 bg-border"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Tablet i desktop - mreža kao ranije */}
        <div className="hidden md:grid grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
