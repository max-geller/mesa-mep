import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import imgH from "../assets/image/az.jpeg";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="bg-image bg-gradient bg-gradient-black pb-15 pt-24 pt-lg-32 pb-lg-20"
        css={`
          background-image: url(${imgH});
        `}
      >
        <Container>
          <Row className="align-items-center">
            <Col
              md="9"
              lg="7"
              xl="8"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content section-title dark-mode-texts">
                <h1 className="gr-text-2 font-weight-bold mb-8">
                  Get help from our expert MEP consultants.
                </h1>
                <p className="gr-text-8 pr-sm-7 pr-md-12">
                  Presidio MEP is your trusted partner for MEP Systems Cost
                  Consulting. Our team delivers crucial data-driven insights
                  that enable better MEP systems decision-making for modern
                  construction.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
