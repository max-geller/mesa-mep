import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";

const FAQ = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="12" lg="12" sm="12">
              <div className="section-title text-center mb-12 mb-lg-17">
                <h2 className="title gr-text-4 mb-7">FAQs</h2>

                <p>
                  Clients have relied on Presidio Cost Solutions to prepare,
                  analyze, and resolve their construction claims and disputes.
                  In addition, clients and their attorneys have called on
                  Presidio Cost Solutions’s experts to perform forensic analysis
                  of construction projects to determine liability for increased
                  cost, reduced labor productivity, defects, and schedule
                  delays.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1200">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    1
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="w-title mb-5 gr-text-7">
                    Won't I lose transparency if I use an outside electrical
                    consultant?
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Depends on which consultant you use. Presidio Cost Solutions
                    uses a client-centric approach to ensure that our clients
                    are aware of our effort, deliverable progress, and turnover
                    timelines at each and every stage in the process. Using
                    client engagement platforms like Microsoft Power BI ensure
                    that our clients have 24-hr access to the estimates and
                    deliverables we've produced.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1800">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    2
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="w-title mb-5 gr-text-7">
                    How could an outside consultant possibly know our specific
                    market?
                  </h3>
                  <p className="gr-text-9 mb-0">
                    You're absolutely right; each client has a unique operating
                    environment which requires a careful attention to direct and
                    indirect cost details. We commence our engagement with new
                    clients with a 'cost calibration period' to help isolate any
                    direct-cost variance with material and labor. While we have
                    tried-and-true methods for extending indirect costs and
                    general expenses, we believe in approaching these remaining
                    items in close collaboration with our clients.
                  </p>
                </div>
              </div>
            </Col>

            <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="1800">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    3
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="w-title mb-5 gr-text-7">
                    Aren't outsourced estimators more expensive?
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Not likely. By offering support as an independent
                    consultant, we allow you to focus on your core business
                    demands, without the expense of onboarding a full-time
                    estimator. Whether you need Presidio Cost Solutions for a
                    single estimate or ongoing cost support, we strive to save
                    our clients the extra expense of costly personnel.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="12" data-aos="fade-left" data-aos-duration="750">
              <div className="single-widget my-7 media">
                <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                  <span className="count text-primary--light-only gr-text-9">
                    4
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="w-title mb-5 gr-text-7">
                    How will I maintain control of a strict estimating timeline?
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Today's construction market demands responsiveness and rapid
                    turnaround of cost estimates. Once our team has received
                    project documentation for an estimating effort, we will
                    advise a reasonable turnaround period for completion
                    depending on what level of detail is required for the task.
                    Our team provides each client access to our live estimating
                    files, so you can see our progress along the way.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
