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
        <h1 className="text-3xl font-bold text-center mb-6">
          Transforming the Way You Work
        </h1>
        <p className="text-center mb-12">
          From Slow and Laborious to Fast and AI-Enhanced
        </p>
  
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-lg shadow-md flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{item.feature}</h2>
              <h3 className="text-lg font-medium mb-2 text-gray-300">Old Process:</h3>
              <p className="mb-4 text-gray-500">{item.oldProcess}</p>
              <h3 className="text-lg font-medium mb-2 text-gray-300">New Process:</h3>
              <p className="text-gray-400">{item.newProcess}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default Transformation;
