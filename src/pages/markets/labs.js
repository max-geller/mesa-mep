import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../assets/image/stock/estimating.jpeg";

const trackingId = "UA-183812989-1";

const Laboratory = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/markets/labs");
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
                    LABS / LIFE-SCIENCES
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
          <p className="mt-8">
            Airport campuses can present many logistic challenges to the
            construction phasing process, and require a special attention to
            labor factoring and productivity impacts. Our team has seen more
            exposure to these challenges than most, and have unique experience
            that can help prepare more accurate cost estimates for airport
            construction.{" "}
          </p>
          <p>
            Let's take a look at some common cost-drivers for airport
            construction:
          </p>
        </Container>
        <Container>
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
                    Impacts to Labor Producitivies
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Crowded airport terminals, high-levels of passenger traffic,
                    and difficult overhead installation conditions can
                    contribute to unusually high productivity impacts. We've
                    seen it all, and are here to help guide your estimating and
                    preconstruction efforts to ensure these labor impacts are
                    observed and captured in your construction budget.
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
                    Site-Specific General Requirements
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Airport construction requires increased expenses due to
                    general conditions and requirements focused on minimizing
                    impacts to the passenger experience. While these are often
                    overlooked, cost elements such as construction signage,
                    barriers, badging, campus training, and security escorting
                    can be a costly oversight. Let us help develop strategies to
                    observe these costs at the outset of your estimating and
                    preconstruction efforts.
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
                    Portal-to-Portal & Material Lay-Down
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Construction within an operational airport campus can
                    present many challenges when it comes to the transportation
                    of materials and field labor. Establishing an accurate cost
                    estimate requires thoughtful attention to material lay-down
                    restrictions, portal-to-portal travel times and distances,
                    as well as material accessibility through the sterile areas
                    of the campus. Presidio Cost Solutions has a thorough
                    understanding of these challenges and are here to help
                    develop cost strategies for success.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center mt-11 mb-11 ml-12">
            <Col xl="6" lg="6" sm="6">
              <h4>Airport-Specific Expertise</h4>
              <ul>
                <li>New Terminal Construction</li>
                <li>Terminal Modernization</li>
                <li>Hi-Mast Lighting</li>
                <li>Digital Signage & Wayfinding</li>
                <li>Concessions Improvements</li>
                <li>FAA Structures / Air Traffic Control Tower</li>
                <li>Runway Lighting</li>
                <li>Legacy Systems Migration</li>
                <li>Medium-Voltage Substation Upgrades</li>
              </ul>
            </Col>
            <Col xl="6" lg="6" sm="6">
              <h4>Team-Specific Experience:</h4>
              <ul>
                <li>SFO Terminal 3 West Modernization</li>
                <li>SFO Grand Hyatt Hotel</li>
                <li>SFO New Air Traffic Control Tower</li>
                <li>SFO T1C / Boarding Area B</li>
                <li>SFO Long Term Parking Garage</li>
                <li>SFO Substation TX Bypass & Upgrade</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Laboratory;
