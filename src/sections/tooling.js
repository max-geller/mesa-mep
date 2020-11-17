import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";
import estimating from "../assets/image/stock/estimating.jpeg";

const Tooling = () => {
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
                  SOFTWARE & TOOLING
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
              <h2 className="title gr-text-4 mb-7">Tooling & Software</h2>
              <p className="gr-text-8 px-lg-7 px-xl-0">
                Modern construction requires modern tooling. Presidio Cost
                Solutions leverages the latest in construction technology to
                prepare, evaluate, and deliver our insights.
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
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          1
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Estimating & Takeoff
                        </h3>
                        <p>
                          Presidio Cost Solutions strives to deliver an
                          unprecedented level of detail into our final client
                          deliverables. We do this by utilizing the same
                          software and tooling as our finest electrical and
                          low-voltage trade partners. Cost reconciliation is a
                          breeze when you speak the same cost language, so we
                          make every effort to use the same estimating methods
                          and techniques as our construction counterparts. Let's
                          have a look:
                        </p>
                        <ul>
                          <li className="gr-text-9 mb-0">Accubid Pro 14</li>
                          <li className="gr-text-9 mb-0">Accubid Enterprise</li>
                          <li className="gr-text-9 mb-0">
                            Accubid Change Order
                          </li>
                          <li className="gr-text-9 mb-0">On-Screen Takeoff</li>
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
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          2
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Advanced Client Reporting & BI
                        </h3>
                        <p>
                          Tired of looking at endless spreadsheets? We are too.
                          Let's show you how we can bring insights into your
                          estimates and historical costs using some modern
                          Business Intelligence (BI) platforms:
                        </p>
                        <ul>
                          <li className="gr-text-9 mb-0">Microsoft Power BI</li>
                          <li className="gr-text-9 mb-0">Adobe Analytics</li>
                          <li className="gr-text-9 mb-0">Tableau</li>
                          <li className="gr-text-9 mb-0">Snowflake</li>
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
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          3
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Project Management / Document Control
                        </h3>
                        <p>
                          Project Management technologies are continuously
                          changing, but we're pretty good at keeping up. Let us
                          integrate with your existing systems of record for
                          easier collaboration.
                        </p>
                        <ul>
                          <li className="gr-text-9 mb-0">Procore</li>
                          <li className="gr-text-9 mb-0">Building Connected</li>
                          <li className="gr-text-9 mb-0">PlanGrid</li>
                        </ul>
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
                          5
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          PDF Markup / File Sharing / Collaboration
                        </h3>
                        <p>
                          Design collaboration and review can be a crucial step
                          in understanding cost contributors. Our team is
                          equipped to handle any collaboration environment you
                          may find yourself in.
                        </p>
                        <ul>
                          <li className="gr-text-9 mb-0">BlueBeam Revu</li>
                          <li className="gr-text-9 mb-0">Box.com</li>
                          <li className="gr-text-9 mb-0">OneDrive</li>
                          <li className="gr-text-9 mb-0">PlanGrid</li>
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
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          6
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Teleconference / Video
                        </h3>
                        <p>
                          Let's face it, today's construction consulting
                          requires a level of remote accessability that we
                          haven't seen before in this industry. Presidio has you
                          covered. We're equipped to deliver insights anywhere
                          in the world, whether in-person or via remote
                          services. Let's take a look:
                        </p>
                        <ul>
                          <li className="gr-text-9 mb-0">Zoom Meetings</li>
                          <li className="gr-text-9 mb-0">Microsoft Teams</li>
                          <li className="gr-text-9 mb-0">Cisco WebEx</li>
                        </ul>
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
                          1
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Client Data Engagement
                        </h3>
                        <p>
                          We were frustrated by the lack of data-engagement
                          platforms to share complex datasets with our most
                          trusted clients. That's why we developed our own
                          Client Access Portal, powered by AWS & MongoDB:
                        </p>
                        <ul>
                          <li className="gr-text-9 mb-0">
                            Presidio Client Portal
                          </li>
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

export default Tooling;
