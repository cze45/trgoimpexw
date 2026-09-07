# Commit za GitHub

Ne mogu da pushujem u repozitorij — ovde su gotovi fajlovi koje samo prepišeš preko postojećih.

## Fajlovi u ovom folderu (prepisati 1:1)
- src/components/Hero.tsx
- src/components/Services.tsx
- src/components/Projects.tsx
- src/components/About.tsx
- src/components/Footer.tsx

## Dve ručne izmene (jedna linija svaka)

**src/components/Contact.tsx** — telefon u linku ima cifru viška:
```diff
-        href: "tel:+381635048570",
+        href: "tel:+38163504857",
```

**src/components/Navbar.tsx** — hamburger je 40×40, treba minimum 44×44, i mobilni meni ide do 1024px (između 768 i 1024 se desktop nav odsecao). Zameni `md:` sa `lg:` u tri klase (`hidden md:flex` → `hidden lg:flex`, `md:hidden` → `lg:hidden` na dugmetu i na panelu) i dugme:
```diff
-          className="md:hidden text-secondary-foreground p-2"
+          className="lg:hidden text-secondary-foreground p-2.5 min-w-11 min-h-11 flex items-center justify-center"
```
Isto i za logo: `sm:hidden` / `hidden sm:block` ostaje kako je.

## Predlog commit message

```
Redizajn početne: novi naslov, čistiji copy, mobilna navigacija

- Hero: naslov "Temelj, ograda, asfalt." sa crvenom tačkom, ujednačeni
  razmaci, kicker ispravljen na "Ograđivanje", stat "100% Posvećenost"
  zamenjen sa "24h Odgovor na upit"
- Usluge i O nama: skraćeni opisi, izbačene prazne fraze
  ("kompletna rešenja", "najviši standardi", "vrhunski kvalitet")
- Projekti: nazivi i brojke vraćeni na placeholder do potvrde pravih
  podataka; kartice više nisu cursor-pointer (nemaju destinaciju)
- O nama: stat blok "25+" zamenjen mestom za fotografiju
- Footer: jedan red (logo levo, privacy + copyright desno), privacy
  link vodi na /privatnost umesto href="#"
- Navbar: hamburger 44x44, mobilni meni do 1024px
- Contact: ispravljen tel: link (bio jedan broj duži od prikazanog)
```

## Šta ostaje da se dopuni pre launcha
1. Pravi nazivi projekata, lokacije, obim, godina.
2. Fotografija za kvadrat u "O nama".
3. Potvrda da su 25+ godina i "decenijsko iskustvo" tačni.
