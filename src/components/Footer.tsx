import { Link } from "@tanstack/react-router";
import { Brand } from "./Brand";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="/" aria-label="Trgoimpex W - početna strana">
          <Brand inverse />
        </a>
        <div className="footer-links">
          <Link to="/privatnost">Politika privatnosti</Link>
          <p>© {new Date().getFullYear()} Trgoimpex W. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
