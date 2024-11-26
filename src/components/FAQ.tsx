import { useState } from 'react';

const faqs = [
  {
    question: "How do I receive tips?",
    answer: "Simply show your unique QR code to the tipper or share your profile link."
  },
  {
    question: "How quickly can I withdraw my tips?",
    answer: "Tips can be withdrawn instantly to your linked bank account or mobile wallet."
  },
  {
    question: "Is there a minimum tip amount?",
    answer: "The minimum tip amount is R5 to ensure transaction efficiency."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="faq-card"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="font-bold">{faq.question}</h3>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}