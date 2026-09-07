import { Link } from "@tanstack/react-router";
import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/15">
      <div className="container mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <img
          src={logoIcon}
          alt="Trgoimpex W logo"
          className="h-16 w-auto object-contain"
        />
        <div className="flex flex-wrap items-center gap-5 ml-auto">
          <Link
            to="/privatnost"
            className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth underline underline-offset-4"
          >
            Politika privatnosti
          </Link>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Trgoimpex W. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
