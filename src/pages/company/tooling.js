import React from "react";

import PageWrapper from "../../components/PageWrapper";
import Tooling from "../../sections/Tooling";
import CTA from "../../sections/CTA";
import Newsletter from "../../sections/Newsletter";

const Consultation = () => {
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
        <Tooling/>
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Consultation;
