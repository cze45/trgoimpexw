import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt - Trgoimpex W" },
      {
        name: "description",
        content:
          "Kontaktirajte Trgoimpex W: Titelska 5, Novi Sad, +381 63 504 857, trgoimpexw@gmail.com.",
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
        <Contact standalone />
      </main>
      <Footer />
    </>
  );
}
