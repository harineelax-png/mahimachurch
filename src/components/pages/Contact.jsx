import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
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
      className={`contact-reveal ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const contactAnimations = `
  /* ============================================================
     REVEAL — Direction-aware 3D flip + blur (re-triggers)
     ============================================================ */
  .contact-reveal {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  .contact-reveal.from-down {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
  }
  .contact-reveal.from-up {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(-60px) rotateX(15deg) scale(0.92);
  }
  .contact-reveal.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  /* ============================================================
     HEADER / ICON ALIGNMENT FIX
     ============================================================ */
  .contact-campus-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .contact-campus-header .contact-campus-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: var(--brand-soft, #fdf1f5);
    border-radius: 6px;
    color: var(--brand-primary, #c8102e);
    flex-shrink: 0;
  }

  .contact-campus-header .contact-campus-name {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--brand-primary, #c8102e);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 24px; /* Matches the icon height exactly */
    margin: 0;
  }

  /* ============================================================
     CARD HOVER POLISH
     ============================================================ */
  .contact-campus-card {
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.45s ease;
    background: #ffffff;
    border: 1px solid var(--brand-border, #e6e9ee);
  }

  .contact-campus-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 44px rgba(27, 39, 62, 0.12);
  }

  .contact-campus-people a {
    transition: color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
  }

  .contact-campus-people a:hover {
    transform: translateX(4px);
    background: var(--brand-soft, #fdf1f5);
    border-color: var(--brand-primary, #c8102e);
  }

  /* ============================================================
     MOBILE
     ============================================================ */
  @media (max-width: 768px) {
    .contact-reveal {
      transform: perspective(1200px) translateY(40px) rotateX(-8deg) scale(0.95);
    }
    .contact-reveal.from-up {
      transform: perspective(1200px) translateY(-40px) rotateX(8deg) scale(0.95);
    }
  }

  /* ============================================================
     REDUCED MOTION
     ============================================================ */
  @media (prefers-reduced-motion: reduce) {
    .contact-reveal,
    .contact-reveal.from-down,
    .contact-reveal.from-up,
    .contact-reveal.is-visible {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
    }
    .contact-campus-card:hover {
      transform: none !important;
    }
  }
`;

const campuses = [
  {
    name: "Prasadamapdu",
    church: "Mahima Prayer Tower",
    time: "Sunday · 8:30 AM – 10:30 AM",
    contacts: [
      { name: "Bro. Devaraju", phone: "+91 87123 90777" },
      { name: "Sis. Deboramma", phone: "+91 91605 01681" },
    ],
  },
  {
    name: "Currency Nagar / Ramavarappadu",
    church: "Mahima Prarthana Mandiram",
    time: "Sunday · 10:30 AM – 12:30 PM",
    contacts: [
      { name: "Pastor Bose", phone: "+91 70362 57777" },
      { name: "Sis. Sumadhuramma", phone: "+91 97016 96395" },
    ],
  },
  {
    name: "Thulluru",
    church: "Mahima Prayer Tower",
    time: "Sunday · 10 AM – 12 PM",
    contacts: [
      { name: "Sis. Sailamma", phone: "+91 94916 66738" },
      { name: "Sis. Sulochanamma", phone: "+91 89198 30802" },
    ],
  },
  {
    name: "Mandhadum",
    church: "Mahima Prayer Tower",
    time: "Sunday · 8 AM – 10 AM",
    contacts: [
      { name: "Bro. Niranjan", phone: "+91 95814 94946" },
      { name: "Pastor Peter", phone: "+91 91602 32392" },
    ],
  },
  {
    name: "Kondapur, Hyderabad",
    church: "Mahima Prayer Tower",
    time: "Sunday · 10 AM – 12 PM",
    contacts: [
      { name: "Sis. Jyothamma", phone: "+91 88867 38515" },
      { name: "Bro. Rajesh", phone: "+91 99895 02004" },
    ],
  },
  {
    name: "Dachepalli",
    church: "Mahima Prayer Tower",
    time: "Sunday · 10 AM – 12 PM",
    contacts: [
      { name: "Pastor Yehoshuva", phone: "+91 97056 44966" },
      { name: "Bro. Niranjan", phone: "+91 95814 94946" },
    ],
  },
  {
    name: "Kanchikacherla",
    church: "Mahima Prayer Tower",
    time: "Sunday · 4 PM – 6 PM",
    contacts: [
      { name: "Bro. Devaraju", phone: "+91 87123 90777" },
      { name: "Bro. Cephas", phone: "+91 83095 09297" },
    ],
  },
];

function Contact() {
  return (
    <>
      <style>{contactAnimations}</style>
      <main className="contact-page">
        <section className="contact-hero">
          <RevealOnScroll className="contact-hero-content">
            <span className="theme-eyebrow">We’d love to hear from you</span>
            <h1>Let’s get connected.</h1>
            <p>Questions about visiting, service times, or finding a church family? Reach out to a campus team.</p>
            <a className="theme-button" href="#campus-contacts">
              Find a contact <ArrowRight size={17} aria-hidden="true" />
            </a>
          </RevealOnScroll>
          <span className="contact-hero-mark" aria-hidden="true"><Phone size={154} /></span>
        </section>

        <section className="contact-content" id="campus-contacts">
          <RevealOnScroll className="news-section-heading">
            <span className="theme-eyebrow">Local church family</span>
            <h2>Contact your nearest campus</h2>
            <p>Call a campus contact for local information and service details.</p>
          </RevealOnScroll>

          <div className="contact-campus-grid">
            {campuses.map((campus, index) => (
              <RevealOnScroll key={campus.name} delay={(index % 3) * 0.07}>
                <article className="contact-campus-card">
                  {/* Added header wrapper to align icon and text perfectly */}
                  <div className="contact-campus-header">
                    <span className="contact-campus-icon">
                      <MapPin size={14} aria-hidden="true" />
                    </span>
                    <span className="contact-campus-name">{campus.name}</span>
                  </div>
                  
                  <h3>{campus.church}</h3>
                  <p className="contact-campus-time"><Clock3 size={15} aria-hidden="true" /> {campus.time}</p>
                  <div className="contact-campus-people">
                    {campus.contacts.map(({ name, phone }) => (
                      <a key={name} href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                        <span><strong>{name}</strong><small>{phone}</small></span>
                        <Phone size={16} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <RevealOnScroll className="contact-prayer-callout">
          <div>
            <span className="theme-eyebrow">Need prayer?</span>
            <h2>Our prayer team would be glad to pray with you.</h2>
          </div>
          <Link to="/prayer" className="theme-button theme-button-light">
            Send a prayer request <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </RevealOnScroll>
      </main>
    </>
  );
}

export default Contact;