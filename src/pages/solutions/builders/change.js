import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import forensics from "./../../../assets/image/stock/forensics.jpeg";

const trackingId = "UA-183812989-1";

const Change = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/solutions/builders/change");
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
                    CHANGE MANAGEMENT
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Tough time digesting a pesky change order? We've been there.
                    Let's take a look for you.
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

export default Change;
