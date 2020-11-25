import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../assets/image/stock/estimating.jpeg";

const trackingId = "UA-183812989-1";

const Hospitality = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/markets/hopitality");
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
            background-image: url(${estimate});
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
                  <h1 className="gr-text-3 font-weight-bold mb-8">HIGH-RISE</h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Let us take care of your MEP estimating needs. Our systems
                    estimating approach provides a level of cost-certainty
                    unparalleled in the industry.
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

        <Container>
          <Row className="justify-content-center mt-11 mb-11 ml-12">
            <Col xl="6" lg="6" sm="6">
              <h4>Hospitality Expertise</h4>
              <ul>
                <li>New Terminal Construction</li>
                <li>Terminal Modernization</li>
                <li>Hi-Mast Lighting</li>
                <li>Digital Signage & Wayfinding</li>
                <li>Concessions Improvements</li>
              </ul>
            </Col>
            <Col xl="6" lg="6" sm="6">
              <h4>Team-Specific Experience:</h4>
              <ul>
                <li>SFO Grand Hyatt Hotel</li>
                <li>San Francisco Tennis Center</li>
                <li>CitizenM Hotel San Francisco</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Hospitality;
