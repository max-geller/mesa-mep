import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";

import imgC1 from "../assets/image/stock/data-center.jpeg";
import imgC2 from "../assets/image/stock/cellular.jpeg";
import imgC3 from "../assets/image/stock/precon.jpeg";
import imgC4 from "../assets/image/stock/conduit.jpeg";
import distribution from "../assets/image/distribution.jpeg";
import lighting from "../assets/image/lighting.jpeg";
import av from "../assets/image/stock/av.jpeg";
import cabling from "../assets/image/stock/cabling.jpeg";

const Systems = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <div className="content-section  pb-13 pb-lg-27 bg-default-2">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              sm="8"
              lg="6"
              xl="5"
              className="offset-lg-1 offset-lg-1 offset-xl-0"
            >
              <div className="content-text ml-6">
                <h2 className="gr-text-3 mb-7 mb-lg-11">
                  We speak
                  <br className="d-none d-lg-block" /> building systems
                </h2>
                <p className="gr-text-8 mb-7 mb-lg-10">
                  Our team has an extensive amount of experience with
                  electrical, fire alarm, and low-voltage systems.{" "}
                </p>
                <h5>Electrical Systems:</h5>
                <ul>
                  <li>Incoming Site Utilities / Ductbanks</li>
                  <li>Medium-Voltage Services</li>
                  <li>Temporary Power & Lighting</li>
                  <li>Distribution Equipment & Feeders</li>
                  <li>Uninterruptible Power Supply (UPS) Systems</li>
                  <li>Grounding, Bonding, Lightning Protection</li>
                  <li>Engine Generators, Transfer Switches</li>
                  <li>Lighting Fixtures and Networked Controls</li>
                  <li>Power Wiring Devices and Branch</li>
                </ul>
                <h5>Fire Alarm Systems:</h5>
                <ul>
                  <li>Networked Fire Alarm (Class A & B)</li>
                  <li>Pre-Action Systems / VESDA</li>
                  <li>Fire Alarm Monitoring</li>
                  <li>Two-Way Radio Communications</li>
                  <li>Emergency Responder Radio Communications (ERRCS)</li>
                </ul>
                <h5>Low-Voltage Systems:</h5>
                <ul>
                  <li>Network Equipment Racking & Hardware</li>
                  <li>Premises Backbone Cabling (Fiber / Copper / Coax)</li>
                  <li>MDF / IDF / MPOE Build-Out</li>
                  <li>Horizontal Cabling</li>
                  <li>Cable / Ladder / Basket Trays</li>
                  <li>Audio-Visual / Voice Systems</li>
                  <li>CCTV & Access Controls</li>
                  <li>Wireless / Cellular / RF</li>
                </ul>
              </div>
            </Col>
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
              <div className="content-grid-image-group d-flex  mx-sm-n3">
                <div className="single-image d-flex flex-column px-3 px-sm-6">
                  <img
                    src={cabling}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />

                  <img
                    src={distribution}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="800"
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />
                </div>

                <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                  <img
                    src={av}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="400"
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />

                  <img
                    src={lighting}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="1200"
                    className="w-100 rounded-10"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Systems;
