import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const contactClassName =
    gContext.footer.theme === "dark" ? "gr-text-color" : "text-primary";

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color"
      : "gr-text-color gr-hover-text-blue";

  const copyClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color-opacity"
      : "gr-text-color";

  return (
    <>
      <div
        className={`footer-section ${
          gContext.footer.theme === "dark"
            ? "bg-blackish-blue dark-mode-texts"
            : ""
        }`}
      >
        <Container>
          <div className="footer-top pt-14 pt-lg-25 pb-lg-19">
            <Row>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Company</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/company/approach">
                        <a className={`gr-text-9 ${linkClassName}`}>
                          Our Approach
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/company/careers/openings">
                        <a className={`gr-text-9 ${linkClassName}`}>Careers</a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/company/about">
                        <a className={`gr-text-9 ${linkClassName}`}>About</a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/company/contact">
                        <a className={`gr-text-9 ${linkClassName}`}>
                          Contact Us
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3" className="pl-lg-15">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Legal</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/company/privacy">
                        <a className={`gr-text-9 ${linkClassName}`}>
                          Privacy Policy
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/company/cookies">
                        <a className={`gr-text-9 ${linkClassName}`}>
                          Cookie Policy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Contact</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">Presidio Cost Solutions, LLC</li>
                    <li className="py-2">
                      <a
                        className={`gr-text-9 font-weight-bold hover-underline active ${contactClassName}`}
                        href="mailto:success@presidiosolutions.com"
                      >
                        success@presidiosolutions.com
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        className={`gr-text-9 font-weight-bold hover-underline active ${contactClassName}`}
                        href="tel:+133-394-3439-1435"
                      >
                        +1 (415) 542-8218
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="copyright-area border-top py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p
                  className={`copyright-text gr-text-11 mb-6 mb-lg-0 text-center text-lg-left ${copyClassName}`}
                >
                  © 2020 Presidio Cost Solutions, LLC. All Rights Reserved.
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-right">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="ml-7">
                    <a
                      className={iconClassName}
                      href="https://www.twitter.com/presidiocs"
                      target="_blank"
                    >
                      <i className="icon icon-logo-twitter"></i>
                    </a>
                  </li>
                  <li className="ml-7">
                    <a
                      className={iconClassName}
                      href="https://www.facebook.com/presidiosolutions"
                      target="_blank"
                    >
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </li>

                  <li className="ml-7">
                    <a
                      className={iconClassName}
                      href="https://www.linkedin.com/company/presidiosolutions"
                      target="_blank"
                    >
                      <i className="icon icon-logo-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
