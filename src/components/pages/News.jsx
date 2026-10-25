import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, CalendarDays, Clock3, HeartHandshake, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

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
      className={`news-reveal ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const newsAnimations = `
  /* ============================================================
     REVEAL — direction-aware 3D flip + blur (re-triggers)
     ============================================================ */
  .news-reveal {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(70px) rotateX(-15deg) scale(0.9);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
    height: 100%;
  }
  .news-reveal.from-down {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(70px) rotateX(-15deg) scale(0.9);
  }
  .news-reveal.from-up {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(-70px) rotateX(15deg) scale(0.9);
  }
  .news-reveal.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  /* ============================================================
     HERO — animated title, floating tagline decoration
     ============================================================ */
  .news-hero h1 {
    animation: newsTitleIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
  }
  @keyframes newsTitleIn {
    0%   { opacity: 0; transform: translateY(30px); filter: blur(8px); letter-spacing: 6px; }
    100% { opacity: 1; transform: translateY(0);    filter: blur(0);  letter-spacing: inherit; }
  }

  .news-hero .theme-eyebrow {
    animation: newsEyebrowIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes newsEyebrowIn {
    0%   { opacity: 0; transform: translateY(15px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .news-hero-content > p {
    animation: newsSubIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
  }
  @keyframes newsSubIn {
    0%   { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .news-hero-content .theme-button {
    animation: newsBtnIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
  }
  @keyframes newsBtnIn {
    0%   { opacity: 0; transform: translateY(20px) scale(0.96); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  .news-hero-decoration {
    animation: newsDecorFloat 6s ease-in-out infinite;
  }
  @keyframes newsDecorFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }

  .news-hero-decoration i {
    animation: newsDecorPulse 3s ease-in-out infinite;
    display: inline-block;
  }
  @keyframes newsDecorPulse {
    0%, 100% { transform: scale(1);   opacity: 0.8; }
    50%      { transform: scale(1.3); opacity: 1;   }
  }

  /* ============================================================
     CARD — premium hover polish (layered on existing classes)
     ============================================================ */
  .news-card {
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transition:
      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.4s ease;
  }

  /* Gradient top-bar sweep */
  .news-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--brand-primary, #c8102e);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 3;
  }

  /* Shimmer sweep */
  .news-card::after {
    content: "";
    position: absolute;
    top: 0;
    left: -120%;
    width: 55%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    transform: skewX(-20deg);
    transition: left 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
    z-index: 2;
  }

  .news-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--brand-shadow, 0 20px 48px rgba(27, 39, 62, 0.15));
  }
  .news-card:hover::before { transform: scaleX(1); }
  .news-card:hover::after  { left: 130%; }

  /* Featured card — glow pulse */
  .news-card.featured {
    animation: featuredGlow 4s ease-in-out infinite;
  }
  @keyframes featuredGlow {
    0%, 100% { box-shadow: 0 12px 34px rgba(76, 175, 58, 0.10); }
    50%      { box-shadow: 0 16px 44px rgba(76, 175, 58, 0.22); }
  }

  /* Icon badge — hover rotate + glow */
  .news-card-icon {
    transition:
      transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.45s ease,
      background 0.4s ease,
      color 0.4s ease;
  }
  .news-card:hover .news-card-icon {
    transform: translateY(-3px) scale(1.12) rotate(-8deg);
    box-shadow: 0 10px 24px rgba(200, 16, 46, 0.35);
    background: var(--brand-primary, #c8102e);
    color: #ffffff;
  }

  /* Title — color + letterspacing shift */
  .news-card h3 {
    transition: color 0.35s ease, letter-spacing 0.35s ease;
  }
  .news-card:hover h3 {
    color: var(--brand-primary, #c8102e);
    letter-spacing: 0.3px;
  }

  /* Label — subtle pulse + color shift */
  .news-card-label {
    transition: color 0.35s ease;
  }
  .news-card:hover .news-card-label {
    color: var(--brand-blue, #1f4fa3);
  }

  /* Action link — arrow slides */
  .news-card-bottom a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition:
      color 0.3s ease,
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .news-card-bottom a svg {
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .news-card:hover .news-card-bottom a {
    transform: translateX(4px);
  }
  .news-card:hover .news-card-bottom a svg {
    transform: translateX(3px);
  }

  /* Detail row icon subtle bounce on hover */
  .news-card-bottom > span svg {
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .news-card:hover .news-card-bottom > span svg {
    transform: rotate(-10deg) scale(1.1);
  }

  /* ============================================================
     CALLOUT — glowing accent border + shimmer
     ============================================================ */
  .news-calendar-callout {
    position: relative;
    overflow: hidden;
    transition:
      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.5s ease;
  }
  .news-calendar-callout::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.12), transparent 45%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  .news-calendar-callout:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 60px rgba(27, 39, 62, 0.18);
  }
  .news-calendar-callout:hover::before {
    opacity: 1;
  }
  .news-calendar-callout .theme-button {
    transition:
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      background 0.3s ease,
      color 0.3s ease,
      box-shadow 0.3s ease;
  }
  .news-calendar-callout .theme-button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 26px rgba(31, 79, 163, 0.25);
  }
  .news-calendar-callout .theme-button svg {
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .news-calendar-callout .theme-button:hover svg {
    transform: translateX(4px);
  }

  /* ============================================================
     HEADING underlines (section heading)
     ============================================================ */
  .news-section-heading h2 {
    position: relative;
    display: inline-block;
    padding-bottom: 12px;
  }
  .news-section-heading h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 3px;
    background: var(--brand-primary, #c8102e);
    border-radius: 3px;
    transition: width 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .news-section-heading:hover h2::after {
    width: 120px;
  }

  /* ============================================================
     MOBILE
     ============================================================ */
  @media (max-width: 767.98px) {
    .news-reveal {
      transform: perspective(1200px) translateY(40px) rotateX(-8deg) scale(0.95);
    }
    .news-reveal.from-up {
      transform: perspective(1200px) translateY(-40px) rotateX(8deg) scale(0.95);
    }
    .news-card:hover {
      transform: translateY(-4px);
    }
    .news-card:hover .news-card-icon {
      transform: translateY(-2px) scale(1.08);
    }
    .news-card:hover::after {
      left: -120%;
    }
    .news-hero-decoration {
      animation: none;
    }
  }

  /* ============================================================
     REDUCED MOTION
     ============================================================ */
  @media (prefers-reduced-motion: reduce) {
    .news-reveal,
    .news-reveal.from-down,
    .news-reveal.from-up,
    .news-reveal.is-visible {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
    }
    .news-hero h1,
    .news-hero .theme-eyebrow,
    .news-hero-content > p,
    .news-hero-content .theme-button,
    .news-hero-decoration,
    .news-hero-decoration i,
    .news-card,
    .news-card::before,
    .news-card::after,
    .news-card-icon,
    .news-card h3,
    .news-card-label,
    .news-card-bottom a,
    .news-card-bottom a svg,
    .news-card-bottom > span svg,
    .news-calendar-callout,
    .news-calendar-callout::before,
    .news-calendar-callout .theme-button,
    .news-calendar-callout .theme-button svg,
    .news-section-heading h2::after,
    .news-card.featured {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const updates = [
  {
    label: "Every Sunday",
    title: "Gather for worship",
    text: "Join your local Mahima congregation for praise, worship, and a message rooted in God’s Word. Service times vary by campus.",
    detail: "Multiple campuses",
    icon: Music2,
    action: "View service times",
    to: "/locations",
    featured: true,
  },
  {
    label: "Every Friday",
    title: "Healing prayer gatherings",
    text: "Some Mahima campuses host Friday healing prayer services. Check with your local team for the time at your location.",
    detail: "Selected campuses",
    icon: HeartHandshake,
    action: "Find a campus",
    to: "/locations",
  },
  {
    label: "December 25, 2026",
    title: "Christmas",
    text: "Celebrate the birth of Jesus with the Mahima family. Check back here or contact your campus for local service details.",
    detail: "Upcoming observance",
    icon: CalendarDays,
    action: "Contact a campus",
    to: "/contact",
  },
];

function News() {
  return (
    <>
      <style>{newsAnimations}</style>
      <main className="news-page">
        <header className="site-page-heading site-page-heading--compact">
          <h1 className="site-page-title">News, gatherings &amp; ways to connect.</h1>
          <p className="site-page-subtitle">Life at Mahima Church</p>
        </header>

        <section className="news-content">
          <RevealOnScroll className="news-section-heading">
            <span className="theme-eyebrow">Keep in the know</span>
            <h2>Updates for our church family</h2>
            <p>Regular ministry gatherings and upcoming observances to help you plan your next visit.</p>
          </RevealOnScroll>

          <div className="news-card-grid">
            {updates.map(({ label, title, text, detail, icon: Icon, action, to, featured }, index) => (
              <RevealOnScroll key={title} delay={index * 0.1}>
                <article className={`news-card${featured ? " featured" : ""}`}>
                  <div className="news-card-topline">
                    <span className="news-card-icon"><Icon size={22} aria-hidden="true" /></span>
                    <span className="news-card-label">{label}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="news-card-bottom">
                    <span><Clock3 size={15} aria-hidden="true" /> {detail}</span>
                    <Link to={to}>{action} <ArrowRight size={15} aria-hidden="true" /></Link>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="news-calendar-callout">
            <div>
              <span className="theme-eyebrow">Plan ahead</span>
              <h2>Looking for a specific event?</h2>
              <p>Visit the events calendar for church gatherings and anniversary dates.</p>
            </div>
            <Link to="/events" className="theme-button theme-button-light">
              Open events calendar <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </RevealOnScroll>
        </section>
      </main>
    </>
  );
}

export default News;