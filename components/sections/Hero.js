"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Plane, Ship, Truck, Package } from "lucide-react";
import Carousel from "../ui/Carousel";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function HeroSection() {
	const [currentService, setCurrentService] = useState(0);

	const services = [
		{ icon: Plane, text: "Air Freight" },
		{ icon: Ship, text: "Sea Freight" },
		{ icon: Truck, text: "Ground Transport" },
		{ icon: Package, text: "Warehousing" },
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentService((prev) => (prev + 1) % services.length);
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="relative min-h-[95vh] flex items-center bg-black w-full">
			{/* Background */}
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
					alt="Global logistics operations with cargo and containers"
					className="w-full h-full object-cover opacity-60"
					loading="eager"
					fetchPriority="high"
				/>
				<div
					className="absolute inset-0 bg-black/60"
					aria-hidden="true"
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 px-2 sm:px-6 grid lg:grid-cols-1 gap-6 items-center w-full max-w-7xl mx-auto">
				<header className="text-white space-y-8 max-w-5xl">
					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
						Ship from China, UK, USA, India, South Africa…
					</h1>
					<p className="text-lg text-muted max-w-xl">
						VDS Global Logistics Ltd offers a full range of clearing and
						forwarding services worldwide. We are competent, fast, reliable
						and innovative.
					</p>
				</header>

				{/* Animated Service Highlight */}
				<nav
					aria-label="Highlighted services" 
					className="flex items-center gap-4 rounded-2xl p-6 overflow-x-auto"
					tabIndex={0}
				>
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={index}
								className={`flex items-center gap-3 transition-all duration-500 ${
									currentService === index
										? "scale-110 opacity-100"
										: "scale-90 opacity-40"
								}`}
								aria-current={currentService === index}
							>
								<div
									className={`p-3 rounded-full ${
										currentService === index
											? "bg-accent"
											: "bg-muted"
									}`}
									aria-label={service.text}
								>
									<Icon size={24} />
								</div>
								{currentService === index && (
									<span className="font-semibold text-lg text-white">
										{service.text}
									</span>
								)}
							</div>
						);
					})}
				</nav>

				{/* Track Shipment Input */}
				<form
					className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-lg w-full mt-4"
					role="search"
					aria-label="Track your shipment"
				>
					<Input
						type="text"
						placeholder="Enter your tracking number"
						className="flex-1 px-6 py-4 text-lg text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded-l-full border-0"
						aria-label="Tracking number"
					/>
					<Button
						type="submit"
						className="bg-accent text-white px-6 py-4 text-lg font-medium rounded-r-full hover:bg-orange-600 transition-shadow shadow-md h-full"
						aria-label="Track"
					>
						Track
					</Button>
				</form>
			</div>

			<div className="absolute bottom-0 w-full bg-black/70 py-4">
				<div className="w-full mx-auto px-2 sm:px-6">
					<div className="flex items-center gap-4 mb-3">
						<hr className="flex-1 border-muted" />
						<h2 className="text-sm sm:text-base font-heading text-white whitespace-nowrap">
							Trusted by
						</h2>
						<hr className="flex-1 border-muted" />
					</div>
					<div className="relative overflow-hidden">
						<div className="flex items-center gap-10 whitespace-nowrap animate-scroll">
							{[
								"DARAJU INDUSTRIES LTD",
								"AKERMAS ENERGY LTD",
								"ZECO NIGERIA LTD",
								"BLUE POWER GLOBAL INVESTMENT LTD",
								"ZEPHYRGOLD GROUP PLC",
								"OUTREACH MEDICAL SERVICES LTD",
								"MABUCOM ENERGY LTD",
								"BENOLY AND COMPANY LTD",
								"MARVAID CREST WEST AFRICA LTD",
								"AVERY NIGERIA LTD",
								"ESHROW ASSOCIATES LTD",
								"DARAJU INDUSTRIES LTD",
								"AKERMAS ENERGY LTD",
								"ZECO NIGERIA LTD",
							].map((name, idx) => (
								<span
									key={idx}
									className="text-xs sm:text-sm text-muted tracking-wide"
								>
									{name}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-scroll {
					animation: scroll 25s linear infinite;
				}
			`}</style>
		</section>
	);
}
