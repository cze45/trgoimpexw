import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projekti_/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} - Trgoimpex W`
          : "Projekat nije pronađen - Trgoimpex W",
      },
      { name: "description", content: loaderData?.desc ?? "" },
    ],
  }),
  component: ProjectPage,
});
function ProjectPage() {
  const project = Route.useLoaderData();
  return (
    <>
      <Navbar />
      <main className="project-detail section-space">
        <article className="container">
          <a className="project-back" href="/projekti">
            <ArrowLeft size={17} /> Svi projekti
          </a>
          <header className="project-detail-heading">
            <p className="project-category">{project.cat}</p>
            <h1 className="section-title">{project.title}</h1>
            <p className="project-lead">{project.desc}</p>
          </header>
          <img
            className="project-detail-photo"
            src={project.img}
            alt={project.alt}
            width={project.width}
            height={project.height}
            fetchPriority="high"
          />
          <div className="project-description">
            <h2>Opis projekta</h2>
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a className="button-primary" href="/kontakt">
              Zatražite ponudu <ArrowRight size={18} />
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
