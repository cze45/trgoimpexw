import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama - Trgoimpex W" },
      {
        name: "description",
        content:
          "Trgoimpex W je porodična građevinska firma iz Novog Sada sa više od 25 godina rada.",
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
        <About standalone />
      </main>
      <Footer />
    </>
  );
}
