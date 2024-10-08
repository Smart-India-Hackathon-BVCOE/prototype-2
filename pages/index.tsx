import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import Advantages from "@/components/home/Advantages";
import Transformation from "@/components/home/Transformation";
import FAQ from "@/components/home/FAQ";
import { useEffect, useState } from 'react';

// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        {/* <Projects /> */}
        <Features />
        <Advantages />
        <Transformation />
        {/* <Testimonials /> */}
        <FAQ />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/* <CTA /> */}
    </Page>
  );
}
