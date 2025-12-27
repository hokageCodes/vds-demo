"use client";

const testimonials = [
	{
		name: "Daraju Industries Ltd",
		text: "VDS Global Logistics has been a reliable partner for our international shipments. Their attention to detail and timely deliveries have made a real difference for our business.",
	},
	{
		name: "Akermas Energy Ltd",
		text: "We appreciate the transparency and professionalism of the VDS team. Customs clearance and delivery have never been smoother.",
	},
	{
		name: "Zeco Nigeria Ltd",
		text: "The team at VDS goes above and beyond to ensure our cargo arrives safely and on time. Highly recommended!",
	},
];

export default function ClientTestimonials() {
	return (
		<section className="py-section bg-white">
			<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
				{/* Left: Heading and CTA */}
				<div className="flex-1 text-left">
					<h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
						What Our Customers Say
					</h2>
					<p className="text-text-secondary mb-6 max-w-md">
						Hear from businesses who trust VDS Global Logistics for their shipping
						and logistics needs.
					</p>
					<a
						href="#"
						className="inline-block bg-gradient-to-r from-accent to-orange-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition hover:opacity-90 text-sm"
					>
						View More
					</a>
				</div>
				{/* Right: Testimonials */}
				<div className="flex-1 flex flex-col gap-6 w-full max-w-xl">
					{testimonials.map((testimonial, idx) => (
						<div
							key={idx}
							className={`relative bg-surface rounded-xl shadow-md px-6 py-5 flex flex-col text-left border border-border ${
								idx === 1
									? "border-l-4 border-accent bg-white"
									: ""
							}`}
						>
							{/* Decorative quote icon */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={`w-6 h-6 absolute top-4 right-4 ${
									idx === 1 ? "text-accent" : "text-gray-300"
								}`}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7.5 8.25v-.375A2.625 2.625 0 0 1 10.125 5.25h.375A2.625 2.625 0 0 1 13.125 7.875v.375A2.625 2.625 0 0 1 10.5 10.875h-.375A2.625 2.625 0 0 1 7.5 8.25zm9 0v-.375A2.625 2.625 0 0 1 19.125 5.25h.375A2.625 2.625 0 0 1 22.125 7.875v.375A2.625 2.625 0 0 1 19.5 10.875h-.375A2.625 2.625 0 0 1 16.5 8.25z"
								/>
							</svg>
							<div className="font-semibold text-text-primary mb-1 text-base">
								{testimonial.name}
							</div>
							<div className="text-text-secondary text-sm">
								{testimonial.text}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
