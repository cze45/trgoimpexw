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
      { title: "Trgoimpex W — Građevinska kompanija | Novi Sad" },
      {
        name: "description",
        content:
          "Trgoimpex W — građevinska kompanija iz Novog Sada specijalizovana za niskogradnju, visokogradnju i infrastrukturne radove. Kontaktirajte nas za ponudu.",
      },
      { property: "og:title", content: "Trgoimpex W — Građevinska kompanija" },
      {
        property: "og:description",
        content:
          "Gradimo temelje budućnosti. Niskogradnja, visokogradnja i inženjering u Srbiji.",
      },
      { property: "og:url", content: "https://trgoimpexw.lovable.app/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Trgoimpex W" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Trgoimpex W — Građevinska kompanija" },
      {
        name: "twitter:description",
        content:
          "Gradimo temelje budućnosti. Niskogradnja, visokogradnja i inženjering u Srbiji.",
      },
      { property: "og:image", content: "https://trgoimpexw.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://trgoimpexw.lovable.app/og-image.jpg" },
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
          image: "https://trgoimpexw.lovable.app/og-image.jpg",
          telephone: "+381 63 504 857",
          email: "trgoimpexw@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Titelska 5",
            addressLocality: "Novi Sad",
            addressCountry: "RS",
          },
          areaServed: "Srbija",
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
