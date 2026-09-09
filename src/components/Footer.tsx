import { Link } from "@tanstack/react-router";
import logoMain from "@/assets/logo-main.png";
import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/15">
      <div className="container mx-auto px-6 py-8 md:py-5 flex flex-col items-center text-center gap-5 md:flex-row md:justify-between md:items-center md:text-left">
        <img
          src={logoMain}
          alt="Trgoimpex W logo"
          className="h-16 w-auto object-contain md:h-12"
        />
        <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-center md:gap-5 md:ml-auto">
          <Link
            to="/privatnost"
            className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth underline underline-offset-4"
          >
            Politika privatnosti
          </Link>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Trgoimpex W<span className="text-[#BE0000]">.</span> Sva prava zadržana<span className="text-[#BE0000]">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
