import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "./../../../components/PageWrapper";
import Fact from "../../../sections/Fact";
import Services from "../../../sections/Services";
import Content from "../../../sections/Content";
import Alert from "../../../sections/Alert";
import Testimonial from "../../../sections/Testimonial";
import CTA from "../../../sections/CTA";
import Newsletter from "../../../sections/Newsletter";

const trackingId = "UA-183812989-1";

const News = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/company/news");
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

        <Fact />
        <Services />
        <Content />
        <Alert />
        <Testimonial />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default News;
