import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import BI from "../../../sections/BI";
import Phases from "../../../sections/Phases";
import { Container, Row, Col } from "react-bootstrap";

import estimate from "./../../../assets/image/stock/estimating.jpeg";

const Consultation = () => {
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
                    SYSTEMS CONSULTING
                  </h1>
                  <p className="gr-text-10 text-left">
                    Presidio Cost Solutions provides owners, developers and
                    consultants with industry-leading cost consulting for
                    electrical and low-voltage systems.
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
                <h4 className="title gr-text-6 mb-5">Let's Talk Costs...</h4>
                <p className="gr-text-8  px-xl-0">
                  Modern building systems account for the highest cost-variance
                  in commercial construction. Presidio Cost Solutions provides
                  industry-leading tools to make informed cost decisions for
                  electrical and technology systems.
                </p>
                <p>
                  Accurate estimating in today's environment requires thoughtful
                  attention to project requirements, system expertise,
                  familiarity with local Code, and regional market labor and
                  material pricing insights. It's tough for today's owners,
                  developers and general contractors to navigate the changing
                  technologies and regulations.
                </p>
              </div>
            </Col>
            <BI />
            <Col xl="12" lg="12" sm="12">
              <div className="section-title text-left mb-11 mb-lg-20">
                <p className="gr-text-8  px-xl-0">
                  As cost advisors, we believe in working closely with our
                  clients at each and every step of the design and construction
                  process.
                </p>
                <p className="gr-text-8  px-xl-0">
                  Presidio Cost Solutions has diverse experience in high-profile
                  and notable construction projects throughout the United
                  States, for both private and public entities.
                </p>
                <p>
                  Quantity Surveys are needed for a wide variety of purposes,
                  including: - Preparing estimates and bids - Measuring work
                  completed (for interim payments, etc.) - Valuing change orders
                  - Assessing the validity of claims - Value engineering - Life
                  cycle costing/cost-in-use - Due diligence studies Such
                  quantity surveys may be carried out from drawings or at the
                  actual site, as appropriate. C
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Phases />

        </Container>
        <CTA />
        
      </PageWrapper>
    </>
  );
};

export default Consultation;
