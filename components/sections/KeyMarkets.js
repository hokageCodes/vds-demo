"use client";

import Image from "next/image";

const tradeLanes = [
  {
    flag: "🇨🇳",
    title: "China to Nigeria",
    subtitle: "Guangzhou & Shanghai Warehouses",
  },
  {
    flag: "🇺🇸",
    title: "USA to Nigeria",
    subtitle: "Houston & New York Hubs",
  },
  {
    flag: "🇬🇧",
    title: "UK to Nigeria",
    subtitle: "London Heathrow & Felixstowe",
  },
  {
    flag: "🇮🇳",
    title: "India to Nigeria",
    subtitle: "Mumbai & New Delhi connections",
  },
];

export default function KeyMarkets() {
  return (
    <section className="bg-surface py-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: Text & Lanes */}
        <div className="flex-1 w-full max-w-xl">
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-3">
            Connecting Key Global Markets to Lagos
          </h2>
          <p className="text-text-secondary mb-8">
            VDS Global Logistics specializes in trade lanes that matter most to Nigerian businesses. We have established networks and warehouses in key locations.
          </p>
          <div className="space-y-4 mb-6">
            {tradeLanes.map((lane, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm flex items-center gap-4 px-5 py-4">
                <span className="text-2xl">{lane.flag}</span>
                <div className="text-left">
                  <div className="font-semibold text-base text-text-primary">{lane.title}</div>
                  <div className="text-xs text-text-secondary">{lane.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="text-accent font-semibold text-sm hover:underline flex items-center gap-1">
            View Rates & Schedules <span aria-hidden>→</span>
          </a>
        </div>
        {/* Right: Map or Image */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white/60">
            <Image
              src="/africa.jpeg"
              alt="World map logistics"
              width={500}
              height={350}
              className="object-cover w-full min-h-[300px] min-w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
