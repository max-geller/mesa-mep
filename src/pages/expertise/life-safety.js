import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import map from "./../../assets/image/stock/fire-alarm.jpeg";

const trackingId = "UA-183812989-1";

const LifeSafety = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/expertise/life-safety");
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
            background-image: url(${map});
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
                    Fire & Life Safety
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Fire and life-safety systems can be tough to keep up with
                    these days. Local jurisdictions, changing technologies, and
                    heighting requirements for high-rise buildings add to the
                    confusion. Let's help make sense of these systems for you...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default LifeSafety;
