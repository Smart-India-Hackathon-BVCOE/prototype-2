import React from "react";

const transformations = [
  {
    feature: "Fast",
    oldProcess: "Processes were slow and time-consuming, leading to significant delays.",
    newProcess: "Experience lightning-fast performance and quick load times, dramatically reducing delays and boosting productivity.",
  },
  {
    feature: "Optimized",
    oldProcess: "Inefficient resource usage led to higher costs and wasted time.",
    newProcess: "Our solution is optimized for maximum efficiency and minimal resource usage, cutting costs and saving valuable time.",
  },
  {
    feature: "AI-Powered",
    oldProcess: "Manual processes and outdated technology slowed down decision-making and operations.",
    newProcess: "Leverage advanced AI technology for smarter, more intuitive interactions, enhancing decision-making and streamlining operations.",
  },
  {
    feature: "User-Friendly Interface",
    oldProcess: "Complex and confusing interfaces made training and adoption difficult.",
    newProcess: "Our user-friendly interface simplifies navigation and training, making it easier to get started and use effectively.",
  },
  {
    feature: "Secure",
    oldProcess: "Inadequate security measures exposed data to risks and non-compliance.",
    newProcess: "Robust security features protect your data and ensure compliance with the latest standards, safeguarding your information effectively.",
  },
  {
    feature: "24/7 Support",
    oldProcess: "Limited support hours led to extended downtime and unresolved issues.",
    newProcess: "Our 24/7 support ensures that any issues are promptly addressed, minimizing downtime and keeping operations smooth.",
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