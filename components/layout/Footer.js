"use client";

import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

const solutions = [
  "Ship to Nigeria",
  "Ship from China to Nigeria",
  "Ship from USA to Nigeria",
  "Ship from UK to Nigeria",
  "Ship from Turkey to Nigeria",
  "Ship from India to Nigeria",
  "Ship from South Africa to Nigeria",
  "Track a Shipment",
];

const services = [
  "Our Services",
  "Door-to-Door Delivery",
  "Bulk Cargo Handling",
  "Haulage & Delivery",
  "Customs Clearing",
  "Project Logistics",
  "Documentation",
  "Ocean Freight",
  "Procurement",
  "Air Freight",
  "Storage",
  "Export",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-12 pb-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        {/* Brand & Description */}
        <div>
          <div className="text-2xl font-heading font-bold mb-3">VDS Global Logistics</div>
          <p className="text-sm text-white/80 mb-4 max-w-xs">
            Reliable freight forwarding, customs clearance, and logistics solutions connecting Nigeria with the world.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <Facebook size={20} className="hover:text-accent transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin size={20} className="hover:text-accent transition" />
            </a>
          </div>
        </div>
        {/* Our Solutions */}
        <div>
          <div className="font-semibold mb-3 text-accent">Our Solutions</div>
          <ul className="space-y-2 text-sm">
            {solutions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <div className="font-semibold mb-3 text-accent">Our Services</div>
          <ul className="space-y-2 text-sm">
            {services.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <div className="font-semibold mb-3 text-accent">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>7, ST Finbarr's College Road, Akoka Yaba, Lagos, Nigeria.</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +2347049397434</li>
            <li className="flex items-center gap-2"><Mail size={16} /> vdsgloballogisticsltd@gmail.com</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@vdsgloballogisticsltd</li>
            <li>Website: <a href="https://www.vdsgloballogistics.com" className="underline hover:text-accent">www.vdsgloballogistics.com</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-white/60 gap-2">
        <div>&copy; {new Date().getFullYear()} VDS Global Logistics. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
