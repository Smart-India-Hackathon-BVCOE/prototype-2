import React from "react";

const advantages = [
  {
    title: "Faster Processing",
    description: "Reduces the approval time from two months to one week through automation and streamlined workflows.",
  },
  {
    title: "Enhanced Transparency",
    description: "Provides real-time updates and tracking for institutions and evaluators, ensuring visibility at every process stage.",
  },
  {
    title: "Improved Accuracy",
    description: "AI-driven verification significantly reduces errors and rejections by ensuring compliance with AICTE standards.",
  },
  {
    title: "Robust Security",
    description: "Ensures sensitive information is safeguarded with advanced security measures and data protection protocols.",
  },
  {
    title: "Cost Efficiency",
    description: "Minimizes manual labor and errors, leading to lower operational costs and resource usage.",
  },
  {
    title: "User Satisfaction",
    description: "Streamlined and efficient processes enhance the overall experience for institutions and users.",
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white text-left">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-left">{description}</p>
    </div>
  );
}

export default function Advantages() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Discover{" "}
          <span className="underline underline-offset-3 decoration-[#00c7ff] dark:decoration-[#00c7ff] decoration-8">
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
