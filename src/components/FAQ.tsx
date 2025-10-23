import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Most stores are designed, built, and launched within 48-72 hours. We work quickly without compromising quality. You will get regular updates throughout the process and can request revisions before launch.',
    },
    {
      question: 'Do I need technical skills?',
      answer: 'Not at all! That is the whole point of Storely. We handle all the technical work—design, development, hosting, and setup. You will get a simple admin dashboard to manage products and orders. We also provide training to make sure you are comfortable.',
    },
    {
      question: 'Can I use my own domain?',
      answer: 'Absolutely! If you have a custom domain, we will connect it for free. If you do not have one yet, we can help you register one at cost. Your store will look completely professional with your own branded URL.',
    },
    {
      question: 'What if I want to add more products later?',
      answer: 'Easy! With the one-time plan, you own the store and can add unlimited products yourself through the admin dashboard. With the monthly plan, we offer product upload support—just send us your product details and images.',
    },
    {
      question: 'What payment methods do you support?',
      answer: 'We integrate Paystack for online card payments, and WhatsApp for direct customer communication and transactions. This gives your customers flexible payment options and you get instant notifications for every sale.',
    },
    {
      question: 'Can I cancel the monthly plan anytime?',
      answer: 'Yes, there is no long-term commitment. You can cancel anytime with 30 days notice. If you cancel, you will have the option to export your data or upgrade to the one-time ownership plan at a discounted rate.',
    },
    {
      question: 'What is included in maintenance and updates?',
      answer: 'With the monthly plan, we handle all technical updates, security patches, performance optimization, and bug fixes. Your store stays fast, secure, and up-to-date automatically—you never have to worry about the technical side.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a satisfaction guarantee. If you are not happy with the initial design, we will revise it until you love it. Since we deliver a custom service, we do not offer refunds after launch, but we will work with you to make sure everything is perfect.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about getting your store online.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-emerald-200 transition-colors duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Still have questions?
          </p>
          <p className="text-gray-600 mb-4">
            We are here to help! Reach out and we will answer anything you need to know.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
