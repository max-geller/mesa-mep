import React from "react";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import airport from "./../../assets/image/stock/airport.jpg";

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
            background-image: url(${airport});
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
                    AIRPORT / TERMINAL
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Electrical construction for airports and terminals require a careful attention to passenger experience, maintenance of existing systems, and
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="justify-content-center mt-11 mb-11">
            <Col xl="10" lg="10" sm="10">

              <p>
                Quantity Surveys are needed for a wide variety of purposes,
                including: - Preparing estimates and bids - Measuring work
                completed (for interim payments, etc.) - Valuing change orders -
                Assessing the validity of claims - Value engineering - Life
                cycle costing/cost-in-use - Due diligence studies Such quantity
                surveys may be carried out from drawings or at the actual site,
                as appropriate. Consequently, the method used for carrying out
                the measurements will vary widely, with drawings possibly be
                measured by scale rule, small measuring wheel, digitizer, or
                on-screen software (such as BidScreen from Vertigraph) used with
                electronic documents. On-site measurements might be carried out
                using traditional tape, electronic 'tape' measures, measuring
                wheel, etc. Whatever method is used, the level of detail must be
                appropriate for use to which it is being put, gathering ample
                records, but not superfluous information. Quantity Surveys are
                normally part of the process to achieving another goal, but in
                almost all cases they are a very important part.
              </p>
            </Col>
          </Row>
        </Container>

        <CTA />
      </PageWrapper>
    </>
  );
};

export default Consultation;
