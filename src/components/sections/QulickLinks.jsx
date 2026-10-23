// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function QuickLinks() {
//   return (
//     <section className="quicklinks-section" style={{ padding: "6rem 0" }}>
//       <Container>
//         {/* Header */}
//         <Row className="mb-5">
//           <Col lg={5}>
//             <small className="text-uppercase text-muted">
//               Quick Links
//             </small>
//             <h1 className="fw-bold mt-3 lh-sm">
//               How can <br /> we help?
//             </h1>
//           </Col>
//         </Row>

//         {/* Cards */}
//         <Row className="g-4">
//           {[
//             // {
//             //   title: "Care",
//             //   text:
//             //     "God did not make us to walk this journey alone. For a variety of groups, counseling referrals and pastoral care.",
//             //   link: "/care",
//             //   label: "Find Support",
//             // },
//             {
//               title: "Prayer",
//               text:
//                 "We firmly believe that prayer changes things, and we would love to join you in lifting your needs up to God.",
//               link: "/prayer",
//               label: "Request Prayer",
//             },
//              {
//       title: "Watch Live",
//       text:
//         "Looking for a message about a particular topic or wanting to view a sermon again?",
//       link: "/watch-online",
//       label: "Watch Here",
//     },
//             // {
//             //   title: "Resources",
//             //   text:
//             //     "Grow deeper in your faith with Bible studies, reading plans and more.",
//             //   link: "/resources",
//             //   label: "Learn More",
//             // },
//             {
//               title: "Church News",
//               text:
//                 "Check out the Church News page for everything from events to connection opportunities.",
//               link: "/news",
//               label: "What’s New",
//             },
//             {
//               title: "Contact",
//               text:
//                 "Have questions or need help? We’d love to hear from you.",
//               link: "/contact",
//               label: "Contact",
//             },
//           ].map((item, index) => (
//             <Col md={6} key={index}>
//               <ScrollReveal delay={index * 0.08} className="quicklink-reveal">
//               <Card className="h-100 border-0 shadow-sm">
//                 <Card.Body className="p-4 d-flex flex-column">
//                   <Card.Title className="fw-semibold mb-3">
//                     {item.title}
//                   </Card.Title>

//                   <Card.Text className="text-muted flex-grow-1">
//                     {item.text}
//                   </Card.Text>

//                   <Link
//                     to={item.link}
//                     className="fw-semibold text-decoration-none text-dark mt-3"
//                   >
//                     {item.label} →
//                   </Link>
//                 </Card.Body>
//               </Card>
//               </ScrollReveal>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default QuickLinks;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HandHeart, PlayCircle, Newspaper, MessageCircle } from "lucide-react";

/* Map icons to each card title (kept separate so your data array is untouched) */
const iconByTitle = {
  Prayer: HandHeart,
  "Watch Live": PlayCircle,
  "Church News": Newspaper,
  Contact: MessageCircle,
};

/* =====================================================================
   Direction-aware scroll reveal (fires scrolling DOWN and UP; re-triggers)
   ===================================================================== */
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const [direction, setDirection] = React.useState("down");
  const lastY = React.useRef(0);

  React.useEffect(() => {
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
      className={`reveal-item ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const quickLinkAnimations = `
  /* ============ DIRECTION-AWARE 3D FLIP + BLUR REVEAL ============ */
  .reveal-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(70px) rotateX(-15deg) scale(0.9);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  .reveal-item.from-down {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(70px) rotateX(-15deg) scale(0.9);
  }
  .reveal-item.from-up {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(-70px) rotateX(15deg) scale(0.9);
  }
  .reveal-item.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  /* ============ HEADER: "QUICK LINKS" PILL (solid color) ============ */
  .quicklinks-eyebrow {
    display: inline-block;
    position: relative;
    padding: 7px 18px;
    border-radius: 999px;
    font-weight: 800;
    font-size: clamp(0.68rem, 1.5vw, 0.78rem);
    letter-spacing: 2.5px;
    color: #ffffff;
    background: var(--brand-primary);
    box-shadow: 0 8px 22px rgba(200, 16, 46, 0.28);
    overflow: hidden;
    white-space: nowrap;
  }
  .quicklinks-eyebrow::after {
    content: "";
    position: absolute;
    top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
    transform: skewX(-20deg);
    animation: eyebrowShimmer 3.2s ease-in-out infinite;
  }
  @keyframes eyebrowShimmer {
    0%   { left: -100%; }
    55%  { left: 130%; }
    100% { left: 130%; }
  }

  /* ============ HEADER: ONE-LINE HEADING ============ */
  .quicklinks-heading {
    font-size: clamp(1.4rem, 4.5vw, 2.6rem);
    font-weight: 800;
    line-height: 1.15;
    margin-top: 16px;
    letter-spacing: -0.5px;
    white-space: nowrap;
    color: var(--brand-blue);
  }

  /* ============ CARD SHELL ============ */
  .quicklink-card {
    position: relative;
    overflow: hidden;
    height: 100%;
    border-radius: 20px !important;
    background: #ffffff;
    transform-style: preserve-3d;
    transition:
      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  /* Solid accent bar across the top */
  .quicklink-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 4px;
    background: var(--brand-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 3;
  }

  /* Shimmer sweep */
  .quicklink-card::after {
    content: "";
    position: absolute;
    top: 0; left: -120%;
    width: 55%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    transform: skewX(-20deg);
    transition: left 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
    z-index: 2;
  }

  .quicklink-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--brand-shadow) !important;
  }
  .quicklink-card:hover::before { transform: scaleX(1); }
  .quicklink-card:hover::after  { left: 130%; }

  /* ============ CARD BODY ============ */
  .quicklink-card .quicklink-body {
    padding: clamp(20px, 4.5vw, 34px) !important;
    display: flex !important;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  /* ============ ICON BADGE (solid color) ============ */
  .quicklink-icon-badge {
    width: clamp(46px, 9vw, 54px);
    height: clamp(46px, 9vw, 54px);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--brand-blue);
    color: #ffffff;
    margin-bottom: clamp(14px, 3vw, 18px);
    box-shadow: 0 8px 20px rgba(31, 79, 163, 0.28);
    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s ease,
      background 0.4s ease;
    flex-shrink: 0;
  }
  .quicklink-card:hover .quicklink-icon-badge {
    transform: translateY(-4px) scale(1.08) rotate(-5deg);
    background: var(--brand-primary);
    box-shadow: 0 12px 26px rgba(200, 16, 46, 0.35);
  }

  /* ============ TITLE + BUTTON ROW ============ */
  .quicklink-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: clamp(10px, 2vw, 14px);
  }

  /* ============ TITLE ============ */
  .quicklink-card .quicklink-title {
    flex: 1 1 auto;
    min-width: 0;
    font-size: clamp(1.1rem, 3.2vw, 1.4rem) !important;
    font-weight: 700 !important;
    letter-spacing: 0.2px;
    color: var(--brand-ink);
    margin-bottom: 0 !important;
    transition: color 0.35s ease, letter-spacing 0.35s ease;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  .quicklink-card:hover .quicklink-title {
    color: var(--brand-blue);
    letter-spacing: 0.5px;
  }

  /* ============ SIDE PILL BUTTON (solid color, no gradient) ============ */
  .quicklink-button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: clamp(0.78rem, 2vw, 0.85rem);
    font-weight: 600;
    letter-spacing: 0.2px;
    white-space: nowrap;
    text-decoration: none;
    background: var(--brand-primary);
    color: #ffffff !important;
    box-shadow: 0 4px 12px rgba(200, 16, 46, 0.22);
    transition:
      background 0.3s ease,
      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.3s ease;
  }
  .quicklink-button:hover,
  .quicklink-button:focus {
    background: var(--brand-deep);
    color: #ffffff !important;
    transform: translateX(3px);
    box-shadow: 0 8px 20px rgba(158, 11, 34, 0.35);
  }

  /* ============ TEXT ============ */
  .quicklink-card .quicklink-text {
    font-size: clamp(0.92rem, 2.6vw, 1.02rem) !important;
    line-height: 1.65;
    color: var(--brand-muted) !important;
    margin-bottom: 0 !important;
    margin-top: clamp(6px, 1.5vw, 10px) !important;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  /* ============ MOBILE (touch-friendly) ============ */
  @media (max-width: 767.98px) {
    .quicklink-card:hover {
      transform: none;
      box-shadow: 0 14px 32px rgba(27, 39, 62, 0.14) !important;
    }
    .quicklink-card:hover .quicklink-icon-badge {
      transform: none;
      background: var(--brand-blue);
      box-shadow: 0 8px 20px rgba(31, 79, 163, 0.28);
    }
    .quicklink-button:hover { transform: none; }
    .quicklink-card:hover::after { left: -120%; }
  }

  /* Very small phones — ensure pill + heading still fit */
  @media (max-width: 360px) {
    .quicklinks-heading { font-size: 1.25rem; }
    .quicklinks-eyebrow { letter-spacing: 1.8px; padding: 6px 14px; }
    .quicklink-button { padding: 7px 12px; font-size: 0.76rem; }
  }

  /* ============ REDUCED MOTION ============ */
  @media (prefers-reduced-motion: reduce) {
    .reveal-item,
    .quicklink-card,
    .quicklink-button,
    .quicklink-icon-badge,
    .quicklink-card::before,
    .quicklink-card::after,
    .quicklinks-eyebrow::after {
      transition: none !important;
      animation: none !important;
    }
    .reveal-item {
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
    }
    .quicklink-card:hover { transform: none; }
  }
`;

function QuickLinks() {
  return (
    <section className="quicklinks-section" style={{ padding: "6rem 0" }}>
      <style>{quickLinkAnimations}</style>
      <Container>
        {/* ================= Header (also animated on scroll) ================= */}
        <Row className="mb-5">
          <Col lg={8}>
            <RevealOnScroll delay={0}>
              <div>
                <small className="text-uppercase quicklinks-eyebrow">
                  Quick Links
                </small>
                <h1 className="fw-bold mt-3 lh-sm quicklinks-heading">
                  How can we help?
                </h1>
              </div>
            </RevealOnScroll>
          </Col>
        </Row>

        {/* ================= Cards ================= */}
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
          ].map((item, index) => {
            const IconComp = iconByTitle[item.title];
            return (
              <Col md={6} key={index}>
                <RevealOnScroll delay={index * 0.08} className="quicklink-reveal">
                  <Card className="h-100 border-0 shadow-sm quicklink-card">
                    <Card.Body className="p-4 d-flex flex-column quicklink-body">
                      {IconComp && (
                        <div className="quicklink-icon-badge" aria-hidden="true">
                          <IconComp size={24} strokeWidth={2.2} />
                        </div>
                      )}

                      {/* ==== Title + Button on the SAME row ==== */}
                      <div className="quicklink-title-row">
                        <Card.Title className="fw-semibold mb-0 quicklink-title">
                          {item.title}
                        </Card.Title>

                        <Link
                          to={item.link}
                          className="quicklink-button"
                        >
                          {item.label} →
                        </Link>
                      </div>

                      <Card.Text className="text-muted flex-grow-1 quicklink-text">
                        {item.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </RevealOnScroll>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default QuickLinks;