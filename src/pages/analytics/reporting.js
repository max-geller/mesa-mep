import React, { useState } from "react";
import ReactGA from "react-ga";

import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import BI from "../../sections/BI";
import imgC1 from "../../assets/image/stock/data-center.jpeg";
import imgC2 from "../../assets/image/stock/cellular.jpeg";
import imgC3 from "../../assets/image/stock/precon.jpeg";
import imgC4 from "../../assets/image/stock/conduit.jpeg";

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
        <Container>
          <BI />
        </Container>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">Modern Reporting</h2>
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
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, research labs, high tech
                    office buildings, hospitality and resort, aviation, museums,
                    art galleries, retail, industrial, government, and
                    commercial office buildings. We offer you a comprehensive
                    range of project and cost management services including:
                    Strategic Planning, Project Management, Budget Management,
                    Schedule Management, Value Management, Claims Settlement,
                    Dispute Resolution, and Quantity Surveys.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Reporting;
