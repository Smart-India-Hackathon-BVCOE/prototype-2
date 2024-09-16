import React from "react";

function Features() {
  const features = [
    {
      title: "Fast",
      description: "Experience lightning-fast performance and quick load times.",
    },
    {
      title: "Optimized",
      description: "Our solution is optimized for maximum efficiency and minimal resource usage.",
    },
    {
      title: "AI-Powered",
      description: "Leverage advanced AI technology for smarter, more intuitive interactions.",
    },
    {
      title: "User-Friendly Interface",
      description: "Designed with ease of use in mind, our interface ensures a seamless user experience.",
    },
    {
      title: "Secure",
      description: "Top-notch security features to protect your data and ensure compliance with the latest standards.",
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any issues.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-8 md:py-12">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 md:mb-12">
        Discover Our Key Features
        <br />
        That Set Us Apart
      </h2>

      <div className="relative max-w-full mx-auto grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {features.map((item, index) => (
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

export default Features;
