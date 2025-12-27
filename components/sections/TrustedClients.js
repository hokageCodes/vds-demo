"use client";

export default function ClientsSection() {
  const clientNames = [
    "Daraju Industries",
    "Akermas Limited",
    "Zeco Logistics",
    "BluePower Energy",
    "Zephyr Gold",
    "Outreach Global",
    "Mabucom Nigeria",
    "Benoly & Co",
    "Marvaid Group",
    "Avery Solutions",
    "Eshrow International",
  ];

  return (
    <section className="w-full bg-primary py-8">
      <h2 className="text-center text-2xl font-heading text-foreground mb-4">
        Trusted by Clients Across Industries
      </h2>

      {/* Infinite Scroll */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll gap-10 whitespace-nowrap">
          {[...clientNames, ...clientNames].map((name, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-12 w-32 flex items-center justify-center text-secondary font-semibold text-center"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
