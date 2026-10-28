import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "./Brand";

const services = [
  "Iskopi i zemljani radovi",
  "Niskogradnja",
  "Asfaltiranje",
  "Ograđivanje",
  "Visokogradnja",
  "Inženjering",
];
const pages = [
  { href: "/", label: "Početna" },
  { href: "/#usluge", label: "Usluge" },
  { href: "/projekti", label: "Projekti" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="footer-eyebrow">TRGOIMPEX W · NOVI SAD</p>
            <h2>Planirate radove?</h2>
          </div>
          <a className="button-primary" href="/kontakt">
            Zatražite ponudu <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-columns">
          <div className="footer-brand">
            <a href="/" aria-label="Trgoimpex W - početna strana">
              <Brand inverse />
            </a>
            <p>Porodična građevinska firma iz Novog Sada. Više od 25 godina na terenu.</p>
            <p className="footer-response">Odgovaramo na upite u roku od 24 sata radnim danom.</p>
          </div>
          <nav aria-label="Stranice u podnožju">
            <h3>Stranice</h3>
            <ul>
              {pages.map((page) => (
                <li key={page.label}>
                  <a href={page.href}>{page.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Usluge u podnožju">
            <h3>Usluge</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="/#usluge">{service}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-contact">
            <h3>Kontakt</h3>
            <address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Titelska+5+Novi+Sad+Srbija"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={18} aria-hidden="true" />
                <span>
                  Titelska 5<br />
                  Novi Sad, Srbija
                </span>
              </a>
              <a href="tel:+38163504857">
                <Phone size={18} aria-hidden="true" />
                <span>+381 63 504 857</span>
              </a>
              <a href="mailto:trgoimpexw@gmail.com">
                <Mail size={18} aria-hidden="true" />
                <span>trgoimpexw@gmail.com</span>
              </a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Trgoimpex W. Sva prava zadržana.</p>
          <a href="/privatnost">Politika privatnosti</a>
          <a className="footer-top" href="#">
            Nazad na vrh <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
