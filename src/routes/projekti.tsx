import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute("/projekti")({
  head: () => ({
    meta: [
      { title: "Projekti - Trgoimpex W" },
      {
        name: "description",
        content: "Fotografije radova: asfaltiranje, čelične konstrukcije i ograđivanje.",
      },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <>
      <Navbar />
      <main className="standalone-page">
        <Projects standalone />
      </main>
      <Footer />
    </>
  );
}
