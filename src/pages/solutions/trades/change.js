import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import forensics from "./../../../assets/image/stock/forensics.jpeg";

const Change = () => {
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
                    Need a hand managing ongoing changes for a project? We're
                    happy to help manage the change-order pricing process from
                    tip-to-tail...
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
