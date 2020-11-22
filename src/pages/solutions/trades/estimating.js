import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../../assets/image/accubid.JPG";

const Estimating = () => {
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
                  <h1 className="gr-text-2 font-weight-bold mb-8">
                    ACCUBID ESTIMATING
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Trimble Accubid has become a staple for electrical
                    estimators and contractors throughout the United States. Our
                    team has exhaustive experience in both Accubid Classic,
                    Change Order, and Enterprise...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Row className="justify-content-center">
          <Col xl="6" lg="8" sm="10">
            <div className="section-title text-center mb-11 mb-lg-20">
              <h2 className="title gr-text-4 mb-7 mt-8">
                Not Your Average Bean Counters
              </h2>
              <p className="gr-text-8 px-lg-7 px-xl-0">
                The estimating package you will receive includes feeder
                schedules, equipment connection sheets, branch work sheets,
                fixture schedules, quote sheets (to send to your suppliers),
                computer print out of pricing and labor sheets, recap sheets,
                computer audit and detailed summary sheets. The estimates you
                will receive are prepared using the Electrical Bid Manager™
                estimating software by Vision InfoSoft Corporation, Accubid Pro
                10 by Trimble and IntelliBid Software by ConEst Software
                Systems.
              </p>
            </div>
          </Col>
        </Row>
        <Container>
          <p>
            With all of our estimating service options, the estimating package
            you receive will consist of:
          </p>
          <ul>
            <li>Power Feeders & Equipment</li>
            <li>Motor Feeders & Equipment Connections</li>
            <li>Systems Feeders & Devices</li>
            <li>Branch Work Sheets</li>
            <li>Quote Sheets to Send to Your Suppliers</li>
            <li>Pricing & Labor Computer Print Out</li>
            <li>Adjusted, Material & Labor Recap Sheet</li>
            <li>Estimate Summary & Preliminary Bid Price</li>
            <li>Inclusions and Exclusions Sheet (Standard Service™)</li>
          </ul>
        </Container>
        <Container>
          <h4>Confidence</h4>
          <p>
            We guarantee no copies of an estimate will be furnished to any other
            contractor.
          </p>
        </Container>

        <CTA />
      </PageWrapper>
    </>
  );
};

export default Estimating;
