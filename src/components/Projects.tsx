import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

function ProjectCard({ p, overlay = false }: { p: Project; overlay?: boolean }) {
  return (
    <article className={`project-card ${overlay ? "project-home-card" : ""}`}>
      <a
        className="project-card-link"
        href={`/projekti/${p.slug}`}
        aria-label={`Pročitaj projekat: ${p.title}`}
      >
        <div className="project-photo">
          <img
            src={p.img}
            alt={p.alt}
            width={p.width}
            height={p.height}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: p.position }}
          />
        </div>
        <div className="project-caption">
          {!overlay && (
            <div className="project-meta">
              <span>{p.cat}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </div>
          )}
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          {!overlay && (
            <>
              <span className="project-read-more">
                Pročitaj opis projekta <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </>
          )}
        </div>
      </a>
    </article>
  );
}

export function Projects({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
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
            <Heading className="section-title mb-4">
              Odabrani <span className="text-primary">projekti</span>
            </Heading>
            <p className="text-muted-foreground text-lg">
              Pogledajte fotografije radova i pročitajte opis svakog projekta.
            </p>
          </div>
        </div>

        {/* Mobilni karusel - prevlačenje, indikatori u Instagram stilu */}
        <div className={standalone ? "hidden" : "md:hidden"}>
          <Carousel setApi={setApi} opts={{ align: "start" }}>
            <CarouselContent className="-ml-6">
              {projects.map((p, i) => (
                <CarouselItem key={i} className="pl-6">
                  <ProjectCard p={p} overlay={!standalone} />
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
        <div
          className={
            standalone
              ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
              : "hidden md:grid grid-cols-2 gap-x-8 gap-y-12"
          }
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} overlay={!standalone} />
          ))}
        </div>
      </div>
    </section>
  );
}
