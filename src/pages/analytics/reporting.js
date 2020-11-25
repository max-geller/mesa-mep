import React, { useState } from "react";
import ReactGA from "react-ga";

import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import BI from "../../sections/BI";
import analytics from "../../assets/image/bi-dashboard.jpeg";

const trackingId = "UA-183812989-1";

const Reporting = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/analytics/reporting");
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
            background-image: url(${analytics});
          `}
        >
          <Container>
            <Row className="align-items-center">
              <Col
                md="9"
                lg="7"
                xl="8"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-content section-title dark-mode-texts">
                  <h1 className="gr-text-3 font-weight-bold mb-8">
                    VISUAL REPORTING
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Modern Business Intelligence (BI) platforms like Microsoft
                    PowerBI and Tableau have enabled a number of new reporting
                    possibilities. Let's show you how we can prepare modern
                    analytics dashboards to drive insights.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <BI />
        </Container>
      </PageWrapper>
    </>
  );
};
export default Reporting;
