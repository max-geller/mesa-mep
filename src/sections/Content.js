import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";
import imgC from "../assets/image/l2/jpg/l2-content2-img.jpg";

const Content = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" sm="10">
              <div className="section-title text-center mb-12 mb-lg-17">
                <h2 className="title gr-text-4 mb-7">
                  Why you should choose us?
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <p>
                  What We Do Clients have relied on Presidio Cost Solutions to
                  prepare, analyze, and resolve their construction claims and
                  disputes. In addition, clients and their attorneys have called
                  on Presidio Cost Solutions’s experts to perform forensic
                  analysis of construction projects to determine liability for
                  increased cost, reduced labor productivity, defects, and
                  schedule delays. Clients benefit from the comprehensive
                  evaluation and professional presentation that Presidio Cost
                  Solutions provides on each assignment. Our experts assist
                  clients with divesting, restructuring, improving, and
                  acquiring firms involved in engineering and construction.
                  Whether supplying key project management personnel on work
                  sites, or supporting project management efforts from our home
                  office, clients depend on Presidio Cost Solutions when a
                  positive change or action is required. Design Consulting Cost
                  Estimating Cost Analytics Project Controls Market Research
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="6">
              <h2> Here's where the video was</h2>
            </Col>
            <Col lg="5">
              <div className="content-widget mt-7 mt-lg-0 pl-xl-13">
                <Row className="align-items-center">
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          1
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          White-Label Client Access
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
                    data-aos-duration="1200"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          2
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Free Expert Opinion
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
                          Get Your Results
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
                          4
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Monitize Your Project Data
                        </h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
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

export default Content;
