import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import imgH from "../assets/image/avery.jpg";

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
                  Let's take care of your cost estimating needs...
                </h1>
                <p className="gr-text-8 pr-sm-7 pr-md-12">
                  Presidio Cost Solutions is your trusted partner for
                  Electrical, Fire Alarm, and Low-Voltage systems cost
                  consulting and preconstruction services. Our team delivers
                  crucial data-driven insights that enable better systems
                  decision-making for modern construction.
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
