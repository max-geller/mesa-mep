import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/Hero";
import Fact from "../sections/Fact";
import Services from "../sections/Services";
import Content from "../sections/Content";
import Alert from "../sections/Alert";
import Testimonial from "../sections/Testimonial";
import CTA from "../sections/CTA";
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
        <Fact />
        <Services />
        <Content />
        <Alert />
        <p>
          What We Do Clients have relied on Presidio Cost Solutions to prepare, analyze,
          and resolve their construction claims and disputes. In addition,
          clients and their attorneys have called on Presidio Cost Solutions’s experts to
          perform forensic analysis of construction projects to determine
          liability for increased cost, reduced labor productivity, defects, and
          schedule delays. Clients benefit from the comprehensive evaluation and
          professional presentation that Presidio Cost Solutions provides on each
          assignment. Our experts assist clients with divesting, restructuring,
          improving, and acquiring firms involved in engineering and
          construction. Whether supplying key project management personnel on
          work sites, or supporting project management efforts from our home
          office, clients depend on Presidio Cost Solutions when a positive change or
          action is required. Design Consulting Cost Estimating Cost Analytics
          Project Controls Market Research
        </p>
        <Testimonial />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Consultation;
