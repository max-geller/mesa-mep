import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import corporate from "./../../assets/image/markets/corporate.jpeg";

const trackingId = "UA-183812989-1";

const Corporate = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/markets/corporate");
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
            background-image: url(${corporate});
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
                  <h1 className="gr-text-3 font-weight-bold mb-8">CORPORATE</h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    In tooday’s world, innovative office design strategies are
                    being developed to maximize space utilization and
                    creativity, and to encourage employee interaction and team
                    work.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <p className="mt-8">
            We recognize the important role office facilities play in our
            clients' businesses. Corporate headquarters generally have important
            quality and image requirements that should not be value engineered
            out of the facility.
          </p>
          <p>
            Jianbing gastropub gentrify seitan bespoke unicorn, man bun occupy
            microdosing YOLO letterpress art party pour-over hella chillwave.
            Next level vegan jean shorts tilde. Tattooed umami plaid, enamel pin
            kale chips iceland celiac live-edge. Four loko cardigan 90's, XOXO
            8-bit put a bird on it prism yuccie authentic gastropub helvetica
            poke iPhone godard knausgaard. Tumblr pabst tousled, deep v truffaut
            brooklyn letterpress authentic everyday carry listicle humblebrag
            scenester copper mug stumptown sartorial.
          </p>
        </Container>

        <Container>
          <Row className="justify-content-center mt-11 mb-11 ml-12">
            <Col xl="6" lg="6" sm="6">
              <h4>Commercial-Specific Expertise</h4>
              <ul>
                <li>Corporate Headquarters</li>
                <li>Commercial Office Buildings</li>
                <li>Training Facilities</li>
                <li>Interior Office Tenant-Improvements</li>
                <li>Multi-Building Corporate Campuses</li>
                <li>Parking Structures</li>
                <li>Campus Infrastructure / Central Plant</li>
              </ul>
            </Col>
            <Col xl="6" lg="6" sm="6">
              <h4>Team-Specific Experience:</h4>
              <ul>
                <li>NVIDIA Corporate Campus</li>
                <li>Facebook MPK / FRE</li>
                <li>Gilead Sciences Foster City</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Corporate;
