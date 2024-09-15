import React from 'react';

function AboutUs() {
  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="text-3xl text-center font-bold mb-10">
        About Us
        <br />
        <span className="text-lg font-semibold">"Innovating the Path to Quality Education"</span>
      </h2>

      <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
        <p className="text-gray-700 text-base leading-relaxed">
          We are dedicated to making the AICTE approval process smoother and easier for everyone involved. 
          By using AI and automation, we aim to take the stress out of paperwork, speed up approvals, 
          and keep everyone in the loop with better communication. Our goal is to create a more transparent 
          and user-friendly system that helps institutions focus on what really matters—providing quality education.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
