import logoMain from "@/assets/logo-main.png";
import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto px-6 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <img
          src={logoMain}
          alt="Trgoimpex W logotip"
          className="md:hidden h-14 w-auto object-contain mx-auto"
        />
        <img
          src={logoIcon}
          alt="Trgoimpex W logo"
          className="hidden md:block h-16 w-auto object-contain"
        />

        <p className="text-sm text-secondary-foreground/60 text-center md:text-right">
          © {new Date().getFullYear()} Trgoimpex W. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
