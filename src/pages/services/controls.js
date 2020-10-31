import React from "react";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import ipad from "./../../assets/image/stock/ipad.jpeg";

const Controls = () => {
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
        {/* <!-- Hero Area --> */}
        <div
          className="bg-image bg-gradient bg-gradient-black mt-17 pt-14 pt-lg-12 pb-lg-12"
          css={`
            background-image: url(${ipad});
          `}
        >
          <Container>
            <Row className="align-items-center">
              <Col
                md="9"
                lg="7"
                xl="6"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-content section-title dark-mode-texts">
                  <h1 className="gr-text-3 font-weight-bold mb-8">
                    PROJECT CONTROLS
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    History shows the buyout process of MEP systems is the
                    single-largest contributor to trade bid variance. Let's get
                    you setup for success.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <!-- Fact Area --> */}
        <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
          <Container>
            <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
              <h3 className="gr-text-3 mr-9">1M+</h3>
              <p className="gr-text-9 mb-0">Somin somin</p>
            </div>

            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp duration={3} end={93} />%
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Satisfaction rate from our customers.
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp
                        duration={3}
                        decimal="."
                        decimals={1}
                        end={4.9}
                      />
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Average customer ratings out of 5.00!
                </p>
              </div>
            </Col>
          </Container>
        </div>
        <div>
          <p>
            Project Budgeting The budget is one of the three main items pulling
            on your project (the other two being schedule and quality), so
            budget management is essential. The initial step in budget
            management is establishing a realistic budget in the first place.
            This might be fixed by specific funds having been allocated for the
            project, and the goal then is to see what can be achieved for the
            previously established funds. Alternatively, the scope requirements
            may have been established, and a realistic budget will then need to
            be arrived at, based on those requirements. For a commercial
            development, there is also the need to ensure that the development
            will be profitable for the enterprise. Sometimes the scope
            requirements and specific funds have been allocated, and the goal is
            then to establish ways to make the two work together, or adjust one
            or both to attain a satisfactory balance. The project budget would
            include such items as: Construction costs Design fees Construction
            management fees Allowance for change orders Regulatory authorities'
            fees and charges Utility company connection fees and charges Loose
            furniture Special equipment and instrumentation Land costs Legal and
            administrative charges Relocation costs Other owner costs Sometimes
            the above list is summarized as Hard Construction Costs (the first
            item on the above list) and Soft Costs (the other items on the
            list). The relationship between these elements has been depicted as
            an iceberg, with the visible portion of the iceberg (the part above
            the waterline) representing the Hard Costs, and the hidden part
            below the waterline being the Soft Costs. Once the design phase has
            begun, the design needs to be assessed at points during the design
            to ensure that it is keeping on target, and that 'scope creep',
            market conditions, or other factors are not moving the design off
            target. Estimating the project when large parts of the work has
            still to be designed means that you need good records from previous
            projects, so that appropriate allowances can be made, and we have a
            substantial database of project information to call on. Apart from
            providing regular estimates based on the design as it progresses,
            Value Engineering provides an excellent means of ensuring that the
            building owner's goals are being maximized within the constraints of
            the budget. Related to value engineering is life-cycle costing,
            where the initial and on-going costs are combined to compare
            different options and establish what option is most cost effective
            over the life of the building. Once the design is complete, and
            successful bids have been achieved, budget management then needs to
            keep track of change orders, claims, and other project related
            costs. Sometimes costs need to be analyzed for allocation to
            different people. On one infrastructure project we have been
            associated with recently the costs for the joint trench had to be
            subdivided for allocation to the various utility companies running
            services through it. Another government project had to have the
            construction costs allocated to each of the agencies using the
            building. Change Order Forensics Here's the paragraph text. MEP
            Tradd Labor & Productivity Validation Here's the paragraph text.
          </p>
          <h4>Sample Cost Control Assets</h4>
          <ul>
            <li>Cash Flow Dashboard</li>
            <li>Systems Budget Report</li>
            <li>Actual vs Budgeted Report</li>
          </ul>
        </div>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Controls;
