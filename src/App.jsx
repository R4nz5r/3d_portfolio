import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <ShowcaseSection />
    </>
  );
};

export default App;
