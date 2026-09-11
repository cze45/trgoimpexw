import { Building2, Construction, HardHat, Truck, Ruler, Route } from "lucide-react";

const services = [
	{
		icon: Construction,
		title: "Niskogradnja",
		desc: "Putevi, mostovi, tuneli i ostala saobraćajna infrastruktura.",
	},
	{
		icon: Building2,
		title: "Visokogradnja",
		desc: "Stambeni, poslovni i industrijski objekti.",
	},
	{
		icon: Ruler,
		title: "Projektovanje",
		desc: "Projektna dokumentacija i konsalting.",
	},
	{
		icon: Truck,
		title: "Iskopi i radovi",
		desc: "Zemljani radovi, iskopi, nasipanje i pripremni radovi za sve vrste gradnje.",
	},
	{
		icon: Route,
		title: "Asfaltiranje",
		desc: "Asfaltiranje puteva, parkinga i industrijskih površina.",
	},
	{
		icon: HardHat,
		title: "Inženjering",
		desc: "Stručni nadzor i vođenje gradnje.",
	},
];

export function Services() {
	return (
		<section id="usluge" className="py-20 md:py-24 bg-background relative">
			<div className="container mx-auto px-6">
				<div className="max-w-2xl mb-12 md:mb-16">
					<h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
						Naše <span className="text-primary">usluge</span>
					</h2>
					<p className="text-muted-foreground text-lg">Ovo su poslovi koje radimo.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
					{services.map((s) => (
						<div
							key={s.title}
							className="group bg-card p-7 md:p-8 hover:bg-secondary transition-smooth cursor-default relative overflow-hidden"
						>
							<div className="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-smooth duration-500" />
							<s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 group-hover:text-brand-green transition-smooth" />
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
