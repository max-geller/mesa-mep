import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import estimating from "../assets/image/stock/estimating.jpeg";
import contracts from "../assets/image/stock/contracts.jpeg";
import forensics from "../assets/image/stock/forensics.jpeg";
import takeoff from "../assets/image/stock/takeoff-thumb.jpg";
import research from "../assets/image/stock/research.jpeg";
import imgS4 from "../assets/image/stock/precon.jpeg";

const Services = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      <div className="service-section pt-12 pb-7 pb-lg-25 pt-lg-19">
        <Container>
          <Row className="justify-content-center">
            <Col xl="10" lg="10" sm="10">
              <div className="section-title text-center mb-11 mb-lg-20">
                <h2 className="title gr-text-4 mb-7">
                  Don't worry, we've got you covered
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  Electrical and low-voltage systems account for some of the
                  highest cost-variance in today's commercial construction.
                  Tightening energy codes, regional AHJ requirements and
                  ever-changing technologies have made generating accurate
                  electrical estimates a challenging task. Presidio Cost
                  Solutions provides industry-leading tools to make informed
                  cost decisions.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col
              xs="10"
              sm="6"
              lg="3"
              className="mb-9 mb-lg-6"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={takeoff}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/solutions/trades/takeoff">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Takeoff Services{" "}
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
              className="mb-9 mb-lg-6"
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
                  <Link href="/solutions/builders/estimating">
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
              className="mb-9 mb-lg-6"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={contracts}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/solutions/builders/buyout">
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
              className="mb-9 mb-lg-6"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={forensics}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/solutions/owners/forensics">
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
              className="mb-9 mb-lg-6"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={research}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/solutions/owners/research">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Market Research{" "}
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
              className="mb-9 mb-lg-6"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={imgS4}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/analytics/possibilities">
                    <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                      Cost Analytics{" "}
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
