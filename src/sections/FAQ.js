import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";

const FAQ = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="12" lg="12" sm="12">
              <div className="section-title text-center mb-12 mb-lg-17">
                <h2 className="title gr-text-4 mb-7">FAQs</h2>

                <p>
                  Clients have relied on Presidio Cost Solutions to prepare,
                  analyze, and resolve their construction claims and disputes.
                  In addition, clients and their attorneys have called on
                  Presidio Cost Solutions’s experts to perform forensic analysis
                  of construction projects to determine liability for increased
                  cost, reduced labor productivity, defects, and schedule
                  delays.
                </p>

              </div>
            </Col>
          </Row>

                <Row className="align-items-center">
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
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
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
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
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          2
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Modern Reporting
                        </h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
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
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          3
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Industry-Leading Collaboration
                        </h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          4
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Unparalleled Expertise
                        </h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
        </Container>
      </div>
    </>
  );
};

export default FAQ;