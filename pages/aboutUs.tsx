import React from 'react';
import AboutUs from '@/components/aboutUs/AboutUs';
import More from "components/projects/More";
import Page from "components/utility/Page";

const AboutUsPage = () => {
  return (
    <div>
      <Page
        currentPage="AboutUs"
        meta={{ title: "AboutUs", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
      >
        <AboutUs />
        <More />
      </Page>
    </div>
  );
}

export default AboutUsPage;
