import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../../assets/image/stock/estimating.jpeg";

const trackingId = "UA-183812989-1";

const Estimating = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/solutions/builders/estimating");
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
                    ELECTRICAL ESTIMATING
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
                  Your Electrical Estimating Partner
                </h4>
                <p className="gr-text-8  px-xl-0">
                  As design-builders, there is seldom enough margin on projects
                  to warrant a dedicated electrical estimator on a full-time
                  basis. We're here to help.
                </p>
                <p>
                  Accurate MEP estimating requires thoughtful attention to
                  project requirements, system experience, familiarity with
                  local Code, and regional market pricing insights. It's tough
                  for today's owners, developers and general contractors to
                  navigate the changing technologies and regulations.
                </p>
                <p>
                  General contractors are faced with a continually fluctuating
                  market which makes it frustrating to maintain reliable and
                  consistent workloads throughout the year. In today’s
                  environment of economic pullback, the construction trades are
                  seeing major cuts and contractors must do more with less. The
                  contracting industry as whole has always been subject to the
                  whims of commodity cost changes, local market conditions, and
                  the never-ending cycle of subcontractors; but with the current
                  resources, lack of training, and dwindling labor pool,
                  recovery in the construction sector may take years.
                </p>

                <Container>
                  <Row className="justify-content-center">
                    <Col xl="12" lg="12" sm="12">
                      <div className="section-title text-center mb-12 mb-lg-17">
                        <h2 className="title gr-text-4 mb-7">
                          Solutions at a Glance:
                        </h2>
                      </div>
                    </Col>
                  </Row>

                  <Row className="align-items-center">
                    <Col
                      md="6"
                      lg="6"
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
                            Cost Modeling / ROM Pricing
                          </h3>
                          <p className="gr-text-9 mb-0">
                            Our team uses the same tools and techniques as the
                            largest trade partners in the United States. When it
                            comes to helping electrical contractors with season
                            support, we fit right into the game plan. For
                            general contractors, we set you up for success
                            during reconciliation environments.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col
                      md="6"
                      lg="6"
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
                            Cost-Per-Square Foot Evaluations
                          </h3>
                          <p className="gr-text-9 mb-0">
                            Don't have quantities yet? No problem. We offer
                            quantity inference services and can even help in the
                            development of a basis of electrical and low-voltage
                            design. Our team has extensive design expertise to
                            help guide basic quantity development for meaningful
                            decision-making.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col
                      md="6"
                      lg="6"
                      data-aos="fade-left"
                      data-aos-duration="750"
                    >
                      <div className="single-widget my-7 media">
                        <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                          <span className="count text-primary--light-only gr-text-9">
                            3
                          </span>
                        </div>
                        <div className="media-body">
                          <h3 className="w-title mb-5 gr-text-7">
                            'Assemblies-Based' Electrical Estimates
                          </h3>
                          <p className="gr-text-9 mb-0">
                            Presidio Cost Solutions has a diverse experience in
                            high-profile and technically-complex projects for
                            both private and public entities. No project is too
                            large or too complex for our team, and we've helped
                            clients at every level of the construction contract.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col
                      md="6"
                      lg="6"
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
                            Managed Historical Cost Repositories
                          </h3>
                          <p className="gr-text-9 mb-0">
                            While our standard estimate reporting is
                            second-to-none, we strongly believe that we should
                            empower our clients with modern tooling to make
                            their own informed findings, on their own terms. We
                            offer modern BI / Analytics capabilities, powered by
                            Microsoft Power BI, so that our clients can engage
                            with their data on their terms.
                          </p>
                        </div>
                      </div>
                    </Col>

                    <Col
                      md="6"
                      lg="6"
                      data-aos="fade-left"
                      data-aos-duration="1800"
                    >
                      <div className="single-widget my-7 media">
                        <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                          <span className="count text-primary--light-only gr-text-9">
                            5
                          </span>
                        </div>
                        <div className="media-body">
                          <h3 className="w-title mb-5 gr-text-7">
                            Detailed Electrical & Technology Estimates
                          </h3>
                          <p className="gr-text-9 mb-0">
                            Let's face it, the world has changed quite a bit in
                            the last year. Who would have ever guessed "Social
                            Distancing" would ever be a term? Despite the
                            challenges of remote collaboration, there can be
                            many advantages in hiring remote estimating support.
                            Presidio Cost Solutions is armed to the gills with
                            modern collaboration resources, such as Zoom,
                            Procore, Dropbox, Slack, and MS Teams, to name a
                            few.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <p>
                    In today's hectic building environment, having access to an
                    independent electrical cost estimator provies a variety of
                    benefits to design-builders and general contractors.
                  </p>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-left mt-11 mb-11"></Row>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Estimating;
