import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";

import maxgeller from "../../../assets/image/team/max.jpg";

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
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">Education</h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>University of Southern California</h4>
                  <h5>M. S. Construction Management, 2015</h5>
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    Presidio Cost Solutions is a leading construction consulting
                    firm providing a portfolio of professional support services
                  </p>
                  <h4>California State University, Chico</h4>
                  <h5>B. S. Construction Management, 2011</h5>
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    Presidio Cost Solutions is a leading construction consulting
                    firm providing a portfolio of professional support services
                    to a wide range of clients including owners, contractors,
                    attorneys, engineers,
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mb-8">
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">Experience</h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>Hollins Consulting, Inc.</h4>
                  <h5>Electrical & Technology Preconstruction</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, research labs, high tech
                    office buildings, hospitality and resort, aviation, museums,
                    art galleries, retail, industrial, government,
                    <ul>
                      <li>
                        commercial office buildings range of project and cost
                        management services including:
                      </li>
                      <li>
                        Strategic Planning, Project Management, Budget
                        Management, Schedule Management, Value Management,
                        Claims Settlement,
                      </li>
                      <li>Dispute Resolution, and Quantity Surveys.</li>
                    </ul>
                  </p>
                </div>

                <div className="pr-xl-13">
                  <h4>Webcor Builders</h4>
                  <h5>Electrical Preconstruction Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, research labs, high tech
                    office buildings, hospitality and resort, aviation, museums,
                    art galleries, retail, industrial, government,
                    <ul>
                      <li>
                        commercial office buildings range of project and cost
                        management services including:
                      </li>
                      <li>
                        Strategic Planning, Project Management, Budget
                        Management, Schedule Management, Value Management,
                        Claims Settlement,
                      </li>
                      <li>Dispute Resolution, and Quantity Surveys.</li>
                    </ul>
                  </p>
                </div>
                <div className="pr-xl-13">
                  <h4>Redwood Electric Group</h4>
                  <h5>Project Management</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, research labs, high tech
                    office buildings, hospitality and resort, aviation, museums,
                    art galleries, retail, industrial, government,
                    <ul>
                      <li>
                        commercial office buildings range of project and cost
                        management services including:
                      </li>
                      <li>
                        Strategic Planning, Project Management, Budget
                        Management, Schedule Management, Value Management,
                        Claims Settlement,
                      </li>
                      <li>Dispute Resolution, and Quantity Surveys.</li>
                    </ul>
                  </p>
                </div>
                <div className="pr-xl-13">
                  <h4>CSI Electrical Contractors</h4>
                  <h5>Electrical Estimating</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, research labs, high tech
                    office buildings, hospitality and resort, aviation, museums,
                    art galleries, retail, industrial, government,
                    <ul>
                      <li>
                        commercial office buildings range of project and cost
                        management services including:
                      </li>
                      <li>
                        Strategic Planning, Project Management, Budget
                        Management, Schedule Management, Value Management,
                        Claims Settlement,
                      </li>
                      <li>Dispute Resolution, and Quantity Surveys.</li>
                    </ul>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="mb-12">
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">Notable Projects</h2>
                </div>
              </Col>
              </Row>
              <Row className="mb-12">
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <h4>SFO Terminal 3 West Modernization</h4>
                  <h5>Special Systems Project Manager</h5>
                  <p>
                    We serve public and private owners, architects, engineers
                    and contractors. We have extensive experience in health
                    care, educational facilities, 

                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">Expertise</h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <Row className="align-items-center">
                    <Col sm="2" lg="2">
                      <i className=" gr-text-2 icon icon-camera-flash"></i>
                    </Col>
                    <Col sm="8" lg="8">
                      <h5 class="small" className="gr-text-8 text-left">
                        Power & Distribution Systems
                      </h5>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm="2" lg="2">
                      <i className="gr-text-2 icon icon-plug"></i>
                    </Col>
                    <h5 className="text-left">Power & Distribution Systems</h5>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm="2" lg="2">
                      <i className="gr-text-2 icon icon-bulb-63"></i>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm="2" lg="2">
                      <i className="gr-text-2 icon icon-energy"></i>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm="2" lg="2">
                      <i className=" gr-text-2 icon icon-phone-2-2"></i>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm="2" lg="2">
                      <i className="gr-text-2 icon icon-cctv"></i>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm="2" lg="2">
                      <i className="gr-text-2 icon icon-chart-bar-52"></i>
                    </Col>
                    <Col>
                      <h5 className="text-left">Cellular / Wireless Access</h5>
                    </Col>
                  </Row>
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
