import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./PrayerRequest.css";

function PrayerRequest() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_mpd51kn",      // Replace with your Service ID
        "template_r8w7bbf",     // Replace with your Template ID
        formRef.current,
        "oRFmU73GuT3vvqcOf"      // Replace with your Public Key
      )
      .then(
        () => {
          alert("Prayer request sent successfully.");
          formRef.current.reset();
          setLoading(false);
        },
        () => {
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="prayer-page-wrapper">
      {/* Top Section: Intro Text */}
      <section className="intro-section py-5">
        <Container>
          <Row className="justify-content-start">
            <Col lg={10}>
              <h2 className="intro-title mb-4">Do You Need Some Prayer?</h2>
              <p className="intro-text">
                Prayer is a powerful way to connect with God, seeking His guidance, 
                comfort, and strength in your life. It is an opportunity to communicate 
                your hopes, fears, and gratitude to Him. Prayer acknowledges your 
                dependence on God and your desire for His presence in your life. In 
                times of joy or struggle, prayer serves as a constant reminder that 
                you are never alone and that God is always listening. Submit your 
                requests below and embrace the gift of prayer, knowing that it is a 
                vital part of your relationship with God and each other.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bottom Section: Split Screen Form */}
      <section className="form-section">
        <Container fluid className="p-0">
          <Row className="g-0">
            {/* Left Column: Call to Action */}
            <Col md={6} className="left-panel d-flex align-items-center justify-content-center p-5">
              <div className="cta-content">
                <h1 className="cta-heading mb-4">
                  Feel Free Submit Your <br /> Prayer Request
                </h1>
                <p className="cta-subtext mb-5">
                  our prayer teams are always there for you
                </p>
                
                <div className="victory-link d-flex align-items-center">
                  <div className="play-btn-circle">
                    <div className="play-triangle"></div>
                  </div>
                  {/* <span className="victory-text ms-3">PRAYER VICTORIES</span> */}
                </div>
              </div>
            </Col>

            {/* Right Column: Form */}
            <Col md={6} className="right-panel d-flex align-items-center p-5">
              <Form ref={formRef} onSubmit={sendEmail} className="w-100 prayer-form">
                <Row className="mb-4">
                  <Col sm={6} className="mb-3 mb-sm-0">
                    <Form.Control 
                      name="user_name" 
                      placeholder="Enter Name*" 
                      className="pill-input" 
                      required 
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control 
                      type="email" 
                      name="user_email" 
                      placeholder="Enter Email*" 
                      className="pill-input" 
                      required 
                    />
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col sm={6} className="mb-3 mb-sm-0">
                    <Form.Control 
                      name="subject" 
                      placeholder="Enter Subject*" 
                      className="pill-input" 
                      required 
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control 
                      name="phone" 
                      placeholder="Enter Phone No.*" 
                      className="pill-input" 
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control 
                    as="textarea" 
                    name="message" 
                    rows={5} 
                    placeholder="Enter Message*" 
                    className="box-input" 
                    required 
                  />
                </Form.Group>

                <Button type="submit" className="dark-submit-btn" disabled={loading}>
                  {loading ? "SENDING..." : "SUBMIT"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default PrayerRequest;