"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Vilka typer av cyklar reparerar ni?",
    answer:
      "Vi reparerar alla typer av cyklar, inklusive stadscyklar, mountainbikes, elcyklar och racercyklar.",
  },
  {
    question: "Hur bokar jag en reparation?",
    answer:
      "Du kan boka en reparation genom att kontakta oss via kontaktformuläret på vår kontaktsida eller ringa oss direkt.",
  },
  {
    question: "Erbjuder ni garantier?",
    answer:
      "Ja, vi erbjuder garantier och prenumerationer på service. Du kan läsa mer på sidan 'Garantier & Prenumerationer'.",
  },
  {
    question: "Kan jag köpa cyklar direkt på hemsidan?",
    answer:
      "Nej, alla köp sker vid möte på plats för att undvika felaktiga köp. Hemsidan visar vårt utbud och priser.",
  },
  {
    question: "Vilka betalningsmetoder accepterar ni?",
    answer:
      "Vi accepterar kontant betalning och Swish vid upphämtning eller service på plats.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-zinc-50 min-h-screen font-sans">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Vanliga frågor (FAQ)
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Här hittar du svar på vanliga frågor om våra tjänster och produkter.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-4 py-3 font-medium text-gray-900 flex justify-between items-center hover:bg-gray-100 transition"
              >
                {faq.question}
                <span className="ml-2 text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
