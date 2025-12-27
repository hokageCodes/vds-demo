"use client";

import { Truck, Boxes, BadgeCheck, Ship, Plane } from "lucide-react";

export default function OurServicesSection() {
	const services = [
		{
			title: "Door-to-Door Pick-up & Delivery",
			description:
				"We offer quick and safe door-to-door pick up and delivery services from China, USA, UK, South Africa, India and other parts of the globe to any destination in Nigeria. Our team are professionals who can handle all classes of cargo through Air, Sea and Land.",
			icon: Truck,
		},
		{
			title: "Bulk Cargo Handling",
			description:
				"Efficient management and transportation of large-volume shipments. We ensure timely delivery and proper handling to maintain the integrity of your cargo.",
			icon: Boxes,
		},
		{
			title: "Customs Clearing",
			description:
				"Expert customs clearance for smooth and compliant cargo movement. We handle all documentation and regulatory requirements to ensure hassle-free import and export processes.",
			icon: BadgeCheck,
		},
		{
			title: "Ocean Freight",
			description:
				"VDS Global Logistics Ltd offer a professional, comprehensive and cost effective ocean freight covering worldwide imports and exports. These includes Full Container Load (FCL), Less than Container Load (LCL) Bulk Cargo Shipping, Consolidation, Roll-On Roll-Off (RORO).",
			icon: Ship,
		},
		{
			title: "Air Freight",
			description:
				"Our network is connected with most national & international airlines, offering unlimited import/export cargo space, with most competitive prices. We have no weight, size or piece limitations. Be rest assured your cargo is handled with utmost care.",
			icon: Plane,
		},
	];

	return (
		<section className="w-full py-section bg-surface">
			<div className="max-w-7xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-heading text-text-primary mb-6">
					Our Services
				</h2>
				<p className="text-text-secondary mb-12">
					We offer a wide range of logistics solutions tailored to meet your
					needs.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, idx) => {
						const Icon = service.icon;
						return (
							<div
								key={idx}
								className="bg-white shadow-soft rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition"
							>
								<div className="mb-4 text-accent">
									<Icon size={44} />
								</div>
								<h3 className="text-xl font-semibold text-text-primary mb-2">
									{service.title}
								</h3>
								<p className="text-text-secondary text-sm">
									{service.description}
								</p>
							</div>
						);
					})}
				</div>

				<div className="mt-12">
					<a
						href="/services"
						className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
					>
						View All Services
					</a>
				</div>
			</div>
		</section>
	);
}