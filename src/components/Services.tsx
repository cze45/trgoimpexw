import { useState } from "react";
import { Building2, Construction, HardHat, Truck, Grid3X3, Route, ChevronDown } from "lucide-react";

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
		icon: Grid3X3,
		title: "Ograđivanje",
		desc: "Izrada i ugradnja ograda različitih vrsta — od žičanih i panelnih do drvenih i betonskih ograda.",
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
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section id="usluge" className="py-20 md:py-24 bg-background relative">
			<div className="container mx-auto px-6">
				<div className="max-w-2xl mb-12 md:mb-16">
					<h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
						Naše <span className="text-primary">usluge</span>
					</h2>
					<p className="text-muted-foreground text-lg">Ovo su poslovi koje radimo.</p>
				</div>

				{/* Mobilni akordeon — samo ikonica + naslov, klik za opis */}
				<div className="md:hidden grid grid-cols-1 border-t border-border">
					{services.map((s, i) => {
						const open = openIndex === i;
						return (
							<div key={s.title} className="border-b border-border">
								<button
									type="button"
									aria-expanded={open}
									onClick={() => setOpenIndex(open ? null : i)}
									className="w-full flex items-center gap-4 py-5 text-left"
								>
									<s.icon className="w-7 h-7 shrink-0 text-primary transition-smooth" />
									<span className="font-display text-xl text-card-foreground flex-1">
										{s.title}
									</span>
									<ChevronDown
										className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
											open ? "rotate-180 text-primary" : ""
										}`}
										strokeWidth={1.5}
									/>
								</button>
								<div
									className={`grid transition-[grid-template-rows] duration-300 ease-out ${
										open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
									}`}
								>
									<div className="overflow-hidden">
										<p className="pb-5 pr-4 text-muted-foreground leading-relaxed">
											{s.desc}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Desktop — sve kartice sa opisom */}
				<div className="hidden md:grid grid-cols-3 gap-px bg-border">
					{services.map((s) => (
						<div
							key={s.title}
							className="group bg-card p-8 hover:bg-secondary transition-smooth cursor-default relative overflow-hidden"
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
