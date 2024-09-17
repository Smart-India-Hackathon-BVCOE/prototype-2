import React from "react";

function Features() {
  const features = [
    {
      title: "AI-Driven Verification",
      description: "Uses advanced machine learning models to verify documents and ensure accuracy.",
    },
    {
      title: "Real-Time Assistance",
      description: "A chatbot powered by Llama offers instant support and personalized responses.",
    },
    {
      title: "Automated Workflows",
      description: "Fully automates the AICTE application process, from submission to verification.",
    },
    {
      title: "Government Integration",
      description: "Connects users to relevant government services and resources through seamless API integration.",
    },
    {
      title: "Modern Interface",
      description: "Built with NextJS, Django, and TailwindCSS for a clean, intuitive, and user-friendly experience.",
    },
    {
      title: "Scalable Backend",
      description: "Utilizes Vercel, PostgreSQL, and AWS S3 to ensure performance, scalability, and secure data storage.",
    },
  ];
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-8 md:py-12">
      <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Our{" "}
        <span className="underline underline-offset-3 decoration-[#00c7ff] dark:decoration-[#00c7ff] decoration-8">
          Key Features
        </span>
      </h1>

      {/* <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}

      <div className="relative max-w-full mx-auto grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {features.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative"
          >
            <div className="absolute inset-0 border-2 border-[#00c7ff] rounded-lg pointer-events-none"></div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white relative z-10">
              {item.title}
            </h3>
            <p className="font-normal text-gray-700 dark:text-gray-400 relative z-10">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Features;