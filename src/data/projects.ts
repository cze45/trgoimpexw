import bridgePhoto from "@/assets/works/asfaltiranje-mosta.webp";
import steelPhoto from "@/assets/works/celicna-konstrukcija.webp";
import asphaltPhoto from "@/assets/works/industrijski-plato.webp";
import fencePhoto from "@/assets/works/zicana-ograda.webp";

export const projects = [
  {
    slug: "asfaltiranje-mosta",
    cat: "Infrastruktura",
    img: bridgePhoto,
    alt: "Asfaltiranje kolovoza na mostu sa zaštitnim ogradama",
    position: "center 60%",
    width: 1600,
    height: 900,
    title: "Asfaltiranje kolovoza na mostu",
    desc: "Radovi na kolovozu mosta, uz postojeće trotoare i zaštitne ograde.",
    paragraphs: [
      "Fotografija prikazuje asfaltiranje kolovoza na mostu. Nova asfaltna površina prati krivinu mosta, između ivičnjaka i pešačkih staza.",
      "U pozadini se vide mašina za asfaltiranje i radnici tokom izvođenja radova. Sa obe strane kolovoza nalaze se metalne zaštitne ograde, a uz pešačku stazu stubovi rasvete.",
    ],
  },
  {
    slug: "celicna-konstrukcija-hale",
    cat: "Visokogradnja",
    img: steelPhoto,
    alt: "Radnici montiraju čeličnu konstrukciju hale",
    position: "center",
    width: 1600,
    height: 1200,
    title: "Čelična konstrukcija hale",
    desc: "Montaža čeličnih stubova, krovnih nosača i ukrućenja konstrukcije.",
    paragraphs: [
      "Na fotografiji je čelična konstrukcija hale u fazi montaže. Niz stubova i krovnih nosača formira oblik objekta, dok dijagonalna ukrućenja povezuju elemente konstrukcije.",
      "Radnici koriste podiznu platformu za pristup elementima na visini. Kadar prikazuje konstrukciju pre zatvaranja fasade i krova, sa vidljivim nosačima i spojevima.",
    ],
  },
  {
    slug: "industrijski-plato",
    cat: "Niskogradnja",
    img: asphaltPhoto,
    alt: "Asfaltirani industrijski plato između hala sa obeleženim parking mestima",
    position: "center",
    width: 1600,
    height: 1200,
    title: "Asfaltiranje industrijskog platoa",
    desc: "Asfaltirani prostor između hala sa pristupnom saobraćajnicom i parking mestima.",
    paragraphs: [
      "Fotografija prikazuje asfaltirani plato između dva reda industrijskih hala. Središnji prolaz omogućava prilaz objektima, a uz njega su obeležena parking mesta.",
      "Bele linije razdvajaju saobraćajnu traku i prostor za parkiranje. Asfaltna površina proteže se duž objekata i povezuje njihove ulaze sa unutrašnjom saobraćajnicom.",
    ],
  },
  {
    slug: "zicana-ograda",
    cat: "Ograđivanje",
    img: fencePhoto,
    alt: "Žičana ograda na betonskim stubovima sa kosnicima i bodljikavom žicom",
    position: "center 55%",
    width: 1200,
    height: 1600,
    title: "Žičana ograda",
    desc: "Žičana mreža na betonskim stubovima sa kosnicima.",
    paragraphs: [
      "Ogradu čine žičana mreža i betonski stubovi. Na fotografiji se vide kosi oslonci koji dodatno podupiru stub i zategnuta mreža između susednih stubova.",
      "Iznad mreže nalaze se redovi bodljikave žice. Ograda prati ivicu poljoprivredne površine i razdvaja je od pristupnog pojasa sa spoljne strane.",
    ],
  },
];
export type Project = (typeof projects)[number];
