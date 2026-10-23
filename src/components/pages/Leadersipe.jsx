import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, BookOpen, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import pastorDevaraju from "../../images/image27.jpg";
import pastorVinay from "../../images/vinay.jpg";
import pastorGurvaya from "../../images/gurvaya1.jpg";

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
      className={`lead-reveal-item ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const leadershipAnimations = `
  .lead-reveal-item {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  .lead-reveal-item.from-down {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
  }
  .lead-reveal-item.from-up {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(-60px) rotateX(15deg) scale(0.92);
  }
  .lead-reveal-item.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  /* Team card 3D tilt polish */
  .leadership-person-card {
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .lead-reveal-item {
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
      transition: none !important;
    }
  }
`;

const campusLeaders = [
  { name: "Bro. Devaraju", image: pastorDevaraju },
  { name: "Bro. Vinay", image: pastorVinay },
  { name: "Bro. Gurvaya", image: pastorGurvaya },
];

const leadershipValues = [
  {
    icon: BookOpen,
    title: "Rooted in the Word",
    description: "We value sound biblical teaching and help believers grow in faith and understanding.",
  },
  {
    icon: HeartHandshake,
    title: "Shaped by service",
    description: "We seek to lead with humility, care for people, and serve our church communities.",
  },
  {
    icon: Sparkles,
    title: "Committed to the mission",
    description: "We share the love of Christ and encourage each generation to take part in the work of the church.",
  },
];

function Leadership() {
  /* --- 3D mouse tilt for team cards (disabled on touch) --- */
  const handleCardMove = (e) => {
    if (window.matchMedia("(max-width: 767.98px)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -5;
    const rotateY = ((x - rect.width / 2) / rect.width) * 5;
    card.style.transition = "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "";
  };

  return (
    <>
      <style>{leadershipAnimations}</style>
      <main className="leadership-page">
        <RevealOnScroll delay={0}>
          <section className="leadership-hero">
            <div className="leadership-hero-inner">
              <span className="theme-eyebrow">Faithful in service · United in purpose</span>
              <h1>Leadership that serves with faith and love.</h1>
              <p>
                Mahima Church is built on a legacy of prayer, biblical teaching, and a heart to share the love of Christ.
              </p>
              <Link className="theme-button" to="/about/our-story">
                Discover our story <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="leadership-hero-mark" aria-hidden="true">✝</div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <section className="leadership-story">
            <div className="leadership-story-mark" aria-hidden="true">1988 <span>·</span> Faith <span>·</span> Service</div>
            <div>
              <span className="theme-eyebrow">A legacy of faith</span>
              <h2>One vision. A church family serving many.</h2>
              <p>
                In 1988, Potluri Ruth Ratnam garu responded to a vision to proclaim the love and saving gospel of Jesus Christ.
                What began with prayer gatherings and village-to-village evangelism grew into a church shaped by prayer,
                perseverance, and service.
              </p>
              <p>
                Today, pastors, leaders, and volunteers continue that work across Mahima Church communities, grounded in
                sound doctrine and servant leadership.
              </p>
              <Link className="leadership-text-link" to="/locations">
                Find a Mahima Church location <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </RevealOnScroll>

        <section className="leadership-values">
          <RevealOnScroll delay={0}>
            <div className="leadership-section-heading">
              <span className="theme-eyebrow">Our shared commitment</span>
              <h2>How we lead and serve</h2>
              <p>Leadership at Mahima Church is a shared calling to care for people and point them to Christ.</p>
            </div>
          </RevealOnScroll>
          <div className="leadership-value-grid">
            {leadershipValues.map(({ icon: Icon, title, description }, idx) => (
              <RevealOnScroll key={title} delay={idx * 0.12}>
                <article className="leadership-value-card">
                  <span className="leadership-value-icon"><Icon size={23} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="leadership-team">
          <RevealOnScroll delay={0}>
            <div className="leadership-section-heading">
              <span className="theme-eyebrow">Kanchikacherla campus</span>
              <h2>Serving our church family</h2>
              <p>Meet the campus ministry team serving the Kanchikacherla congregation.</p>
            </div>
          </RevealOnScroll>
          <div className="leadership-team-grid">
            {campusLeaders.map(({ name, image }, idx) => (
              <RevealOnScroll key={name} delay={idx * 0.12}>
                <article
                  className="leadership-person-card"
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="leadership-person-image">
                    <img src={image} alt={name} loading="lazy" />
                  </div>
                  <div className="leadership-person-details">
                    <span><MapPin size={14} aria-hidden="true" /> Kanchikacherla</span>
                    <h3>{name}</h3>
                    <p>Campus ministry team</p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <RevealOnScroll delay={0.1}>
          <section className="leadership-cta">
            <div>
              <span className="theme-eyebrow">Find your place in the family</span>
              <h2>There is a Mahima Church community for you.</h2>
            </div>
            <Link className="theme-button theme-button-light" to="/locations">
              Explore locations <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </section>
        </RevealOnScroll>
      </main>
    </>
  );
}

export default Leadership;