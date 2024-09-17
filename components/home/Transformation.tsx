import React from "react";

const transformations = [
  {
    feature: "AI-Driven Verification",
    oldProcess: "Manual document verification was prone to errors and required significant time and effort.",
    newProcess: "Utilizes advanced machine learning models to automate and enhance the accuracy of document verification, significantly reducing errors and processing time.",
  },
  {
    feature: "Real-Time Assistance",
    oldProcess: "Users had to navigate through complex forms and processes without immediate support.",
    newProcess: "Provides instant help and personalized responses via an AI-powered chatbot, simplifying navigation and improving user experience.",
  },
  {
    feature: "Automated Workflows",
    oldProcess: "The application process involved numerous manual steps, leading to inefficiencies and delays.",
    newProcess: "Automates the entire application process from submission to verification, streamlining workflows and reducing manual effort.",
  },
  {
    feature: "Government Integration",
    oldProcess: "Users had to access multiple platforms and services separately for various government-related tasks.",
    newProcess: "Seamlessly connects users to relevant government services and resources directly through integrated APIs, enhancing accessibility and convenience.",
  },
  {
    feature: "Modern Interface",
    oldProcess: "Outdated and clunky interfaces hindered user interaction and overall efficiency.",
    newProcess: "Built with modern technologies for a clean, intuitive interface that enhances user experience and simplifies interactions.",
  },
  {
    feature: "Scalable Backend",
    oldProcess: "Previous systems struggled with performance and scalability issues due to limited backend capabilities.",
    newProcess: "Employs a scalable backend architecture with Vercel, PostgreSQL, and AWS S3, ensuring high performance, scalability, and secure data storage.",
  },
];


function Transformation() {
  return (
    <div className="p-8">
      <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Revolutionizing{" "}
        <span className="underline underline-offset-3 decoration-[#00c7ff] dark:decoration-[#00c7ff] decoration-8">
          Your Workflow
        </span>
      </h1>
      
      <div className="relative max-w-full mx-auto grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2">
        {transformations.map((item, index) => (
          <div key={index} className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 relative flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="absolute inset-0 border-2 border-[#00c7ff] rounded-lg pointer-events-none"></div>
            
            {/* Old Process */}
            <div className="flex-1 relative z-10">
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Old Process:</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">{item.oldProcess}</p>
            </div>
            
            {/* Arrow */}
            <div className="mx-6 relative z-10">
              <span className="text-[#00c7ff] text-2xl">&#10132;</span>
            </div>
            
            {/* New Process */}
            <div className="flex-1 relative z-10">
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">New Process:</h3>
              <p className="text-gray-700 dark:text-gray-400">{item.newProcess}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transformation;