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
                Meet the Accubid Specialists
              </h2>
              <p className="gr-text-8 px-lg-7 px-xl-0">
                Modern building systems account for the highest cost-variance in
                commercial construction. Presidio Cost Solutions provides
                industry-leading tools to make informed cost decisions.
              </p>
            </div>
          </Col>
        </Row>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Estimating;
