import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Content from "../sections/Content";
import CTA from "../sections/CTA";
import Systems from "../sections/Systems";
import FAQ from "../sections/FAQ";
import Projects from "../sections/Projects";
import Actions from "../sections/Actions";
import Newsletter from "../sections/Newsletter";

const trackingId = "UA-183812989-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const Consultation = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "left",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Client Login",
        }}
        footerConfig={{
          theme: "light",
        }}
      >
        <Hero />
        <Services />
        <Content />
        <Systems />
        <Actions />
        <Projects />
        <FAQ />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Consultation;
