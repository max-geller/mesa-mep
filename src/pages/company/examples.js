import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";

import { Document, Page } from 'react-pdf'

import imgBanner from "../../assets/image/stock/precon.jpeg";
import imgC1 from "../../assets/image/stock/data-center.jpeg";
import imgC2 from "../../assets/image/stock/cellular.jpeg";
import imgC3 from "../../assets/image/stock/precon.jpeg";
import imgC4 from "../../assets/image/stock/conduit.jpeg";

const AboutPage = () => {
  

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
        

        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
        <div>

    </div>
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">Who We Are</h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    Presidio Cost Solutions is a leading construction consulting
                    firm providing a portfolio of professional support services
                    to a wide range of clients including owners, contractors,
                    attorneys, engineers, insurers, and suppliers involved in
                    the engineering and construction process. Presidio Cost
                    Solutions offers guidance and control for all types of
                    architectural construction projects.
                  </p>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, research labs, high tech
                    office buildings, hospitality and resort, aviation, museums,
                    art galleries, retail, industrial, government, and
                    commercial office buildings. We offer you a comprehensive
                    range of project and cost management services including:
                    Strategic Planning, Project Management, Budget Management,
                    Schedule Management, Value Management, Claims Settlement,
                    Dispute Resolution, and Quantity Surveys.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-2">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col sm="8" lg="5" xl="6" className="mb-9 mb-lg-0">
                <div className="content-grid-image-group d-flex  mx-sm-n3">
                  <div className="single-image d-flex flex-column px-3 px-sm-6">
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC2}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="800"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                  </div>
                  <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                    <img
                      src={imgC3}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="400"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC4}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="1200"
                      className="w-100 rounded-10"
                    />
                  </div>
                </div>
              </Col>
              <Col
                sm="8"
                lg="6"
                xl="5"
                className="offset-lg-1 offset-lg-1 offset-xl-0"
              >
                <div className="content-text">
                  <h2 className="gr-text-3 mb-7 mb-lg-11">
                    We speak
                    <br className="d-none d-lg-block" /> building systems
                  </h2>
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    We share common trends and strategies for improving your
                    rental income and making sure you stay in high demand of
                    service.{" "}
                  </p>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. With lots of
                    unique blocks, you can easily build a page without coding
                    any other page.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
