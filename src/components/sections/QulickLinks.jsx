import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

function QuickLinks() {
  return (
    <section className="quicklinks-section" style={{ padding: "6rem 0" }}>
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col lg={5}>
            <small className="text-uppercase text-muted">
              Quick Links
            </small>
            <h1 className="fw-bold mt-3 lh-sm">
              How can <br /> we help?
            </h1>
          </Col>
        </Row>

        {/* Cards */}
        <Row className="g-4">
          {[
            // {
            //   title: "Care",
            //   text:
            //     "God did not make us to walk this journey alone. For a variety of groups, counseling referrals and pastoral care.",
            //   link: "/care",
            //   label: "Find Support",
            // },
            {
              title: "Prayer",
              text:
                "We firmly believe that prayer changes things, and we would love to join you in lifting your needs up to God.",
              link: "/prayer",
              label: "Request Prayer",
            },
             {
      title: "Watch Live",
      text:
        "Looking for a message about a particular topic or wanting to view a sermon again?",
      link: "/watch-online",
      label: "Watch Here",
    },
            // {
            //   title: "Resources",
            //   text:
            //     "Grow deeper in your faith with Bible studies, reading plans and more.",
            //   link: "/resources",
            //   label: "Learn More",
            // },
            {
              title: "Church News",
              text:
                "Check out the Church News page for everything from events to connection opportunities.",
              link: "/news",
              label: "What’s New",
            },
            {
              title: "Contact",
              text:
                "Have questions or need help? We’d love to hear from you.",
              link: "/contact",
              label: "Contact",
            },
          ].map((item, index) => (
            <Col md={6} key={index}>
              <ScrollReveal delay={index * 0.08} className="quicklink-reveal">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 d-flex flex-column">
                  <Card.Title className="fw-semibold mb-3">
                    {item.title}
                  </Card.Title>

                  <Card.Text className="text-muted flex-grow-1">
                    {item.text}
                  </Card.Text>

                  <Link
                    to={item.link}
                    className="fw-semibold text-decoration-none text-dark mt-3"
                  >
                    {item.label} →
                  </Link>
                </Card.Body>
              </Card>
              </ScrollReveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default QuickLinks;

