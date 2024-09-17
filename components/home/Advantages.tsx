import React from "react";

const advantages = [
  {
    title: "24/7 Availability",
    description: "Provides round-the-clock assistance, ensuring users can get help at any time.",
  },
  {
    title: "Instant Responses",
    description: "Delivers immediate answers to common questions, reducing wait times for users.",
  },
  {
    title: "Contextual Understanding",
    description: "Remembers the context of conversations to provide more relevant and accurate responses.",
  },
  {
    title: "Govt Services Integration",
    description: "Connects users to relevant government services and resources directly from the chat interface.",
  },
  {
    title: "Real-Time Updates",
    description: "Provides real-time updates on application statuses, policy changes, and other relevant information.",
  },
  {
    title: "AI-Powered Chatbot",
    description: "Enhances user experience by offering instant assistance, personalized responses, and integration with services.",
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function AdvantageCard({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-8 rounded-full bg-[#00c7ff] flex items-center justify-center">
      <CheckIcon />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-left">{title}</h3>
  </div>
  <p className="text-gray-600 dark:text-gray-300 text-left">{description}</p>
</div>

  );
}

export default function Advantages() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Discover{" "}
          <span className="bg-gradient-to-r from-[#00c7ff] to-cyan-500 bg-clip-text text-transparent">
            The Advantages
          </span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <AdvantageCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}