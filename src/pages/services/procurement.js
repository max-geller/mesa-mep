import React from "react";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import contracts from "./../../assets/image/stock/contracts.jpeg";


const Procurement = () => {
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
                  PROCUREMENT
                </h1>
                <p className="gr-text-8 pr-sm-7 pr-md-12">
                History shows the buyout process of MEP systems is the single-largest contributor to trade bid variance. Let's get you setup for success.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* <!-- Fact Area --> */}
      <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
        <Container>


              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">1M+</h3>
                <p className="gr-text-9 mb-0">
                  Somin somin
                </p>
              </div>

            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp duration={3} end={93} />%
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Satisfaction rate from our customers.
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp
                        duration={3}
                        decimal="."
                        decimals={1}
                        end={4.9}
                      />
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Average customer ratings out of 5.00!
                </p>
              </div>
            </Col>

        </Container>
        <h4>Sample Buyout Resources</h4>
          <ul>
            <li>Final Bid Tabs</li>
            <li>Interview Checklist</li>
          </ul>
      </div>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Procurement;
