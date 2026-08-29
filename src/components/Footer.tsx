import logoMain from "@/assets/logo-main.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={logoMain}
          alt="Trgoimpex W logo"
          className="h-16 w-auto object-contain"
        />

        <p className="text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} Trgoimpex W. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
