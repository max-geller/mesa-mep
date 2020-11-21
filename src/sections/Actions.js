import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Actions = () => {
  return (
    <>
      {/* <!-- Newsletter Area --> */}
      <div className="newsltr-section pt-12 pb-10 pt-lg-19 pb-lg-17 bg-default-6 border-bottom ">
        <Container>
          <h2 className="mb-6">Ready to take a closer look?</h2>
          <p className="mb-12">Let's get you better acquainted with our full suite of services, experience, and tooling:</p>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="4"
              md="4"
              className="align-items-center justify-content-center"
            >
              <div className="cta-btn mb-8">
                <Button className="with-icon gr-hover-y">
                  Example Estimates<i className="icon icon-tail-right"></i>
                </Button>
              </div>
            </Col>
            <Col
              lg="4"
              md="4"
              className="align-items-center justify-content-center"
            >
              <div className="cta-btn mb-8">
                <Button className="with-icon gr-hover-y">
                  Project Resume<i className="icon icon-tail-right"></i>
                </Button>
              </div>
            </Col>
            <Col
              lg="4"
              md="4"
              className="align-items-center justify-content-center"
            >
              <div className="cta-btn mb-8">
                <Button className="with-icon gr-hover-y">
                  Software & Tooling<i className="icon icon-tail-right"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Actions;
