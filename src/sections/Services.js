import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import estimating from "../assets/image/stock/takeoff.jpeg";
import contracts from "../assets/image/stock/contracts.jpeg";
import forensics from "../assets/image/stock/forensics.jpeg";
import controls from "../assets/image/stock/controls.jpeg";
import research from "../assets/image/stock/research.jpeg";
import warehouse from "../assets/image/stock/warehouse.jpeg";
import imgS4 from "../assets/image/stock/precon.jpeg";

const Services = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      <div className="service-section pt-12 pb-7 pb-lg-25 pt-lg-19">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" sm="10">
              <div className="section-title text-center mb-11 mb-lg-20">
                <h2 className="title gr-text-4 mb-7">
                  Data-Driven MEP Solutions
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  Modern building systems account for the highest cost-variance in commercial construction.  Mesa MEP provides industry-leading tools to make informed cost decisions.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">

            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={estimating}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/#">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Modeling / Estimating{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={contracts}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/#">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Procurement / Buyout{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={controls}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/#">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Project Controls{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={warehouse}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/#">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Data Management{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={imgS4}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/#">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Cost Analytics{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={forensics}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/#">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Change Forensics{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={research}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/#">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Market Research{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
