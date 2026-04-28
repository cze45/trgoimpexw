export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center font-display text-primary-foreground">
            T
          </div>
          <span className="font-display tracking-wider">
            TRGOIMPEX <span className="text-primary">W</span>
          </span>
        </div>
        <p className="text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} Trgoimpex W. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
