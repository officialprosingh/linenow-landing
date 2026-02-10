"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "What is LineNow and how does it streamline order communication?",
    answer:
      "LineNow is an AI-driven B2B operating system that connects buyers and suppliers through a unified interface. It uses advanced machine learning to automate data entry, predict stock needs, and sync directly with your existing ERP or messaging tools.",
  },
  {
    question: "How does the AI email processing work?",
    answer:
      "Our AI scans incoming order emails, extracts key data points (SKUs, quantities, addresses), and pre-fills your order dashboard. You just review and click confirm.",
  },
  {
    question: "Is my data secure on the platform?",
    answer:
      "Security is our top priority. We use enterprise-grade AES-256 encryption, SOC 2 Type II compliance, and role-based access controls to ensure your business data stays private.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-ln-text-color">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass px-6 rounded-xl border-ln-slate-navy mb-4"
            >
              <AccordionTrigger className="text-ln-text-color font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-ln-subtext leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
