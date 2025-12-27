"use client";


import { useState, useEffect } from "react";
import {
  Plane,
  Ship,
  FileText,
  Truck,
  Package,
  Warehouse,
  ClipboardCheck,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import ParallaxCTA from "@/components/sections/ParallaxCTA";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "air-freight",
      title: "Need Air Cargo Company in Lagos Nigeria?",
      description: "VDS Global Logistics Ltd is your option! We are connected with most national and international airlines, offering unlimited import/export cargo space, with most competitive prices. We have no weight, size or piece limitations. Be rest assured your cargo is handled with utmost care.",
      image: "/services/air-freight.jpeg"
    },
    {
      id: "sea-freight",
      title: "Ocean Freight to Lagos Nigeria",
      description: "VDS Global Logistics Ltd offer a professional, comprehensive and cost effective ocean freight solution from China, UK, USA, India, South Africa, Turkey etc. to Nigeria, covering worldwide imports and exports, 20ft containers, 40ft containers, Cargo Groupage, Sea Cargo Consolidation, FCL/LCL, RORO.",
      image: "/services/sea-freight.jpeg"
    },
    {
      id: "customs",
      title: "Need a Clearing Agent in Lagos",
      description: "VDS Global Logistics Ltd provide best-in-all customs clearing services that expedite processes of our client’s supply chains. Our licensed custom expert team can pre-clear and initiate entry of cargo before arrival. We handle normal cargo & dangerous goods clearing at both Air Port and various Sea Ports in Nigeria.",
      image: "/services/clearing.jpeg"
    },
    {
      id: "door-to-door",
      title: "Need International Door to Door cargo Handling Agent?",
      description: "FVDS Global Logistics Ltd is here for you! With our well-crafted network of partners across the globe, we pick up your cargo from any country and deliver to your door step in Nigeria.",
      image: "/services/d2d.jpeg"
    },
    {
      id: "haulage",
      title: "In need of a Container Haulage Company in Apapa?",
      description: "VDS Global Logistics Ltd is here to assist you in moving your bulk cargo, 20ft containers & 40ft containers from APM Terminals, TICT, Port & Cargo, and other Terminals in Lagos to your preferred destination in Nigeria.",
      image: "/services/trucking.jpeg"
    },
    {
      id: "procurement",
      title: "Need to Buy goods from China to Nigeria?",
      description: "Through our strong international relationship with our vendors, VDS Global Logistics Ltd assists its clients to source for their goods from China, USA and UK within the approved time. We make purchase from Chinese online stores, 1688.com and Alibaba.",
      image: "/services/procurement.jpeg"
    },
    {
      id: "project",
      title: "Need a Project Cargo Logistics Company in Lagos?",
      description: "VDS Global Logistics Ltd is the right choice! Our Team of project logistics experts can handle consignments of various dimensions and complexity that requires specialized lifting equipment and team of certified riggers.",
      image: "/services/project.jpeg"
    },
    {
      id: "storage",
      title: "In need of Warehouse in Lagos?",
      description: "VDS Global Logistics Ltd offer a first class warehousing and distribution services that are equipped with the latest machinery. We have Warehouse facilities that allow for the efficient management of various aspects of the supply chain requirements of our clients. There is insurance cover which indemnifies our client against theft, loss, fire or damage.",
      image: "/services/project.jpeg"
    },
    {
      id: "export",
      title: "Do you need to Export from Nigeria?",
      description: "VDS Global Logistics Ltd will assist you in exporting your cargo to different countries. We export to USA, UK, Canada, South Africa and the rest. We export Agricultural produce, goods manufactured in Nigeria and goods for repair and return.",
      image: "/services/project.jpeg"
    },
  ];

  const sidebarLinks = [
    { icon: Plane, label: "Air Freight", id: "air-freight" },
    { icon: Ship, label: "Sea Freight", id: "sea-freight" },
    { icon: FileText, label: "Customs Clearing", id: "customs" },
    { icon: Truck, label: "Door-to-Door", id: "door-to-door" },
    { icon: Package, label: "Haulage", id: "haulage" },
    { icon: ClipboardCheck, label: "Procurement", id: "procurement" },
    { icon: Warehouse, label: "Project Logistics", id: "project" },
    { icon: FileCheck, label: "Documentation", id: "documentation" }
  ];

  // Scroll to service and highlight
  const scrollToService = (id) => {
    setSelectedService(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Highlight nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = services.map((service) => {
        const el = document.getElementById(service.id);
        if (!el) return { id: service.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: service.id, top: Math.abs(rect.top - 120) };
      });
      const visible = offsets.reduce((prev, curr) => (curr.top < prev.top ? curr : prev), { id: null, top: Infinity });
      if (visible.id && visible.id !== selectedService) {
        setSelectedService(visible.id);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [services, selectedService]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[32rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/services-hero.jpeg"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            End-to-end supply chain solutions tailored for your business. From air freight to complex project logistics, VDS Global delivers excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <div className="bg-primary rounded-2xl shadow-lg p-6 sticky top-24 border border-muted">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Navigation</h3>
              <p className="text-sm text-muted mb-6">Jump to a service</p>
              <nav className="space-y-2">
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = selectedService === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToService(link.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 border font-medium text-left ${
                        isActive
                          ? "bg-accent text-accentFg border-accent shadow-md"
                          : "text-foreground border-transparent hover:bg-muted hover:text-accentFg"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <Icon size={20} />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Contact Card */}
              <div className="mt-8 bg-accent rounded-2xl p-6 text-accentFg">
                <h4 className="font-bold text-lg mb-4">Need a Custom Solution?</h4>
                <p className="text-sm text-white/80 mb-4">
                  Our logistics team can create the perfect solution for you.
                </p>
                <button className="w-full bg-primary text-accent px-4 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </aside>

          {/* Services Content */}
          <main className="lg:col-span-9 space-y-12">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className="overflow-hidden scroll-mt-24 bg-white rounded-3xl shadow-xl border-0"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? "" : "lg:grid-flow-dense"}`}>
                    {/* Image */}
                    <div className={`relative h-80 lg:h-auto ${isEven ? "" : "lg:col-start-2"}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Content */}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <CardFooter className="p-0">
                        <button className="bg-accent text-accentFg px-6 py-3 rounded-xl font-semibold flex items-center gap-2 w-fit hover:shadow-xl transition-all duration-300 group">
                          Request Quote
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                      </CardFooter>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </main>
        </div>
      </div>

      {/* CTA Section */}
    <ParallaxCTA />
    </div>
  );
}