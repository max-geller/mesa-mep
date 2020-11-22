import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import contracts from "./../../../assets/image/stock/contracts.jpeg";

const Value = () => {
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
            background-image: url(${contracts});
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
                  <h1 className="gr-text-2 font-weight-bold mb-8">
                    VALUE ENGINEERING
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Wondering where your project can save costs and deliver more
                    value? Our team has extensive experience in delivering
                    value-based solutions for electrical installations. Let's
                    take a look...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <!-- Fact Area --> */}
        <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
          <Container>
            <p>
              In every project we find cost-efficient alternatives without
              compromising value. Our estimators examine each component for
              cost-reducing alternative solutions and provide a thorough
              analysis of the entire project. Our analysis allows our clients to
              make timely decisions on changes in design, systems, and materials
              that benefit their project and budget.
            </p>
          </Container>
          <Container>
            <h4>Sample Buyout Resources</h4>
            <ul>
              <li>Final Bid Tabs</li>
              <li>Interview Checklist</li>
            </ul>
          </Container>
        </div>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Value;
