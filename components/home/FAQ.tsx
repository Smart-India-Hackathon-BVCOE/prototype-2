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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-8 md:py-12 bg-gray-50 dark:bg-gray-900">
      <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Frequently {" "}
        <span className="underline underline-offset-3 decoration-[#00c7ff] dark:decoration-[#00c7ff] decoration-8">
          Asked Questions
        </span>
      </h1>

      <div className="w-full max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden relative"
          >
            <div className="absolute inset-0 border-2 border-[#00c7ff] rounded-lg pointer-events-none"></div>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-6 font-semibold flex justify-between items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 relative z-10"
            >
              <span className="text-lg pr-8">{faq.question}</span>
              <span className="text-[#00c7ff] font-bold text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-6 bg-gray-50 dark:bg-gray-700 relative z-10">
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;