import React from "react";

function Features() {
  const features = [
    {
      title: "Fast",
      description:
        "Experience lightning-fast performance and quick load times.",
    },
    {
      title: "Optimized",
      description:
        "Our solution is optimized for maximum efficiency and minimal resource usage.",
    },
    {
      title: "AI-Powered",
      description:
        "Leverage advanced AI technology for smarter, more intuitive interactions.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Designed with ease of use in mind, our interface ensures a seamless user experience.",
    },
    {
      title: "Secure",
      description:
        "Top-notch security features to protect your data and ensure compliance with the latest standards.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any issues.",
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