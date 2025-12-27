"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Globe, Package, Shield, Zap, Smile } from "lucide-react";
import ParallaxCTA from "@/components/sections/ParallaxCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[32rem] flex items-center justify-center overflow-hidden" aria-label="About Hero">
        <div className="absolute inset-0">
          <Image
            src="/about/abby.jpeg"
            alt="Cargo containers and logistics background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
        </div>
      </section>
          <p className="px-2 text-justify mt-6 text-xl text-left md:text-center lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            VDS GLOBAL LOGISTICS LTD is a Nigeria company registered by Corporate Affairs Commission under the Companies and Allied Matters Act (CAMA 1990), as an innovative and customer-oriented freight forwarding and logistics company located in Lagos, Nigeria. We are powered by a team of approximately 10 highly professional staff with a combined experience over 10 years in the industry. We provide unlimited, safe and cost effective freight forwarding and logistics solutions to commercial enterprises, Government Agencies, NGO’s and individuals. Always looking forward and always adapting to our fast changing world, we are constantly working to find solutions to all obstacles you may face in regards to your logistics needs.

          </p>

      {/* Stats Section */}
      <section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">12+</div>
            <div className="text-foreground text-sm mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">500+</div>
            <div className="text-foreground text-sm mt-1">Global Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">15k</div>
            <div className="text-foreground text-sm mt-1">Successful Shipments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">50+</div>
            <div className="text-foreground text-sm mt-1">Countries Served</div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-accent text-xs font-bold uppercase mb-2 tracking-widest">Our Story</h2>
            <h3 className="font-heading text-3xl font-bold mb-4 text-foreground">From Local expert to Global Player</h3>
            <p className="text-foreground mb-4">
              Founded in the bustling heart of Lagos, VDS Global Logistics started with a simple mission: to simplify the complexities of customs clearing and freight forwarding for Nigerian businesses.
            </p>
            <p className="text-foreground mb-4">
              Over the last decade, we have grown from a small clearing agency into a full-service logistics powerhouse. Today, we leverage an extensive network of global partners to move cargo efficiently by air, sea, and land, ensuring that borders are never barriers to your business growth.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-foreground"><CheckCircle className="text-accent" size={18} /> Licensed Customs Agents</li>
              <li className="flex items-center gap-2 text-foreground"><CheckCircle className="text-accent" size={18} /> IATA Accredited Partner</li>
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-muted">
            <Image src="/africa.jpeg" alt="Warehouse team at work" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="absolute bottom-4 left-4 bg-white/90 rounded-xl px-4 py-2 shadow text-xs font-semibold text-foreground">
              <span className="block">HEADQUARTERS</span>
              <span className="block font-normal">Apapa, Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-section container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-foreground">Our Purpose</h2>
        <p className="text-foreground mb-10 max-w-2xl mx-auto">We don’t just move boxes; we move businesses forward by creating value through reliable logistics.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 text-left">
            <div className="flex items-center gap-3 mb-2"><Package className="text-accent" size={22} /><span className="font-bold text-foreground">Our Mission</span></div>
            <p className="text-foreground">To provide seamless, efficient, and cost-effective logistics solutions that empower businesses in Nigeria and West Africa to connect with the global market without boundaries.</p>
          </Card>
          <Card className="p-6 text-left">
            <div className="flex items-center gap-3 mb-2"><Globe className="text-accent" size={22} /><span className="font-bold text-foreground">Our Vision</span></div>
            <p className="text-foreground">To be the most trusted and innovative freight forwarding partner in Africa, setting the standard for excellence in global supply chain management.</p>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center text-center">
            <Shield className="text-accent mb-2" size={32} />
            <h4 className="font-bold mb-2 text-foreground">Integrity First</h4>
            <p className="text-foreground text-sm">We believe in honest communication. No hidden fees, no surprises. We treat your cargo as if it were our own.</p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <Zap className="text-accent mb-2" size={32} />
            <h4 className="font-bold mb-2 text-foreground">Speed & Efficiency</h4>
            <p className="text-foreground text-sm">Time is money in logistics. We optimize routes and leverage technology to ensure the fastest delivery times possible.</p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <Smile className="text-accent mb-2" size={32} />
            <h4 className="font-bold mb-2 text-foreground">Customer Centricity</h4>
            <p className="text-foreground text-sm">We build relationships, not just client lists. Our dedicated support team is always available to update you on your shipment’s status.</p>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
    <ParallaxCTA />
    </div>
  );
}
