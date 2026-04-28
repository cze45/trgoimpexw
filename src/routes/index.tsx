import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trgoimpex W — Građevinska kompanija | Niskogradnja i Visokogradnja" },
      {
        name: "description",
        content:
          "Trgoimpex W — građevinska kompanija specijalizovana za niskogradnju, visokogradnju i infrastrukturne projekte. 25+ godina iskustva.",
      },
      { property: "og:title", content: "Trgoimpex W — Građevinska kompanija" },
      {
        property: "og:description",
        content: "Gradimo temelje budućnosti. Niskogradnja, visokogradnja i inženjering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
