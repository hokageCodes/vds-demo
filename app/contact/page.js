"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      {/* Hero Section */}
      <section className="relative h-[32rem] flex items-center justify-center overflow-hidden" aria-label="Contact Hero">
        <div className="absolute inset-0">
          <Image
            src="/contact.jpeg"
            alt="Contact background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-900/70" aria-hidden="true"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Connect with VDS Global Logistics for reliable freight forwarding and clearing solutions in Lagos and beyond.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-muted">
            <MapPin className="text-accent mb-2" size={32} />
            <div className="font-bold text-foreground mb-1">Visit Our Office</div>
            <div className="text-foreground text-sm">12 Wharf Road, Apapa,<br />Lagos, Nigeria</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-muted">
            <Phone className="text-accent mb-2" size={32} />
            <div className="font-bold text-foreground mb-1">Call Us</div>
            <div className="text-foreground text-sm">Mon-Fri from 8am to 5pm.</div>
            <a href="tel:+2348001234567" className="text-accent font-semibold mt-1">+234 800 123 4567</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-muted">
            <Mail className="text-accent mb-2" size={32} />
            <div className="font-bold text-foreground mb-1">Email Us</div>
            <div className="text-foreground text-sm">Send us a query anytime.</div>
            <a href="mailto:info@vdsglobal.com" className="text-accent font-semibold mt-1">info@vdsglobal.com</a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-8 border border-muted">
            <h2 className="font-heading text-2xl font-bold mb-2 text-foreground">Send us a Message</h2>
            <p className="text-muted mb-6 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-muted mb-1">First Name</label>
                <input id="firstName" name="firstName" type="text" autoComplete="given-name" className="w-full rounded-lg border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                <input id="lastName" name="lastName" type="text" autoComplete="family-name" className="w-full rounded-lg border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" className="w-full rounded-lg border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full rounded-lg border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-1">Service Type</label>
                <select id="serviceType" name="serviceType" className="w-full rounded-lg border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>General Inquiry</option>
                  <option>Air Freight</option>
                  <option>Ocean Freight</option>
                  <option>Customs Clearing</option>
                  <option>Warehousing</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Tell us more about your shipment needs..."></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end mt-2">
                <button type="submit" className="bg-accent text-accentFg px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-accent/90 transition-colors">
                  Send Message <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* Quick Quote & Location */}
          <div className="flex flex-col gap-8">
            <div className="rounded-lg p-6 text-foreground flex items-start gap-3 shadow">
              <MessageSquare className="mt-1" size={28} />
              <div>
                <div className="font-bold mb-1">Need a Quick Quote?</div>
                <p className="text-foreground text-sm mb-2">Chat with our support team instantly on WhatsApp for urgent inquiries and clearing estimates.</p>
                <a href="https://wa.me/2348001234567" target="_blank" rel="noopener noreferrer" className="inline-block underline text-green-600 font-semibold px-4 py-2 rounded-lg mt-1 transition-colors">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
