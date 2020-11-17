import React from "react";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../assets/image/stock/estimating.jpeg";

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
                  🚀 Data-Driven MEP Solutions
                </h4>
                <p className="gr-text-8  px-xl-0">
                  Modern building systems account for the highest cost-variance
                  in commercial construction. Presidio Cost Solutions provides industry-leading
                  tools to make informed cost decisions.
                </p>
                <p>
                  Accurate MEP estimating requires thoughtful attention to
                  project requirements, system experience, familiarity with
                  local Code, and regional market pricing insights.
                </p>
                <ul>
                  <li>Accubid Estimating</li>
                  <li>On-Screen Takeoff</li>
                  <li>BlueBeam Xtreme</li>
                  <li>Autodesk Revit</li>
                  <li>Trimble Live Count</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
        <Row className="justify-content-center mt-11 mb-11" >
            <Col xl="6" lg="8" sm="10">
              <div className="section-title text-center mb-11 mb-lg-20">
                <h2 className="title gr-text-4 mb-7">
                  Data-Driven MEP Solutions
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  Modern building systems account for the highest cost-variance in commercial construction.  Presidio Cost Solutions provides industry-leading tools to make informed cost decisions.
                </p>
              </div>
            </Col>
          </Row>
          </Container>
        {/* <!-- Fact Area --> */}
        <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
          <Container>
            <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
              <h3 className="gr-text-3 mr-9">1M+</h3>
              <p className="gr-text-9 mb-0">Somin somin</p>
            </div>

            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp duration={3} end={93} />%
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Satisfaction rate from our customers.
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp
                        duration={3}
                        decimal="."
                        decimals={1}
                        end={4.9}
                      />
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Average customer ratings out of 5.00!
                </p>
              </div>
            </Col>
          </Container>
          <p>
            Quantity Surveys are needed for a wide variety of purposes,
            including: - Preparing estimates and bids - Measuring work completed
            (for interim payments, etc.) - Valuing change orders - Assessing the
            validity of claims - Value engineering - Life cycle
            costing/cost-in-use - Due diligence studies Such quantity surveys
            may be carried out from drawings or at the actual site, as
            appropriate. Consequently, the method used for carrying out the
            measurements will vary widely, with drawings possibly be measured by
            scale rule, small measuring wheel, digitizer, or on-screen software
            (such as BidScreen from Vertigraph) used with electronic documents.
            On-site measurements might be carried out using traditional tape,
            electronic 'tape' measures, measuring wheel, etc. Whatever method is
            used, the level of detail must be appropriate for use to which it is
            being put, gathering ample records, but not superfluous information.
            Quantity Surveys are normally part of the process to achieving
            another goal, but in almost all cases they are a very important
            part.
          </p>
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
