import React from "react";
import ReactGA from "react-ga";

import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";

const trackingId = "UA-183812989-1";

const PrivacyPolicy = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/company/privacy");
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
            <h2 className="gr-text-3 mb-0"> Privacy Policy </h2><br></br>
            <Row>
              <Col lg="12">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    Protecting your private information is our priority. This
                    Statement of Privacy applies to
                    https://www.presidiosolutions.com and Presidio Cost
                    Solutions, LLC and governs data collection and usage. For
                    the purposes of this Privacy Policy, unless otherwise noted,
                    all references to Presidio Cost Solutions, LLC include
                    https://www.presidiosolutions.com, Presidio Cost Solutions,
                    Presidio Client Portal and
                    https://clients.presidiosolutions.com. The Presidio Cost
                    Solutions website is a business information site. By using
                    the Presidio Cost Solutions website, you consent to the data
                    practices described in this statement.  {" "}
                  </p>
                  <h4>Collection of your Personal Information </h4>
                  <p>
                    In order to better provide you with products and services
                    offered on our Site, Presidio Cost Solutions may collect
                    personally identifiable information, such as your:  {" "}
                  </p>
                  <ul>
                    <li>First and Last Name </li>
                    <li>Email </li>
                    <li>Phone Number </li>
                  </ul>
                  <p>
                    We do not collect any personal information about you unless
                    you voluntarily provide it to us. However, you may be
                    required to provide certain personal information to us when
                    you elect to use certain products or services available on
                    the Site. These may include: (a) registering for an account
                    on our Site; (b) entering a sweepstakes or contest sponsored
                    by us or one of our partners; (c) signing up for special
                    offers from selected third parties; (d) sending us an email
                    message; (e) submitting your credit card or other payment
                    information when ordering and purchasing products and
                    services on our Site. To wit, we will use your information
                    for, but not limited to, communicating with you in relation
                    to services and/or products you have requested from us. We
                    also may gather additional personal or non-personal
                    information in the future.  {" "}
                  </p>
                  <h4>Use of your Personal Information</h4>
                  <p>
                    Presidio Cost Solutions collects and uses your personal
                    information to operate its website(s) and deliver the
                    services you have requested.   Presidio Cost Solutions may
                    also use your personally identifiable information to inform
                    you of other products or services available from Presidio
                    Cost Solutions and its affiliates.  
                  </p>
                  <h4>Sharing Information with Third Parties</h4>
                  <p>
                    Presidio Cost Solutions does not sell, rent or lease its
                    customer lists to third parties.   Presidio Cost Solutions
                    may share data with trusted partners to help perform
                    statistical analysis, send you email or postal mail, provide
                    customer support, or arrange for deliveries. All such third
                    parties are prohibited from using your personal information
                    except to provide these services to Presidio Cost Solutions,
                    and they are required to maintain the confidentiality of
                    your information.   Presidio Cost Solutions may disclose
                    your personal information, without notice, if required to do
                    so by law or in the good faith belief that such action is
                    necessary to: (a) conform to the edicts of the law or comply
                    with legal process served on Presidio Cost Solutions or the
                    site; (b) protect and defend the rights or property of
                    Presidio Cost Solutions; and/or (c) act under exigent
                    circumstances to protect the personal safety of users of
                    Presidio Cost Solutions, or the public.  
                    <h4>Tracking User Behavior</h4>
                    Presidio Cost Solutions may keep track of the websites and
                    pages our users visit within Presidio Cost Solutions, in
                    order to determine what Presidio Cost Solutions services are
                    the most popular. This data is used to deliver customized
                    content and advertising within Presidio Cost Solutions to
                    customers whose behavior indicates that they are interested
                    in a particular subject area.  
                  </p>
                  <h4>Automatically Collected Information</h4>
                  <p>
                    Information about your computer hardware and software may be
                    automatically collected by Presidio Cost Solutions. This
                    information can include: your IP address, browser type,
                    domain names, access times and referring website addresses.
                    This information is used for the operation of the service,
                    to maintain quality of the service, and to provide general
                    statistics regarding use of the Presidio Cost Solutions
                    website.
                  </p>
                   <h4>Use of Cookies</h4>
                  <p>
                    The Presidio Cost Solutions website may use "cookies" to
                    help you personalize your online experience. A cookie is a
                    text file that is placed on your hard disk by a web page
                    server. Cookies cannot be used to run programs or deliver
                    viruses to your computer. Cookies are uniquely assigned to
                    you, and can only be read by a web server in the domain that
                    issued the cookie to you.   One of the primary purposes of
                    cookies is to provide a convenience feature to save you
                    time. The purpose of a cookie is to tell the Web server that
                    you have returned to a specific page. For example, if you
                    personalize Presidio Cost Solutions pages, or register with
                    Presidio Cost Solutions site or services, a cookie helps
                    Presidio Cost Solutions to recall your specific information
                    on subsequent visits. This simplifies the process of
                    recording your personal information, such as billing
                    addresses, shipping addresses, and so on. When you return to
                    the same Presidio Cost Solutions website, the information
                    you previously provided can be retrieved, so you can easily
                    use the Presidio Cost Solutions features that you
                    customized.   You have the ability to accept or decline
                    cookies. Most Web browsers automatically accept cookies, but
                    you can usually modify your browser setting to decline
                    cookies if you prefer. If you choose to decline cookies, you
                    may not be able to fully experience the interactive features
                    of the Presidio Cost Solutions services or websites you
                    visit.  
                  </p>
                  <h4>Links</h4>
                  <p>
                    This website contains links to other sites. Please be aware
                    that we are not responsible for the content or privacy
                    practices of such other sites. We encourage our users to be
                    aware when they leave our site and to read the privacy
                    statements of any other site that collects personally
                    identifiable information.  
                  </p>
                  <h4>Security of your Personal Information</h4>
                  <p>
                    Presidio Cost Solutions secures your personal information
                    from unauthorized access, use, or disclosure. Presidio Cost
                    Solutions uses the following methods for SSL Protocol
                    purposes.   When personal information (such as a credit card
                    number) is transmitted to other websites, it is protected
                    through the use of encryption, such as the Secure Sockets
                    Layer (SSL) protocol.   We strive to take appropriate
                    security measures to protect against unauthorized access to
                    or alteration of your personal information. Unfortunately,
                    no data transmission over the Internet or any wireless
                    network can be guaranteed to be 100% secure. As a result,
                    while we strive to protect your personal information, you
                    acknowledge that: (a) there are security and privacy
                    limitations inherent to the Internet which are beyond our
                    control; and (b) security, integrity, and privacy of any and
                    all information and data exchanged between you and us
                    through this Site cannot be guaranteed.{" "}
                  </p>
                   <h4>Right to Deletion</h4>
                  <p>
                    Subject to certain exceptions set out below, on receipt of a
                    verifiable request from you, we will:
                  </p>
                  <ul>
                    <li>
                      Delete your personal information from our records; and{" "}
                    </li>
                    <li>
                      Direct any service providers to delete your personal
                      information from their records.{" "}
                    </li>
                  </ul>
                  <p>
                      Please note that we may not be able to comply with
                    requests to delete your personal information if it is
                    necessary to:
                  </p>
                  <ul>
                    <li>
                      Complete the transaction for which the personal
                      information was collected, fulfill the terms of a written
                      warranty or product recall conducted in accordance with
                      federal law, provide a good or service requested by you,
                      or reasonably anticipated within the context of our
                      ongoing business relationship with you, or otherwise
                      perform a contract between you and us;
                    </li>
                    <li>
                      Detect security incidents, protect against malicious,
                      deceptive, fraudulent, or illegal activity; or prosecute
                      those responsible for that activity;{" "}
                    </li>
                    <li>
                      Debug to identify and repair errors that impair existing
                      intended functionality;{" "}
                    </li>
                    <li>
                      Exercise free speech, ensure the right of another consumer
                      to exercise his or her right of free speech, or exercise
                      another right provided for by law;{" "}
                    </li>
                    <li>
                      Comply with the California Electronic Communications
                      Privacy Act;{" "}
                    </li>
                    <li>
                      Engage in public or peer-reviewed scientific, historical,
                      or statistical research in the public interest that
                      adheres to all other applicable ethics and privacy laws,
                      when our deletion of the information is likely to render
                      impossible or seriously impair the achievement of such
                      research, provided we have obtained your informed consent;{" "}
                    </li>
                    <li>
                      Enable solely internal uses that are reasonably aligned
                      with your expectations based on your relationship with us;{" "}
                    </li>
                    <li>Comply with an existing legal obligation; or </li>
                    <li>
                      Otherwise use your personal information, internally, in a
                      lawful manner that is compatible with the context in which
                      you provided the information.{" "}
                    </li>
                  </ul>
                  <h4>Children Under Thirteen</h4> 
                  <p>
                    {" "}
                    Presidio Cost Solutions does not knowingly collect
                    personally identifiable information from children under the
                    age of thirteen. If you are under the age of thirteen, you
                    must ask your parent or guardian for permission to use this
                    website.  
                  </p>
                  <h4>E-mail Communications</h4>
                  <p>
                    From time to time, Presidio Cost Solutions may contact you
                    via email for the purpose of providing announcements,
                    promotional offers, alerts, confirmations, surveys, and/or
                    other general communication.
                  </p>{" "}
                   <h4>External Data Storage Sites</h4>
                  <p>
                    We may store your data on servers provided by third party
                    hosting vendors with whom we have contracted.  
                  </p>
                  <h4>Changes to this Statement</h4>
                  <p>
                    Presidio Cost Solutions reserves the right to change this
                    Privacy Policy from time to time. We will notify you about
                    significant changes in the way we treat personal information
                    by sending a notice to the primary email address specified
                    in your account, by placing a prominent notice on our site,
                    and/or by updating any privacy information on this page.
                    Your continued use of the Site and/or Services available
                    through this Site after such modifications will constitute
                    your: (a) acknowledgment of the modified Privacy Policy; and
                    (b) agreement to abide and be bound by that Policy.  
                  </p>
                  <h4>Contact Information</h4>
                  <p>
                    Presidio Cost Solutions welcomes your questions or comments
                    regarding this Statement of Privacy. If you believe that
                    Presidio Cost Solutions has not adhered to this Statement,
                    please contact Presidio Cost Solutions at:
                  </p>{" "}
                   <br></br>
                  Presidio Cost Solutions, LLC <br></br>
                  7100 W Grandview Rd #1162 <br></br>
                  Peoria, Arizona 85382 <br></br> <h4>Email Address:</h4>
                  info@presidiosolutions.com    {" "}
                  <p>Effective as of November 16, 2020  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default PrivacyPolicy;
