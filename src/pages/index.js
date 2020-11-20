import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Content from "../sections/Content";
import CTA from "../sections/CTA";
import FAQ from "../sections/FAQ";
import Newsletter from "../sections/Newsletter";



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
        <FAQ />
        <CTA />

        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Consultation;
