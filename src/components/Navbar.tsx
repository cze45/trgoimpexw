import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#pocetna", label: "Početna" },
  { href: "#usluge", label: "Usluge" },
  { href: "#projekti", label: "Projekti" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <a href="#pocetna" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-display text-2xl text-primary-foreground group-hover:rotate-3 transition-smooth">
            T
          </div>
          <div className="font-display text-xl text-secondary-foreground tracking-wider">
            <span className="text-primary">TRGO</span><span className="text-brand-green">IMPEX</span> W
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wider text-secondary-foreground/80 hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary-foreground p-2"
          aria-label="Meni"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-secondary border-t border-primary/20">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-secondary-foreground/90 hover:text-primary uppercase tracking-wider text-sm font-medium py-2"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
