# Provera pred lansiranje (checklist)

Prošao sam kroz sve četiri kolone sa slike i uporedio ih sa stanjem sajta.

## Već urađeno
- Layout, logo i favicon, dizajn ključne (jedne) stranice, mobilna verzija
- CTA dugmad i kontakt forma koja radi (čuva poruke u bazi)
- Logo linkovan na vrh/početnu
- On-page SEO: naslovi, opisi, OG/Twitter kartice, `lang="sr-Latn"`, `robots.txt`, `sitemap.xml`
- 404 stranica postoji (globalna)
- Lazy loading slika, alt tekstovi na svim slikama
- SSL — automatski uz Lovable hosting, ništa se ne radi ručno

## Što predlažem da se popravi pre lansiranja

1. **Pogrešni podaci u strukturiranim podacima (JSON-LD)**
   Na početnoj stranici LocalBusiness šema još drži stare placeholdere: telefon `+387 00 000 000`, email `info@trgoimpex-w.ba`, adresa „Industrijska zona bb, BA". Google to čita — mora da bude Titelska 5, Novi Sad, Srbija, `+381 63 504 857`, `trgoimpexw@gmail.com`, `addressCountry: RS`.

2. **Nema og:image**
   Kad se link podeli na Viberu/WhatsApp-u/Facebook-u prikazuje se prazna kartica. Dodao bih sliku gradilišta ili logo kao preview.

3. **Obaveštenje o kolačićima / politika privatnosti**
   Forma prikuplja ime, telefon i email — po GDPR-u je potrebna kratka stranica sa politikom privatnosti i link u footeru. Bez kolačić-banera može, jer sajt trenutno ne koristi tracking kolačiće.

4. **Email notifikacija za nove upite**
   Poruke se čuvaju u bazi, ali niko ne dobija mejl. Traži postavljanje sopstvenog domena za slanje pošte — vredi odlučiti pre lansiranja.

5. **Analitika (Google Analytics / Search Console)**
   Bez toga se ne vidi da li iko posećuje sajt niti da li je Google indeksirao stranice. Search Console je najvažniji korak posle lansiranja.

## Što svesno preskačem i zašto
- **Multilingual opcije** — kompanija radi lokalno u Srbiji, srpski je dovoljan. Može se dodati kasnije ako bude izvoznih poslova.
- **„Under construction" stranica** — sajt se lansira gotov, nema potrebe.
- **Backup sajta** — Lovable čuva istoriju verzija automatski.
- **Istraživanje konkurencije / plan održavanja / mapa sajta kao dokument** — to je poslovna priprema, ne blokira tehničko lansiranje.
- **Kupovina domena** — opciono; sajt radi i na `.lovable.app` adresi. Sopstveni domen je preporuka za ozbiljniji utisak i za slanje mejlova.

## Tehnički detalji izmena
- `src/routes/index.tsx` — ispraviti JSON-LD (telefon, email, adresa, `addressCountry: "RS"`, `areaServed: "Srbija"`); dodati `og:image` i `twitter:image` sa apsolutnim URL-om.
- Nova ruta `src/routes/privatnost.tsx` sa politikom privatnosti + link u `Footer.tsx`, plus unos u `sitemap[.]xml.ts`.
- Email notifikacije i analitika — zasebni koraci, rade se posle tvoje potvrde.
