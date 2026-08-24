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
      { property: "og:url", content: "https://trgoimpexw.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://trgoimpexw.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Trgoimpex W",
          description:
            "Građevinska kompanija specijalizovana za niskogradnju, visokogradnju i infrastrukturne radove.",
          url: "https://trgoimpexw.lovable.app/",
          telephone: "+387 00 000 000",
          email: "info@trgoimpex-w.ba",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Industrijska zona bb",
            addressCountry: "BA",
          },
          areaServed: "Bosna i Hercegovina",
          knowsAbout: ["Niskogradnja", "Visokogradnja", "Infrastruktura", "Inženjering"],
        }),
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
