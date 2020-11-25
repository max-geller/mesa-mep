import React from "react";
import ReactGA from "react-ga";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import { Container, Row, Col, Button } from "react-bootstrap";

import map from "./../../assets/image/stock/map.jpeg";

const trackingId = "UA-183812989-1";

const Technology = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/expertise/technology");
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
          background-image: url(${map});
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
                  TECHNOLOGY
                </h1>
                <p className="gr-text-8 pr-sm-7 pr-md-12">
                History shows the buyout process of MEP systems is the single-largest contributor to trade bid variance. Let's get you setup for success.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-18 mb-18">
          <p>
            Actually hell of venmo, vexillologist offal mustache truffaut
            keffiyeh you probably haven't heard of them fingerstache. Marfa
            microdosing biodiesel 3 wolf moon, 8-bit air plant poke normcore
            echo park tacos. Shabby chic literally waistcoat, direct trade
            humblebrag scenester taiyaki fingerstache. Forage 90's raw denim yr,
            succulents pok pok crucifix swag put a bird on it.
          </p>
          <p>
            XOXO copper mug schlitz, unicorn etsy cardigan forage poutine pabst
            messenger bag 90's cloud bread shoreditch semiotics green
            juice.Ennui knausgaard vegan quinoa, beard literally blue bottle.
            Authentic iPhone fixie farm-to-table schlitz tilde. Distillery
            glossier affogato gentrify craft beer. Intelligentsia kickstarter
            pabst, distillery whatever ethical readymade everyday carry pork
            belly vape.
          </p>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Technology;
