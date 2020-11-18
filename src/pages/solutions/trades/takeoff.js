import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../../assets/image/stock/estimating.jpeg";

const Takeoff = () => {
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
                  <h1 className="gr-text-3 font-weight-bold mb-8">
                    DETAILED TAKEOFF
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    We know how hard it can be to find competent electrical and
                    low-voltage estimators, especially during spikes in bidding
                    activity.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="justify-content-center mt-11 mb-11">
            <Col xl="12" lg="12" sm="11" xs="11">
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

                <p>
                  Our team has experience with 
                </p>
                <ul>
                  <li>Accubid Classic Estimating</li>
                  <li>On-Screen Takeoff</li>
                  <li>BlueBeam Revu</li>
                  <li>Trimble Live Count</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center mt-11 mb-11">
            <Col xl="6" lg="8" sm="10">
              <div className="section-title text-center mb-11 mb-lg-20">
                <h2 className="title gr-text-4 mb-7">
                  Data-Driven MEP Solutions
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  Modern building systems account for the highest cost-variance
                  in commercial construction. Presidio Cost Solutions provides
                  industry-leading tools to make informed cost decisions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <!-- Fact Area --> */}
        <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
          <h4>Sample Takeoff Deliverables</h4>
          <ul>
            <li>Conceptual Example Estimate Report</li>
            <li>Assemblies-Based Example Estimate Report</li>
            <li>Detailed Example Estimate Report</li>
          </ul>
        </div>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Takeoff;
