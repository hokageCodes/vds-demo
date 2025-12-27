"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does VDS Global Logistics offer?",
    answer:
      "We offer freight forwarding, customs clearance, warehousing, and door-to-door delivery services connecting Nigeria with global markets.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using the tracking number provided, directly on our website's tracking section.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes, we provide efficient customs clearance services to ensure your cargo moves smoothly through all regulatory processes.",
  },
  {
    question: "Can you deliver to my doorstep?",
    answer:
      "Absolutely! We offer reliable door-to-door delivery for your convenience.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-section bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md border border-border overflow-hidden transition-all"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none group"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-label={`Toggle answer for: ${faq.question}`}
              >
                <span className="font-semibold text-foreground text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`ml-4 h-5 w-5 text-accent transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <div
                className={`px-6 pb-5 text-foreground text-sm transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                style={{ overflow: "hidden" }}
              >
                {openIndex === idx && <div>{faq.answer}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
