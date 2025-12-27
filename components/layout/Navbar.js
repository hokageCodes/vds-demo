"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Facebook, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-foreground shadow-lg w-full z-50">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-lg font-bold tracking-wide">
            VDS Global Logistics
          </div>
          {/* Desktop Links (ONLY lg+) */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-accent transition">
              Our Services
            </Link>
            <Link href="/about" className="hover:text-accent transition">
              About VDS
            </Link>
            <Link href="/contact" className="hover:text-accent transition">
              Contact Us
            </Link>
          </div>
          {/* CTAs (Tablet + Desktop, hidden on mobile) */}
          <div className="hidden md:flex lg:flex gap-3">
            <Button variant="default" className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md">
              Get a Quote
            </Button>
            <Button variant="outline" className="border-accent text-accent px-6 py-3 rounded-lg text-sm font-semibold">
              Track Shipment
            </Button>
          </div>
          {/* Hamburger (Mobile + Tablet) */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {/* Mobile / Tablet Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden flex flex-col gap-4 pb-6 text-sm">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-accent transition">
              Our Services
            </Link>
            <Link href="/about" className="hover:text-accent transition">
              About VDS
            </Link>
            <Link href="/clients" className="hover:text-accent transition">
              Client List
            </Link>
            <Link href="/contact" className="hover:text-accent transition">
              Contact Us
            </Link>
            <Button variant="default" className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md w-full">
              Get a Quote
            </Button>
            <Button variant="outline" className="border-accent text-accent px-6 py-3 rounded-lg text-sm font-semibold w-full">
              Track Shipment
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
