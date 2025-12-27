"use client";

export default function ParallaxCTA() {
  return (
    <section
      className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundAttachment: 'fixed',
        backgroundImage:
          "url('/hero.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-white mb-4 drop-shadow-lg">
          Ready to Move Your Cargo?
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg drop-shadow">
          Get a quote today and experience seamless, reliable logistics solutions tailored for your business.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition text-lg"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}
