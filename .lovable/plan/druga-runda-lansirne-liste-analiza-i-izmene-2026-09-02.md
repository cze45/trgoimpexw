# Druga runda lansirne liste — analiza i izmene

## Stanje po stavkama

Već urađeno (bez izmena): layout i dizajn, stranice, logo, kontakt forma (radi, upisuje u bazu), politika privatnosti, sitemap, robots.txt, on-page SEO i OG kartica, SSL (automatski), mobilni dizajn, 404 ruta postoji, hosting i builder (Lovable).

Nalazi koje treba popraviti (potvrđeno čitanjem koda):
- Navigacija na stranici `/privatnost` koristi `#usluge`, `#kontakt` itd. — ti linkovi tamo ne vode nigde.
- Logo u navigaciji vodi na `#pocetna` umesto na početnu stranu (`/`).
- Telefon i email u kontakt sekciji su običan tekst — ne mogu se kliknuti sa telefona.
- 404 stranica je na engleskom i generička, bez brenda.
- Godina u footeru je već dinamička — ostaje kako jeste.
- Slike: hero i projekti se učitavaju odmah; logo PNG-ovi su 357 KB i 511 KB — utiču na brzinu.
- Nema linkova ka društvenim mrežama, nema analitike, nema live chata, sajt je samo na srpskom.

## Šta ću uraditi

1. **Navigacija i linkovi**
   - Logo vodi na `/`.
   - Na podstranicama anchor linkovi postaju `/#usluge`, `/#kontakt` itd. tako da rade sa svake strane.
2. **Kontakt podaci klikabilni**
   - Telefon kao `tel:+381635048570`, email kao `mailto:trgoimpexw@gmail.com`, adresa vodi na Google Maps.
3. **404 stranica**
   - Prevedena na srpski, sa logom, kratkim objašnjenjem i dugmadima „Početna“ i „Kontakt“.
4. **Brzina i slike**
   - `loading="lazy"` i `decoding="async"` na slikama ispod prvog ekrana, `width`/`height` da nema pomeranja layouta, kompresija logo PNG-ova (bez promene izgleda).
5. **CTA i UX**
   - Provera da svaka sekcija ima jasan poziv na akciju; dodavanje CTA dugmeta na kraju „O nama“ ka kontakt formi.
6. **Pristupačnost**
   - Provera kontrasta, `aria-label` na dugmadima menija, fokus stilovi na linkovima i poljima forme.
7. **Provera pred lansiranje**
   - Lektura teksta (dijalekt, dijakritika), test forme, provera svih linkova, brzina i izgled na telefonu i desktopu.

## Stavke koje preskačem i zašto

- **Website builder / host / kupovina domena / transfer domena** — Lovable je već i builder i host; domen kupujete/povezujete kroz Project Settings → Domains, to nije izmena u kodu.
- **Stranica „u izradi“** — sajt se objavljuje odjednom, nema perioda kada bi ta stranica imala smisla.
- **Live chat** — mala firma sa jednim brojem telefona; upiti kroz formu i telefon su dovoljni, chat bez dežurne osobe šteti utisku.
- **Newsletter prijava** — građevinska firma nema redovan sadržaj za slanje; kontakt forma pokriva potrebu.
- **Višejezičnost** — poslovanje je u Srbiji; engleska verzija ima smisla tek ako ciljate strane investitore.
- **Backup dizajna** — Lovable čuva istoriju verzija automatski.
- **Organizacija liste kontakata, promocija, off-page SEO, plan praćenja** — marketinški zadaci van sajta; predložiću kratke smernice u odgovoru, bez koda.

## Potrebno od vas (ne mogu sam)

- Linkovi ka Facebook/Instagram/LinkedIn profilima — dodaću ikonice u footer čim ih pošaljete.
- Google Analytics ID i Search Console verifikacija — radi se posle objave i povezivanja domena; mogu ubaciti kod čim dobijem ID.
- Provera da su telefon, email i adresa tačni.

## Tehnički detalji

Izmene: `src/components/Navbar.tsx` (logo → `/`, anchor prefiks), `src/components/Contact.tsx` (`tel:`/`mailto:`/mapa), `src/routes/__root.tsx` (`notFoundComponent` na srpskom), `src/components/Projects.tsx` i `src/components/Hero.tsx` (lazy/dimenzije slika), `src/components/About.tsx` (CTA), kompresija `src/assets/logo-*.png`. Bez promena baze i server funkcija.
