import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import cellular from "./../../assets/image/stock/cellular.jpeg";

const trackingId = "UA-183812989-1";

const Wireless = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/expertise/wireless");
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
            background-image: url(${cellular});
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
                    WIRELESS / CELLULAR
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    It's tough to conceptualize costs for systems without wires.
                    Radio-frequency (RF) technologies are all the hype these
                    days, but let's try to bring some clarity on costs.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <p className="mt-8">
            Airport campuses can present many logistic challenges to the
            construction phasing process, and require a special attention to
            labor factoring and productivity impacts. Our team has seen more
            exposure to these challenges than most, and have unique experience
            that can help prepare more accurate cost estimates for airport
            construction.{" "}
          </p>
          <p>
            Let's take a look at some common cost-drivers for airport
            construction:
          </p>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Wireless;
