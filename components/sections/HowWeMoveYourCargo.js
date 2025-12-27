"use client";

import { Package, Plane, ShieldCheck, Truck } from "lucide-react";

const steps = [
	{
		icon: Package,
		title: "Receive & Consolidate",
		description: "Cargo is received, inspected, and prepared for shipment.",
	},
	{
		icon: Plane,
		title: "Process & Ship",
		description: "We route your cargo using the most efficient channels.",
	},
	{
		icon: ShieldCheck,
		title: "Customs Clearance",
		description: "All documentation and regulatory processes are handled.",
	},
	{
		icon: Truck,
		title: "Final Delivery",
		description: "Your shipment is delivered safely to its destination.",
	},
];

export default function CargoFlowSection() {
	return (
		<section className="py-section bg-surface">
			<div className="max-w-7xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-heading text-text-primary mb-4">
					How We Move Your Cargo
				</h2>
				<p className="text-text-secondary">
					Our streamlined process ensures your cargo is handled with care and
					delivered on time.
				</p>

				{/* Desktop Flow */}
				<div className="hidden lg:block relative">
					{/* Curved Connector */}
					<svg
						className="absolute inset-0 w-full h-full pointer-events-none"
						viewBox="0 0 1200 420"
						fill="none"
					>
						<path
							d="M150 220 Q400 80, 450 220 T750 220 Q900 80, 1050 220"
							stroke="#D1D5DB"
							strokeWidth="3"
							strokeLinecap="round"
						/>
					</svg>

					{/* Steps */}
					<div className="grid grid-cols-4 gap-10 pt-24 relative z-10">
						{steps.map((step, idx) => {
							const Icon = step.icon;
							return (
								<div
									key={idx}
									className={`bg-white rounded-xl p-8 shadow-md transition hover:shadow-lg ${
										idx % 2 === 1 ? "translate-y-16" : ""
									}`}
								>
									<div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 mx-auto">
										<Icon size={28} />
									</div>

									<h3 className="text-lg font-semibold text-text-primary mb-2 text-center">
										{step.title}
									</h3>

									<p className="text-sm text-text-secondary text-center leading-relaxed">
										{step.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>

{/* Mobile & Tablet */}
<div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
  {steps.map((step, idx) => {
    const Icon = step.icon;
    return (
      <div
        key={idx}
        className="bg-white p-8 rounded-xl shadow-md text-center"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4 mx-auto">
          <Icon size={26} />
        </div>

        {/* Content */}
        <h3 className="font-semibold text-text-primary mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {step.description}
        </p>
      </div>
    );
  })}
</div>

			</div>
		</section>
	);
}
