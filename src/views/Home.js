import React from "react";
import Footer from "../components/layout/Footer";
// import sections
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Hero from "../components/sections/Hero";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      {/* <Testimonial topDivider />
      <Cta split /> */}
      <Footer />
    </>
  );
};

export default Home;
