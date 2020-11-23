import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgBanner from "./../../../assets/image/stock/takeoff.jpg";
import estimate from "./../../../assets/image/stock/takeoff.jpg";

import takeoffSample from "./../../../assets/image/takeoff-sample.jpg";

const trackingId = "UA-183812989-1";

const Takeoff = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/solutions/trades/takeoff");
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
                  <h1 className="gr-text-3 font-weight-bold mb-8">
                    DETAILED TAKEOFF
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    We know how hard it can be to find competent electrical and
                    low-voltage estimators, especially during spikes in bidding
                    activity. We pride ourselves in preparing sensible and clear
                    takeoff documentation.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="justify-content-center mt-11 mb-11">
            <Col xl="6" lg="6" sm="11" xs="11">
              <div className="section-title text-left mb-11 mb-lg-20">
                <h4 className="title gr-text-6 mb-5">
                  Your Trusted Partner for Electrical Takeoff & Survey
                </h4>
                <p className="gr-text-8  px-xl-0">
                  Whether you're looking for a long term partner for takeoff
                  services, or just need assistance with a single estimate,
                  we're here to help ensure you can focus on what matters:
                  profitability.
                </p>
                <p>
                  Quantity Surveys are needed for a wide variety of purposes,
                  including:{" "}
                </p>
                <ul>
                  <li>Preparing Competitive Estimates for Bidding</li>
                  <li>Providing Rough-Order-of-Magnitude (ROM) Pricing</li>
                  <li>Measuring Work</li>
                  <li>Value Engineering & Feasibility</li>
                  <li>Valuing change orders</li>
                </ul>

                <p>Our team has experience with</p>
                <ul>
                  <li>Accubid Classic Estimating</li>
                  <li>On-Screen Takeoff</li>
                  <li>BlueBeam Revu</li>
                  <li>Trimble Live Count</li>
                </ul>
              </div>

            </Col>

            <Col xs="12" xs="6">
              <div className="banner-fluid-image pt-lg-9">
                <img src={takeoffSample} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Takeoff;
