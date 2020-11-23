import React, { useState } from "react";
import ReactGA from "react-ga";

import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";

import examples from "../../assets/image/examples/tier2-estimate.png";

const trackingId = "UA-183812989-1";

const Examples = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/company/examples");
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
            background-image: url(${examples});
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
                    EXAMPLE DELIVERABLES
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12"></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <div></div>
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                    Let's Check out Some Samples:
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    Presidio Cost Solutions is a leading construction consulting
                    firm providing a portfolio of professional support services
                    to a wide range of clients including owners, contractors,
                    attorneys, engineers, insurers, and suppliers involved in
                    the engineering and construction process. Presidio Cost
                    Solutions offers guidance and control for all types of
                    architectural construction projects.
                  </p>
                  <Container>
                    <h4>Some Examples:</h4>
                    <ul>
                      <li>
                        <a
                          href="https://presidiosolutions.s3-us-west-1.amazonaws.com/tier2.pdf"
                          target="blank"
                        >
                          Sample Assemblies Based
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://presidiosolutions.s3-us-west-1.amazonaws.com/SampleBOE.pdf"
                          target="blank"
                        >
                          Sample Basis of Estimate
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://presidiosolutions.s3-us-west-1.amazonaws.com/PCS+Electrical+Itemized+Estimate.pdf"
                          target="blank"
                        >
                          PCS Detailed Estimate Example
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://presidiosolutions.s3-us-west-1.amazonaws.com/PCS+Sort+Codes_Master.pdf"
                          target="blank"
                        >
                          PCS Standard Phase Codes
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://presidiosolutions.s3-us-west-1.amazonaws.com/ExampleAccubidSummary.pdf"
                          target="blank"
                        >
                          Example Accubid Summary
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://presidiosolutions.s3-us-west-1.amazonaws.com/PCS+LV+Basis+of+Estimate.pdf"
                          target="blank"
                        >
                          PCS Low Voltage Basis of Estimate
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://presidiosolutions.s3-us-west-1.amazonaws.com/SpecificScopeTempPower.pdf"
                          target="blank"
                        >
                          Example Specific Scope of Work (Temporary Power)
                        </a>
                      </li>
                    </ul>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Examples;
