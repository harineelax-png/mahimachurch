import React, { useRef, useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ArrowRight, HeartHandshake, LockKeyhole, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "../ScrollReveal";
import "./PrayerRequest.css";

/* =====================================================================
   Direction-aware scroll reveal (fires scrolling DOWN and UP; re-triggers)
   ===================================================================== */
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState("down");
  const lastY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (y > lastY.current) setDirection("down");
      else if (y < lastY.current) setDirection("up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const stateClass = visible
    ? "is-visible"
    : direction === "up"
    ? "from-up"
    : "from-down";

  return (
    <div
      ref={ref}
      className={`prayer-reveal ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

function PrayerRequest() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      await emailjs.sendForm(
        "service_mpd51kn",
        "template_r8w7bbf",
        formRef.current,
        "oRFmU73GuT3vvqcOf"
      );
      formRef.current.reset();
      setStatus("Your prayer request has been sent. Our prayer team will lift it up.");
      setStatusType("success");
    } catch (error) {
      console.error("Unable to send prayer request.", error);
      setStatus("We couldn’t send your request just now. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="prayer-page-wrapper prayer-page">
      <section className="prayer-hero">
        <RevealOnScroll className="prayer-hero-content">
          <span className="theme-eyebrow">You are not alone</span>
          <h1>How can we pray for you?</h1>
          <p>
            Whatever you’re carrying, you’re welcome to share it with us. Our prayer team is here to stand with you.
          </p>
          <a className="prayer-hero-link" href="#prayer-form">
            Share a request <ArrowRight size={17} aria-hidden="true" />
          </a>
        </RevealOnScroll>
        <div className="prayer-hero-symbol" aria-hidden="true">✝</div>
      </section>

      <section className="prayer-intro-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <RevealOnScroll className="prayer-intro-card">
                <span className="prayer-intro-icon"><HeartHandshake size={25} aria-hidden="true" /></span>
                <span className="theme-eyebrow">A moment to pause</span>
                <h2>You don’t have to walk through it alone.</h2>
                <p>
                  Prayer is a way to bring your hopes, fears, and gratitude before God. In times of joy or struggle,
                  it can remind us that we are never alone. Share what is on your heart, and our team will pray with you.
                </p>
              </RevealOnScroll>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="prayer-form-section" id="prayer-form">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={5}>
              <RevealOnScroll className="prayer-form-aside">
                <span className="theme-eyebrow">We’re listening</span>
                <h2>Share your request in confidence.</h2>
                <p>
                  Our prayer team is ready to pray for you. Share only what you feel comfortable sharing.
                </p>
                <div className="prayer-privacy-note">
                  <LockKeyhole size={18} aria-hidden="true" />
                  <span>Your request is shared with our prayer team for prayer.</span>
                </div>
                <div className="prayer-verse">
                  <span>“Cast all your anxiety on him because he cares for you.”</span>
                  <small>1 Peter 5:7</small>
                </div>
              </RevealOnScroll>
            </Col>

            <Col lg={7}>
              <RevealOnScroll className="prayer-form-card" delay={0.1}>
                <Form ref={formRef} onSubmit={sendEmail} className="prayer-form">
                  <Row className="g-3">
                    <Col sm={6}>
                      <Form.Group controlId="prayer-name">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control name="user_name" placeholder="Enter your name" className="pill-input" required />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="prayer-email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="user_email" placeholder="you@example.com" className="pill-input" required />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="prayer-subject">
                        <Form.Label>Prayer topic</Form.Label>
                        <Form.Control name="subject" placeholder="What would you like prayer for?" className="pill-input" required />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="prayer-phone">
                        <Form.Label>Phone number <span>(optional)</span></Form.Label>
                        <Form.Control type="tel" name="phone" placeholder="Your phone number" className="pill-input" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="prayer-message">
                        <Form.Label>Your prayer request</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={5}
                          placeholder="Share as much or as little as you would like..."
                          className="box-input"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="prayer-submit-row">
                      <Button type="submit" className="dark-submit-btn" disabled={loading}>
                        {loading ? "Sending request..." : "Send prayer request"}
                        {!loading && <Send size={17} aria-hidden="true" />}
                      </Button>
                    </Col>
                    {status && (
                      <Col xs={12}>
                        <p className={`prayer-form-status ${statusType}`} role="status" aria-live="polite">
                          {status}
                        </p>
                      </Col>
                    )}
                  </Row>
                </Form>
              </RevealOnScroll>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default PrayerRequest;