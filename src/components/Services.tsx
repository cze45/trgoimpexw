import { Building2, Construction, HardHat, Truck, Ruler, Route } from "lucide-react";

const services = [
	{
		icon: Construction,
		title: "Niskogradnja",
		desc: "Izgradnja puteva, mostova, tunela i ostale saobraćajne infrastrukture po najvišim standardima.",
	},
	{
		icon: Building2,
		title: "Visokogradnja",
		desc: "Stambeni, poslovni i industrijski objekti — od temelja do predaje ključa.",
	},
	{
		icon: Ruler,
		title: "Projektovanje",
		desc: "Kompletna projektna dokumentacija i konsalting u oblasti građevinarstva.",
	},
	{
		icon: Truck,
		title: "Iskopi i radovi",
		desc: "Zemljani radovi, iskopi, nasipanje i pripremni radovi za sve vrste gradnje.",
	},
	{
		icon: Route,
		title: "Asfaltiranje",
		desc: "Asfaltiranje puteva, parkinga i industrijskih površina uz primenu savremene mehanizacije.",
	},
	{
		icon: HardHat,
		title: "Inženjering",
		desc: "Stručni nadzor, vođenje gradnje i upravljanje građevinskim projektima.",
	},
];

export function Services() {
	return (
		<section id="usluge" className="py-24 bg-background relative">
			<div className="container mx-auto px-6">
				<div className="max-w-2xl mb-16">
					<div className="flex items-center gap-3 mb-4">
						<div className="w-12 h-1 bg-primary" />
						<span className="text-sm uppercase tracking-widest text-muted-foreground">
							Šta radimo
						</span>
					</div>
					<h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
						Naše <span className="text-primary">usluge</span>
					</h2>
					<p className="text-muted-foreground text-lg">
						Pružamo kompletna rešenja u građevinarstvu — od planiranja do
						realizacije.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
					{services.map((s) => (
						<div
							key={s.title}
							className="group bg-card p-8 hover:bg-secondary transition-smooth cursor-default relative overflow-hidden"
						>
							<div className="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-smooth duration-500" />
							<s.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-smooth" />
							<h3 className="font-display text-2xl mb-3 text-card-foreground group-hover:text-secondary-foreground transition-smooth">
								{s.title}
							</h3>
							<p className="text-muted-foreground group-hover:text-secondary-foreground/70 transition-smooth leading-relaxed">
								{s.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
