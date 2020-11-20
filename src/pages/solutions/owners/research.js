import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import research from "./../../../assets/image/stock/research.jpeg";

const Research = () => {
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
            background-image: url(${research});
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
                    MARKET RESEARCH
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    History shows the buyout process of MEP systems is the
                    single-largest contributor to trade bid variance. Let's get
                    you setup for success.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
          <Container>
            <Row className="justify-content-center">
              <Col xl="12" lg="12" sm="12">
                <div className="section-title text-center mb-12 mb-lg-17">
                  <h2 className="title gr-text-4 mb-7">
                    Why Presidio Cost Solutions?
                  </h2>

                  <p>
                    Looking for a survey of electrician labor rates?  Need to know union market share? 
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1200">
                <div className="single-widget my-7 media">
                  <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="count text-primary--light-only gr-text-9">
                      1
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="w-title mb-5 gr-text-7">
                      Trade-Level Estimating Detail
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="750">
                <div className="single-widget my-7 media">
                  <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="count text-primary--light-only gr-text-9">
                      2
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="w-title mb-5 gr-text-7">
                      Unparalleled Expertise
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1800">
                <div className="single-widget my-7 media">
                  <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="count text-primary--light-only gr-text-9">
                      3
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="w-title mb-5 gr-text-7">Modern Reporting</h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1800">
                <div className="single-widget my-7 media">
                  <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="count text-primary--light-only gr-text-9">
                      4
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="w-title mb-5 gr-text-7">
                      Industry-Leading Collaboration
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
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

export default Research;
