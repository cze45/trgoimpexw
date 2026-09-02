import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary px-6 text-center text-secondary-foreground">
      <img src={logoIcon} alt="Trgoimpex W logo" className="h-20 w-auto object-contain" />
      <h1 className="mt-8 font-display text-6xl md:text-8xl">404</h1>
      <h2 className="mt-3 font-display text-2xl md:text-3xl">Stranica nije pronađena</h2>
      <p className="mt-3 max-w-md text-secondary-foreground/70">
        Stranica koju tražite ne postoji ili je premeštena. Vratite se na početnu ili
        nam pišite — rado ćemo pomoći.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-primary px-8 py-4 font-display text-sm uppercase tracking-wider text-primary-foreground transition-smooth hover:shadow-glow"
        >
          Početna strana
        </Link>
        <a
          href="/#kontakt"
          className="inline-flex items-center justify-center border border-secondary-foreground/40 px-8 py-4 font-display text-sm uppercase tracking-wider transition-smooth hover:border-brand-green hover:text-brand-green"
        >
          Kontakt
        </a>
      </div>
    </div>
  );
}


export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Trgoimpex W — Građevinska kompanija" },
      {
        name: "description",
        content:
          "Trgoimpex W — građevinska kompanija za niskogradnju, visokogradnju i infrastrukturne radove.",
      },
      { name: "author", content: "Trgoimpex W" },
      { property: "og:site_name", content: "Trgoimpex W" },
      { property: "og:title", content: "Trgoimpex W — Građevinska kompanija" },
      {
        property: "og:description",
        content:
          "Niskogradnja, visokogradnja i infrastruktura — pouzdanost, preciznost i kvalitet u svakom projektu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr-Latn">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

