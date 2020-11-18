import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";

const AboutPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <h2 className="gr-text-3 mb-0"> Cookies Notice </h2>
            <br></br>
            <Row>
              <Col lg="12">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    <h4>Introduction</h4>
                    <h5>Our website uses cookies.</h5>
                    <p>
                      Insofar as those cookies are not strictly necessary for
                      the provision of [our website and services], we will ask
                      you to consent to our use of cookies when you first visit
                      our website.
                    </p>
                    <h4>About cookies</h4>
                    <p>
                      A cookie is a file containing an identifier (a string of
                      letters and numbers) that is sent by a web server to a web
                      browser and is stored by the browser. The identifier is
                      then sent back to the server each time the browser
                      requests a page from the server.
                    </p>
                    <p>
                      Cookies may be either "persistent" cookies or "session"
                      cookies: a persistent cookie will be stored by a web
                      browser and will remain valid until its set expiry date,
                      unless deleted by the user before the expiry date; a
                      session cookie, on the other hand, will expire at the end
                      of the user session, when the web browser is closed.
                    </p>
                    <p>
                      Cookies do not typically contain any information that
                      personally identifies a user, but personal information
                      that we store about you may be linked to the information
                      stored in and obtained from cookies.
                    </p>
                    <h4>Cookies that we use</h4>
                    <h5>We use cookies for the following purposes:</h5>
                    <ul>
                      <li>
                        to identify you when you visit our website and as you
                        navigate our website
                      </li>
                      <li>
                        to help us to analyse the use and performance of our
                        website and services
                      </li>
                    </ul>
                    <h4>Cookies used by our service providers</h4>
                    <p>
                      Our service providers use cookies and those cookies may be
                      stored on your computer when you visit our website.{" "}
                    </p>
                    <p>
                      We use Google Analytics to analyse the use of our website.
                      Google Analytics gathers information about website use by
                      means of cookies. The information gathered relating to our
                      website is used to create reports about the use of our
                      website. Google's privacy policy is available at:
                      https://policies.google.com/privacy.
                    </p>
                    <h4>Managing cookies</h4>
                    <p>
                      Most browsers allow you to refuse to accept cookies and to
                      delete cookies. The methods for doing so vary from browser
                      to browser, and from version to version. You can however
                      obtain up-to-date information about blocking and deleting
                      cookies via these links:{" "}
                    </p>
                    <ul>
                      <li>
                        https://support.google.com/chrome/answer/95647 (Chrome)
                      </li>
                      <li>
                        {" "}
                        https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                        (Firefox)
                      </li>
                      <li>
                        https://www.opera.com/help/tutorials/security/cookies/
                        (Opera)
                      </li>
                      <li>
                        https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                        (Internet Explorer)
                      </li>
                      <li>https://support.apple.com/kb/PH21411 (Safari)</li>
                      <li>
                        https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy
                        (Edge)
                      </li>
                    </ul>
                    <p>
                      Blocking all cookies may have a negative impact upon the
                      usability of many websites.
                    </p>
                    <p>
                      If you block cookies, you will not be able to use all the
                      features on our website.
                    </p>
                    <h4>Our details</h4>
                    <p>
                      If you have any questions or concerns related to this
                      policy, you can contact us via email, using
                      info@presidiosolutions.com  
                    </p>
                     
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
