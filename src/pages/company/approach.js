import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import Tiers from "../../sections/Tiers";
import Approach from "../../sections/Approach";
import Newsletter from "../../sections/Newsletter";

const trackingId = "UA-183812989-1"; 

const Approach = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/company/approach");
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "left",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Client Login",
        }}
        footerConfig={{
          theme: "light",
        }}
      >
        <Approach />
        <Tiers />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Approach;
