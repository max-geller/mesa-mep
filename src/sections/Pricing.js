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

const Pricing = () => {
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
                  src={estimating}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/services/estimating">
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
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={contracts}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/services/procurement">
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
                  src={controls}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/services/controls">
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
              className="mb-9 mb-lg-6"
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
                  <Link href="/services/forensics">
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
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={research}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/services/research">
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
              data-aos-duration="2300"
            >
              <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                <img
                  src={imgS4}
                  className="card-img-top rounded-top-10"
                  alt="..."
                />
                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                  <Link href="/analytics">
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
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <p class="lead">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>

      <Container>
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Free</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $0 <small class="text-muted">/ mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                class="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Pro</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $15 <small class="text-muted">/ mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">
                Get started
              </button>
            </div>
          </div>
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $29 <small class="text-muted">/ mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pricing;
