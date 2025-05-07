import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./sections/Navbar";
import LogoSection from "./sections/LogoSection";
import FeaureCards from "./sections/FeaureCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaureCards />
    </>
  );
};

export default App;
