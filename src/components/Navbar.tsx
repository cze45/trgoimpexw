import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Brand } from "./Brand";
const links = [
  { href: "/", label: "Početna" },
  { href: "/#usluge", label: "Usluge" },
  { href: "/projekti", label: "Projekti" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];
export function Navbar() {
  const pathname = useLocation({
    select: (location) => location.pathname.replace(/\/$/, "") || "/",
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      window.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="/" aria-label="Trgoimpex W - početna strana">
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Glavna navigacija">
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobilna navigacija"
        hidden={!open}
      >
        <div className="container">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
