import logoMain from "@/assets/logo-main.png";
import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto px-6 py-8 md:py-14 flex flex-col items-center justify-center gap-5 text-center">
        <img
          src={logoMain}
          alt="Trgoimpex W logotip"
          className="md:hidden h-16 w-auto object-contain"
        />
        <img
          src={logoIcon}
          alt="Trgoimpex W logo"
          className="hidden md:block h-24 w-auto object-contain"
        />

        <p className="text-sm text-secondary-foreground/60 text-center">
          © {new Date().getFullYear()} Trgoimpex W. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
