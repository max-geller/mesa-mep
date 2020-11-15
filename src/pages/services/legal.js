import React from "react";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import estimate from "./../../assets/image/stock/estimating.jpeg";

const Legal = () => {
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
            background-image: url(${estimate});
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
                  <h1 className="gr-text-2 font-weight-bold mb-8">
                    ESTIMATING
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Let us take care of your MEP estimating needs. Our systems
                    estimating approach provides a level of cost-certainty
                    unparalleled in the industry.
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
          <p>
            Presidio Cost Solutions provides technical support services to the legal,
            building and insurance professions to help them avoid, respond to
            and manage building system failures. We also provide support
            services for a variety of construction related matters including
            expert testimony. Our experience spans virtually the entire range of
            projects: from university and educational facilities to
            institutional, municipal and other public buildings as well as
            commercial, industrial and residential projects. MEP staff has been
            retained in hundreds of construction-related cases to provide a
            broad range of forensic services. We provide fair-minded
            investigation, analysis and recommendations based upon sound
            engineering principles. Claims Settlement in construction projects
            involves a methodical investigation of the claim and its history to
            assess its validity or otherwise. The first issue to address in
            claims settlement is the contractual position of the parties to see
            if the matter that is the subject of the claim is already a
            responsibility of the claimant or not, and whether the other party
            would be responsible for recompense anyway. With the contractual
            situation clear, the details of the claim itself can be evaluated if
            necessary. Construction claims normally involve assessment of
            additional work and/or schedule delays with their associated costs,
            and these issues often need to be addressed as one of the initial
            step in claims settlement. Measuring the quantity of any additional
            or deleted work is the easy part when the claim is related to
            changes in scope. Assessing the appropriate values to assign to this
            work can be more involved, necessitating research into how and when
            the work was carried out. Was it carried out in sequence with
            similar work, did it involve remobilizing for the subcontractor
            involved, did the subcontractor have to work around other
            contractors, etc.? Assessing schedule affects involve checking
            whether the work is on the critical path or not. The fact that a
            contractor has additional work to do does not automatically mean
            that a schedule delay is involved - it may simply mean that the
            contractor can utilize her available staff more effectively.
            Avoiding claims in the first place is far better than dealing with
            them, and this can be achieved by carrying out a constructability
            analysis of the contract documents to ensure their completeness, and
            by carrying out a risk analysis of the project to find where
            problems are most likely to arise and plan for mitigating them. The
            best known method of dispute resolution is through taking the matter
            to the courts, but that can be a very long-winded and expensive way
            to settle an issue, so alternatives have been implemented to achieve
            the same ends, without the time and financial hardships (which are
            frequently the subject matter of construction disputes anyway, so
            why exacerbate them?). The best known alternative dispute resolution
            method has to be arbitration, which is frequently written into
            construction contracts as the first formal method of resolving
            disputes. Here, one or more arbitrators are appointed, and the
            arbitrator(s) hears the issues between the parties and hands down a
            decision on the matter. In many ways it is like taking the matter to
            court, except that the manner of hearing is as agreed between the
            parties, and can be formal (similar to a court) or completely
            informal. At times it may be appropriate for both sides to simply
            submit written documentation on the issues to the arbitrator,
            without any actual hearings. The courts will almost always uphold
            the decision of the arbitrator if necessary. Mediation is a dispute
            resolution method where a neutral party, the mediator, assists the
            parties in dispute to reach a resolution to the conflict. The job of
            the mediator is to guide the discussions, trying to meet each
            parties needs as far as possible, without damaging the other party's
            position. Conciliation is a similar technique, but here the role of
            the conciliator is to seek concessions between the parties, often
            utilizing a form of shuttle diplomacy with the parties in dispute
            not actually meeting face to face. With mediation and conciliation,
            the neutral party is there to help, but has no authority to impose a
            solution. Dispute Resolution Claims Settlement
          </p>
        </div>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Legal;
