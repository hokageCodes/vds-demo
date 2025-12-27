import React, { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          carousel.style.scrollBehavior = "smooth";
          carousel.style.transition = "transform 0.3s ease-in-out"; // Faster on mobile
        } else {
          carousel.style.scrollBehavior = "smooth";
          carousel.style.transition = "transform 0.6s ease-in-out"; // Default speed
        }
      };

      handleResize(); // Set initial speed
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="text-white text-2xl font-bold mb-4">Our Services</h2>
      <div className="carousel flex gap-4 overflow-x-auto">
        {/* Example service cards */}
        <div className="service-card bg-primary text-white p-6 rounded-lg shadow-md min-w-[300px]">
          <h3 className="text-xl font-semibold">Freight Forwarding</h3>
          <p className="text-sm mt-2">
            Reliable freight forwarding services connecting global markets.
          </p>
        </div>
        <div className="service-card bg-primary text-white p-6 rounded-lg shadow-md min-w-[300px]">
          <h3 className="text-xl font-semibold">Customs Clearance</h3>
          <p className="text-sm mt-2">
            Efficient customs clearance for hassle-free logistics.
          </p>
        </div>
        <div className="service-card bg-primary text-white p-6 rounded-lg shadow-md min-w-[300px]">
          <h3 className="text-xl font-semibold">Door-to-Door Delivery</h3>
          <p className="text-sm mt-2">
            Seamless delivery services to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}