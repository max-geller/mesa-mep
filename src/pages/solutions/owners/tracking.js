import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../../assets/image/stock/estimating.jpeg";

const trackingId = "UA-183812989-1";

const Tracking = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/solutions/owners/tracking");
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
            <Row className="justify-items-left">
              <Col
                md="9"
                lg="7"
                xl="6"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-content section-title dark-mode-texts text-left">
                  <h1 className="gr-text-3 font-weight-bold mb-8 text-left">
                    COST TRACKING & BI
                  </h1>
                  <p className="gr-text-10 text-left">
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
          <Row className="justify-content-center mt-11 mb-11">
            <Col xl="12" lg="12" sm="11" xs="11">
              <div className="section-title text-left mb-11 mb-lg-20">
                <h4 className="title gr-text-6 mb-5">
                  Let's Talk Costs...
                </h4>
                <p className="gr-text-8  px-xl-0">
                  Modern building systems account for the highest cost-variance
                  in commercial construction. Presidio Cost Solutions provides industry-leading
                  tools to make informed cost decisions.
                </p>
                <p>
                  Accurate MEP estimating requires thoughtful attention to
                  project requirements, system experience, familiarity with
                  local Code, and regional market pricing insights.  It's tough for today's owners, developers and general contractors to navigate the changing technologies and regulations.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-left mt-11 mb-11">
            <Col xl="12" lg="12" sm="12">
              <div className="section-title text-left mb-11 mb-lg-20">
                <p className="gr-text-8  px-xl-0">
                  Quantity Surveys are needed for a wide variety of purposes,
                  including: - Preparing estimates and bids - Measuring work
                  completed (for interim payments, etc.) - Valuing change orders
                  - Assessing the validity of claims - Value engineering - Life
                  cycle costing/cost-in-use - Due diligence studies Such
                  quantity surveys may be carried out from drawings or at the
                  actual site, as appropriate. Consequently, the method used for
                  carrying out the measurements will vary widely, with drawings
                  possibly be measured by scale rule, small measuring wheel,
                  digitizer, or on-screen software (such as BidScreen from
                  Vertigraph) used with electronic documents. On-site
                  measurements might be carried out using traditional tape,
                  electronic 'tape' measures, measuring wheel, etc. Whatever
                  method is used, the level of detail must be appropriate for
                  use to which it is being put, gathering ample records, but not
                  superfluous information. Quantity Surveys are normally part of
                  the process to achieving another goal, but in almost all cases
                  they are a very important part.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Tracking;
