import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgB3 from "../assets/image/webcor.png";

import imgT3 from "../assets/image/l2/png/l2-testimonial3.png";

const Testimonial = () => {
  return (
    <>
      {/* <!-- Testimonial Area --> */}
      <div className="testimonial-section pt-15 pt-lg-24 pb-lg-12 bg-default-1">
        <Container>
          <Row className="align-items-center justify-content-around">
            
            <Col lg="8" md="8" sm="10" className="mb-16">
              <div className="single-testimonial text-center h-100 d-flex flex-column px-5">
                <div className="brand-logo mb-9 mb-lg-13">
                  <img src={imgB3} alt="" />
                </div>
                <p className="review-text mb-0 gr-text-6 font-weight-bold gr-text-color">
                  “You made it so simple. My new site is so much faster &amp;
                  easier to work with Albino.”
                </p>
                <div className="user-block media pt-9 pt-lg-12 d-flex justify-content-center mt-auto">
                  <div className="user-image circle-md mr-7">
                    <img className="w-100" src={imgT3} alt="" />
                  </div>
                  <div className="user-text text-left align-self-center">
                    <h4 className="user-title gr-text-9 mb-0">Oka Tomoaki</h4>
                    <span className="user-rank gr-text-11 gr-text-color-opacity">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
