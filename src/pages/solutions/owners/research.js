import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../../components/PageWrapper";
import CTA from "../../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import research from "./../../../assets/image/stock/research.jpeg";

const trackingId = "UA-183812989-1";

const Research = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/solutions/owners/research");
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

        <div
          className="bg-image bg-gradient bg-gradient-black mt-17 pt-14 pt-lg-12 pb-lg-12"
          css={`
            background-image: url(${research});
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
                    MARKET RESEARCH
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Need to know Union Market Share? Looking to see what Union
                    Journeymen Electricians are paid in your area? We wonder
                    about these sorts of things too...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
          <Container>
            <Row className="justify-content-center">
              <Col xl="12" lg="12" sm="12">
                <div className="section-title text-center mb-12 mb-lg-17">
                  <p>
                    XOXO copper mug schlitz, unicorn etsy cardigan forage
                    poutine pabst messenger bag 90's cloud bread shoreditch
                    semiotics green juice.Ennui knausgaard vegan quinoa, beard
                    literally blue bottle. Authentic iPhone fixie farm-to-table
                    schlitz tilde. Distillery glossier affogato gentrify craft
                    beer. Intelligentsia kickstarter pabst, distillery whatever
                    ethical readymade everyday carry pork belly vape.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Research;
