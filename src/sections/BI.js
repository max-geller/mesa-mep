import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col } from "react-bootstrap";

const BI = () => {
  return (
    <>
      {/* <!-- Fact Area --> */}
      <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
        <Container>
        <Row className="justify-content-center">
          <iframe
            width="900"
            height="686"
            src="https://app.powerbi.com/view?r=eyJrIjoiMDAxZWE1MzUtZTFkMy00YzJmLTlkOTUtYzM4ODBmZGQ2MDkxIiwidCI6IjY2YmMzYmI2LTNjZDAtNDU0ZS04YzM0LWU4MjNkNzRmOWY0YiIsImMiOjZ9&pageName=ReportSection"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
          </ Row>
        </Container>
      </div>
    </>
  );
};

export default BI;
