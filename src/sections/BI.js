import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GlobalContext from "./../context/GlobalContext";

const BI = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
        <Container>
          <h2 className="title gr-text-4 mb-7">
            Your Microsoft Power BI Partner
          </h2>
          <p>
            Microsoft Power BI is a cornerstone of our estimating workflow, and
            provides the basis for our client engagement and QA/QC efforts.
            Let's show some reporting possibilities you may have never known
            existed...
          </p>
          <Row className="justify-content-center">
            <iframe
              width="900"
              height="686"
              src="https://app.powerbi.com/view?r=eyJrIjoiMDAxZWE1MzUtZTFkMy00YzJmLTlkOTUtYzM4ODBmZGQ2MDkxIiwidCI6IjY2YmMzYmI2LTNjZDAtNDU0ZS04YzM0LWU4MjNkNzRmOWY0YiIsImMiOjZ9&pageName=ReportSection"
              frameborder="0"
              allowFullScreen="true"
            ></iframe>
          </Row>
          <Row className="justify-content-center mt-11 mb-11">
            <Col xs="3">
              <div className="form-group button-block mt-3 ">
                <a
                  href="/company/about"
                  className={`btn btn-${gContext.header.variant}`}
                >
                  Show Me More
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BI;
