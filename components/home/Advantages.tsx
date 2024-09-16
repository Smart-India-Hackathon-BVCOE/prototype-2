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
    title: "Integration with Government Services",
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

function Advantages() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-8 md:py-12">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 md:mb-12">
        Discover the Advantages
        <br />
        That Benefit You
      </h2>

      <div className="relative max-w-full mx-auto grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md h-72 flex-shrink-0"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advantages;
