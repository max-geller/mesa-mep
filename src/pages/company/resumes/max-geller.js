import React from "react";
import ReactGA from "react-ga";

import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";

import maxgeller from "../../../assets/image/team/max.jpg";

import usc from "./../../../assets/image/resumes/max/use.png";
import chico from "./../../../assets/image/resumes/max/chico.jpg";
import presidio from "./../../../assets/image/resumes/max/presidio.png";
import hci from "./../../../assets/image/resumes/max/hci.gif";
import webcor from "./../../../assets/image/resumes/max/webcor.png";
import reg from "./../../../assets/image/resumes/max/reg.jpg";
import csi from "./../../../assets/image/resumes/max/csi.png";
import sfot3 from "./../../../assets/image/projects/sfo-t3.jpg";
import lbnf from "./../../../assets/image/projects/lbnf.jpg";
import crimelab from "./../../../assets/image/projects/crime-lab.jpg";
import avery from "./../../../assets/image/projects/avery.jpg";
import harveymilk from "./../../../assets/image/projects/harveymilk.jpg";
import fbGsoc from "./../../../assets/image/projects/fb-gsoc.jpg";
import gilead from "./../../../assets/image/projects/gilead.jpg";
import ttc from "./../../../assets/image/projects/ttc.jpg";
import sfogh from "./../../../assets/image/projects/sfogh.jpg";

const trackingId = "UA-183812989-1";

const MaxGeller = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/company/resumes/max-geller");
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
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col sm="8" lg="5" xl="5" className="mb-9 mb-lg-0">
                <div className="content-grid-image-group d-flex  mx-sm-n3">
                  <div className="single-image d-flex flex-column px-3 px-sm-6">
                    <img
                      src={maxgeller}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="800"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                  </div>
                </div>
              </Col>

              <Col lg="6" xl="6">
                <div className="px-md-12 text-left mb-11 mb-lg-14">
                  <h2 className=" gr-text-2 mb-9 mb-lg-12">Max M. Geller</h2>
                  <h3>Electrical Preconstruction</h3>
                  <p className="gr-text-8 mb-0">
                    Max Geller is a seasoned construction professional, with a
                    dedicated background in Electrical, Fire-Alarm, Low Voltage
                    and Controls Systems, both in Preconstruction and
                    Construction Operations. Max is experienced in all major
                    types of construction from Commercial Office Buildings,
                    Hospitality, Data Centers / Mission-Critical, Laboratories,
                    Residential, High Rise / Mixed Use, Education and Airports.
                  </p>
                  <p className="mt-8">
                    Max Geller formed Presidio Cost Solutions in 2020 to provide
                    independent electrical cost consulting and preconstruction
                    services.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="mb-8 mt-14">
          <Row lg="3">
            <div className="pr-xl-13">
              <h2 className="gr-text-3 mb-12">Education</h2>
            </div>
          </Row>
          <Row>
            <Col
              lg="6"
              md="8"
              sm="12"
              className="justify-items-center align-items-center mb-10"
            >
              <Row className="align-items-center">
                <Col sm="2" lg="2" data-aos="fade-left" data-aos-duration="750">
                  <div className="media-icon circle-sm mb-10 mb-10 mt-8 ">
                    <div className="user-image circle-md  ">
                      <img className="w-100" src={usc} alt="" />
                    </div>
                  </div>
                </Col>

                <Col sm="10" lg="8" className="mr-4">
                  <h4 class="gr-text-8 mb-0">
                    University of Southern California
                  </h4>
                  <h5 class="gr-text-10">M. S. Construction Management</h5>
                  <Row className="justify-items-left">
                    <Col lg="4" sm="10">
                      <h5 class="small">Los Angeles, CA</h5>
                    </Col>

                    <Col lg="4" sm="10">
                      <h5 class="small">2015</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg="6" md="8" sm="12" className="mb-10 align-items-center">
              <Row className="align-items-center">
                <Col
                  sm="2"
                  lg="2"
                  data-aos="fade-left"
                  data-aos-duration="1050"
                >
                  <div className="media-icon circle-sm mb-10 mb-10 mt-8 ">
                    <div className="user-image circle-md ">
                      <img className="w-100" src={chico} alt="" />
                    </div>
                  </div>
                </Col>

                <Col sm="10" lg="8" className="mr-4">
                  <h4 class="gr-text-8 mb-0">
                    California State University, Chico
                  </h4>
                  <h5 class="gr-text-10">B. S. Construction Management</h5>
                  <Row className="justify-items-left">
                    <Col lg="4" sm="10">
                      <h5 class="small">Chico, CA</h5>
                    </Col>

                    <Col lg="2" sm="10">
                      <h5 class="small">2011</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container className="mb-8 mt-14">
          <Row>
            <Col lg="3">
              <div className="pr-xl-13">
                <h2 className="gr-text-3 mb-12">Experience</h2>
              </div>
            </Col>
          </Row>

          <Row className="ml-4">
            <Col lg="9" data-aos="fade-left" data-aos-duration="750">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm  mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    <div className="user-image circle-md mr-7 mt-8">
                      <img className="w-100" src={presidio} alt="" />
                    </div>
                  </span>
                </div>
                <div className="pr-xl-13 mb-8">
                  <h4 class="gr-text-8 mb-0">Presidio Cost Solutions, LLC</h4>
                  <h5 class="gr-text-10 mb-4">Principal</h5>
                  <Row className="justify-items-left">
                    <Col lg="2" sm="6">
                      <h5 class="small">Phoenix, AZ</h5>
                    </Col>
                    <Col lg="2" sm="6">
                      <h5 class="small">2020 - Present</h5>
                    </Col>
                  </Row>
                  <p>
                    At Presidio Cost Solutions, I strive to deliver an
                    unprecedented level of cost clarity to each and every
                    client. With an extensive background in electrical, fire
                    alarm, and low-voltage systems preconstruction, I'm able to
                    leverage the latest estimating techniques, tooling and
                    reporting capabilities that modern construction has to
                    offer.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="ml-4">
            <Col lg="9" data-aos="fade-left" data-aos-duration="750">
              <div className="single-widget my-7 media ">
                <div className="media-icon circle-sm  mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    <div className="user-image circle-md mr-7 mt-6">
                      <img className="w-100" src={hci} alt="" />
                    </div>
                  </span>
                </div>
                <div className="pr-xl-13 mb-8 mt-0">
                  <h4 class="gr-text-8 mb-0">Hollins Consulting, Inc.</h4>
                  <h5 class="gr-text-10 mb-4">
                    Electrical & Technology Preconstruction
                  </h5>
                  <Row className="justify-items-left">
                    <Col lg="2" sm="6">
                      <h5 class="small">San Francisco, CA</h5>
                    </Col>
                    <Col lg="2" sm="6">
                      <h5 class="small">2018 - 2020</h5>
                    </Col>
                  </Row>
                  <p>
                    At Hollins Consulting, I've managed and conducted all
                    operational functions for electrical, fire alarm and
                    low-voltage work scopes. This includes conducting design
                    reviews and value engineering evaluations, initial cost
                    model validation, core-trade buyout and coordination, and
                    enforcement of ownership standards. This role allowed me to
                    review all aspects of electrical and technology systems
                    design, performance requirements, specifications, technology
                    selections, preliminary quotes and bid documents to ensure
                    adherence to project goals and commitment to end-user
                    satisfaction.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="ml-4">
            <Col lg="9" data-aos="fade-left" data-aos-duration="750">
              <div className="single-widget my-7 media ">
                <div className="media-icon circle-sm  mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    <div className="user-image circle-md mr-7 mt-6">
                      <img className="w-100" src={webcor} alt="" />
                    </div>
                  </span>
                </div>
                <div className="pr-xl-13 mb-8 mt-0">
                  <h4 class="gr-text-8 mb-0">Webcor Builders</h4>
                  <h5 class="gr-text-10 mb-4">
                    Electrical Preconstruction Manager
                  </h5>
                  <Row className="justify-items-left">
                    <Col lg="2" sm="6">
                      <h5 class="small">San Francisco, CA</h5>
                    </Col>
                    <Col lg="2" sm="6">
                      <h5 class="small">2017 - 2018</h5>
                    </Col>
                  </Row>
                  <p>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="ml-4">
            <Col lg="9" data-aos="fade-left" data-aos-duration="750">
              <div className="single-widget my-7 media ">
                <div className="media-icon circle-sm  mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    <div className="user-image circle-md mr-7 mt-6">
                      <img className="w-100" src={reg} alt="" />
                    </div>
                  </span>
                </div>
                <div className="pr-xl-13 mb-8 mt-0">
                  <h4 class="gr-text-8 mb-0">Redwood Electric Group</h4>
                  <h5 class="gr-text-10 mb-4">Project Management</h5>
                  <Row className="justify-items-left">
                    <Col lg="2" sm="6">
                      <h5 class="small">Santa Clara, CA</h5>
                    </Col>
                    <Col lg="2" sm="6">
                      <h5 class="small">2014 - 2017</h5>
                    </Col>
                  </Row>
                  <p>
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="ml-4">
            <Col lg="9" data-aos="fade-left" data-aos-duration="750">
              <div className="single-widget my-7 media ">
                <div className="media-icon circle-sm  mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    <div className="user-image circle-md mr-7 mt-6">
                      <img className="w-100" src={csi} alt="" />
                    </div>
                  </span>
                </div>
                <div className="pr-xl-13 mb-8 mt-0">
                  <h4 class="gr-text-8 mb-0">CSI Electrical Contractors</h4>
                  <h5 class="gr-text-10 mb-4">Electrical Estimating</h5>
                  <Row className="justify-items-left">
                    <Col lg="2" sm="6">
                      <h5 class="small">Los Angeles, CA</h5>
                    </Col>
                    <Col lg="2" sm="6">
                      <h5 class="small">2011 - 2014</h5>
                    </Col>
                  </Row>
                  <p>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mb-8 mt-14">
          <Row className="mb-12 mt-10">
            <Col lg="5" className="mb-7 mb-lg-0">
              <div className="pr-xl-13">
                <h2 className="gr-text-3 mb-0">Notable Projects</h2>
              </div>
            </Col>
          </Row>

          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={sfot3} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>SFO Terminal 3 West Modernization</h4>
                <h5>Special Systems Project Manager</h5>
                <h5>San Francisco, CA</h5>
                <p>
                  As a memeber of the SFO Project Management Support Services
                  team, I served as the Special Systems Project Manager during
                  the initial design of the SFO Terminal 3 West Modernization.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={lbnf} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>Long-Baseline Neutrino Facility</h4>
                <h5>Electrical Estimating & Reconciliation</h5>
                <h5>Lead, SD</h5>
                <p>
                  Working as the Electrical Preconstruction Manager for Hollins
                  Consulting, I performed electrical cost estimating services in
                  close coordination with the project's engineering team, and
                  represented the interests of the owner during trade
                  reconciliation.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={crimelab} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>SF Traffic Company & Forensics Division Facility</h4>
                <h5>Electrical Estimating & Reconciliation</h5>
                <h5>San Francisco, CA</h5>
                <p>
                  Working as the Electrical and Technology Systems Manager for
                  Hollins Consulting, I was responsible for the primary
                  electrical and low-voltage systems cost estimating for the new
                  San Francisco Traffic Company and Forensics Services Facility
                  in San Francisco. Further, I served as the owners
                  representative in providing critical analysis of change order
                  documentation from trade-partners.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={avery} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>Transbay Block 8 (The Avery)</h4>
                <h5>Electrical Change Order Review</h5>
                <h5>San Francisco, CA</h5>
                <p>
                  As the lead electrical estimator for Presidio Cost Solutions,
                  I assisted the Webcor team with electrical change order
                  evalution for this high-rise installation.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={harveymilk} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>SFO T1C / BAB (Harvey Milk Terminal)</h4>
                <h5>Electrical Change Order Review</h5>
                <h5>San Francisco, CA</h5>
                <p>
                  Serving as the Electrical Preconstruction Manager for Webcor
                  Builders, I had the privelege of conducting preliminary
                  electrical, fire alarm, and low-voltage (special-systems) cost
                  estimating and reconciliation efforts with Core-Trade
                  Partners.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={fbGsoc} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>Global Security Facility (Anonymous Client) </h4>
                <h5>Electrical Change Order Review</h5>
                <h5>Menlo Park, CA</h5>
                <p>
                  Although this an anonymous client, this Global Security
                  Operations facility represented a commitment to user privacy
                  for a modern technology firm. As the primary electrical
                  systems cost estimator for Hollins Consulting, I had the
                  privelige of establishing initial cost models and electrical
                  estimates throughout the earliest stages of the design
                  process.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={gilead} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>Gilead Pilot Laboratory </h4>
                <h5>Electrical Estimating & COR Review</h5>
                <h5>Foster City, CA</h5>
                <p>
                  Working as the Electrical & Technology systems manager for
                  Hollins Consulting, I represented the interests of Gilead
                  Sciences during cost reconcilation and change order reviews
                  with trade partners.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={sfogh} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>SFO Grand Hyatt Hotel </h4>
                <h5>Electrical Estimating & COR Review</h5>
                <h5>San Francisco, CA</h5>
                <p>
                  As the Electrical Preconstruction Manager for Webcor Builders,
                  I performed cost estimating and core-trade buyout management
                  for the SFO Grand Hyatt Hotel.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mb-12">
            <Col sm="12" lg="4" data-aos="fade-left" data-aos-duration="750">
              <div className=" mr-7  pr-6">
                <img className="w-100" src={ttc} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="6">
              <div className="pr-xl-13 mb-12">
                <h4>Salesfore (Transbay) Transit Center </h4>
                <h5>Change Order Review & Trade Reconciliation</h5>
                <h5>San Francisco, CA</h5>
                <p>
                  On behalf of Webcor Builders, I conducted intensive
                  trade-partner COR reviews and cost reconciliation for the
                  project team.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </PageWrapper>
    </>
  );
};
export default MaxGeller;
