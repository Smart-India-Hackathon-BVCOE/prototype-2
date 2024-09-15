import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the purpose of this website?",
    answer: "This website aims to provide efficient and AI-powered solutions to streamline government processes and improve user experience."
  },
  {
    question: "How does the AI-powered chatbot work?",
    answer: "The AI-powered chatbot uses advanced algorithms to understand user queries and provide accurate and helpful responses in real-time."
  },
  {
    question: "Is my data secure on this platform?",
    answer: "Yes, we employ top-notch security measures to protect your data and ensure compliance with the latest standards."
  },
  {
    question: "What support options are available?",
    answer: "We offer 24/7 support to assist you with any issues or questions you may have. Feel free to reach out at any time."
  },
  {
    question: "Can I provide feedback about the website?",
    answer: "Absolutely! We welcome and encourage feedback to continually improve our services. You can contact us through the feedback form available on the website."
  },
  {
    question: "How do I get started with using the website?",
    answer: "Simply sign up and follow the user guide provided on the website. If you encounter any issues, our support team is here to help."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-8 md:py-12">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 md:mb-12">
        Frequently Asked Questions
        <br />
        Find Answers to Common Queries
      </h2>

      <div className="relative max-w-full mx-auto grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-1">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 font-semibold flex justify-between items-center bg-gray-100 text-gray-600"
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-lg">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
