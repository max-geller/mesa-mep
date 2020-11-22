import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import forensics from "./../../../assets/image/stock/forensics.jpeg";

const Forensics = () => {
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
        {/* <!-- Hero Area --> */}
        <div
          className="bg-image bg-gradient bg-gradient-black mt-17 pt-14 pt-lg-12 pb-lg-12"
          css={`
            background-image: url(${forensics});
          `}
        >
          <Container>
            <Row className="align-items-center">
              <Col
                md="9"
                lg="7"
                xl="6"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-content section-title dark-mode-texts">
                  <h1 className="gr-text-3 font-weight-bold mb-8">
                    CHANGE FORENSICS
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Tough time digesting a spicy change order? We've been there. Let's
                    take a look for you...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col>
              <p className="mt-12">
                Let's face it, electrical change orders are tough to understand.
                As owners and developers, there's seldom enough overhead to
                warrant a dedicated electrical estimator to review costly change
                orders. Our team has robust in-house resources to help you make
                sense of contractor pricing for electrical, fire alarm, and
                low-voltage systems, and is experienced in representing
                ownership in COR negotiations.
              </p>
            </Col>
          </Row>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Forensics;
