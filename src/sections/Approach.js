import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";
import estimating from "../assets/image/stock/estimating.jpeg";

const Approach = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="bg-image bg-gradient bg-gradient-black mt-17 pt-14 pt-lg-12 pb-lg-12"
        css={`
          background-image: url(${estimating});
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
                  OUR APPROACH
                </h1>
                <p className="gr-text-8 pr-sm-7 pr-md-12"></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="content-section2 pt-12 pb-9 pt-lg-12 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <div className="section-title text-left mb-12 mb-lg-8">
              <h4>Early Engagement</h4>
              <h4>Select the right tool for the job</h4>
              <h4>Collaboration at Core</h4>
              <h4>Client Engagement</h4>
              <p>

              </p>
              <h4>Calibration</h4>
              <p>
                Presidio Cost Solutions commences most new client services with
                a ‘calibration’ period, which should be expected to take 1-2
                weeks. This process is intended to serve as a triangulation
                period in which our team strives to identify the commonalities
                and sources of variance using a number of our clients'
                historical projects. Using this information, along with feedback
                from your estimating team, we can develop and tune material and
                productivity costs that more accurately reflect your unique
                operating conditions.
              </p>
            </div>
          </Row>
          <Row className="align-items-center">
            <Col lg="8">
              <div className="content-widget mt-7 mt-lg-0 pl-xl-13">
                <Row className="align-items-center">
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Standard Estimate Deliverables include:
                        </h3>

                        <ul>
                          <li>Final Pricing Summary</li>
                          <li>Original Quantity Takeoff Documentation</li>
                          <li>Assemblies-Based Itemized Cost Estimate </li>
                          <li>Basis of Estimate & Qualifications</li>
                          <li>
                            Indirect Labor, Equipment & General Expense
                            Assumptions
                          </li>
                          <li>Labor Rate Assumptions</li>
                        </ul>
                      </div>
                    </div>
                  </Col>

                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="1800"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Deliverables and Services Available Upon Request:
                        </h3>

                        <ul>
                          <li>Conceptual Cost Model Report</li>
                          <li>Analytics BI Model using Power BI</li>
                          <li>Specification Evaluation</li>
                          <li>
                            Value Engineering Evaluation & Recommendations
                          </li>
                          <li>Subcontractor Buyout Support</li>
                          <li>IBEW Labor Market Evaluation</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Approach;
