import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";

const Content = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="12" lg="12" sm="12">
              <div className="section-title text-center mb-12 mb-lg-17">
                <h2 className="title gr-text-4 mb-7">
                  Why Presidio Cost Solutions?
                </h2>

                <p>
                  Clients have relied on Presidio Cost Solutions to prepare,
                  assist, analyze, and manage their construction estimating
                  process. In addition, clients and their attorneys have called
                  on Presidio Cost Solutions’s experts to perform forensic
                  analysis of construction projects to determine liability for
                  increased cost, reduced labor productivity, defects, and
                  schedule delays.
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
                    Our team uses the same tools and techniques as the largest
                    trade partners in the United States. When it comes to
                    helping electrical contractors with season support, we fit
                    right into the game plan. For general contractors, we set
                    you up for success during reconciliation environments.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1200">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    2
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="w-title mb-5 gr-text-7">
                    No Quantities? No Problem...
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Don't have quantities yet? No problem. We offer quantity
                    inference services and can even help in the development of a
                    basis of electrical and low-voltage design. Our team has
                    extensive design expertise to help guide basic quantity
                    development for meaningful decision-making.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="750">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    3
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="w-title mb-5 gr-text-7">
                    Unparalleled Expertise
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Presidio Cost Solutions has a diverse experience in
                    high-profile and technically-complex projects for both
                    private and public entities. No project is too large or too
                    complex for our team, and we've helped clients at every
                    level of the construction contract.
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
                  <h3 className="w-title mb-5 gr-text-7">Modern Reporting</h3>
                  <p className="gr-text-9 mb-0">
                    While our standard estimate reporting is second-to-none, we
                    strongly believe that we should empower our clients with
                    modern tooling to make their own informed findings, on their
                    own terms. We offer modern BI / Analytics capabilities,
                    powered by Microsoft Power BI, so that our clients can
                    engage with their data on their terms.
                  </p>
                </div>
              </div>
            </Col>

            <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1800">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    5
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="w-title mb-5 gr-text-7">
                    Industry-Leading Collaboration
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Let's face it, the world has changed quite a bit in the last
                    year. Who would have ever guessed "Social Distancing" would
                    ever be a term? Despite the challenges of remote
                    collaboration, there can be many advantages in hiring remote
                    estimating support. Presidio Cost Solutions is armed to the
                    gills with modern collaboration resources, such as Zoom,
                    Procore, Dropbox, Slack, and MS Teams, to name a few.
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

export default Content;
