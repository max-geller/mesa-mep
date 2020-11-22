import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Mailchimp from "react-mailchimp-form";

const Newsletter = () => {
  return (
    <>
      {/* <!-- Newsletter Area --> */}
      <div className="newsltr-section pt-12 pb-10 pt-lg-19 pb-lg-17 bg-default-6 border-bottom ">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="8" md="10" className="pr-lg-9">
              <div className="nwsltr-text">
                <h2 className="title gr-text-5">
                  Subscribe to our newsletter to get latest news in your inbox:
                </h2>
              </div>
            </Col>
            <Col lg="5" md="6" className="pl-xl-13">
              <Mailchimp
                className="newsletter-form d-flex justify-content-lg-end mt-6 mt-lg-0"
                action="https://presidiosolutions.us7.list-manage.com/subscribe/post?u=9ce0509faca32f2bcbdecface&amp;id=8d73c48dce"
                fields={[
                  {
                    name: "EMAIL",
                    placeholder: "Email",
                    type: "email",
                    required: true,
                  },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Newsletter;
