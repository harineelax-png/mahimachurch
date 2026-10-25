import React, { useRef, useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";

import imag1 from "./../../images/image5.jpg";
import imag2 from "./../../images/image6.jpg";
import imag3 from "./../../images/Thuchurch1.JPG";
import imag4 from "./../../images/manChurch1.jpg";
import imag5 from "./../../images/image16.jpg";

// Helper to format the date into Day, Month, and a readable string
const parseDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
  const monthLong = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const daySuffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return {
    day,
    month,
    fullString: `${monthLong} ${day}${daySuffix(day)}, ${year}`,
  };
};

// Helper to extract time from the description (e.g. "6pm – 8pm")
const extractTime = (desc) => {
  if (!desc) return "";
  const match = desc.match(/(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM))\s*[–-]\s*(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM))/i);
  if (match) {
    return ` · ${match[1]} to ${match[2]}`;
  }
  return "";
};

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
      className={`event-reveal ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const eventStyles = `
  .custom-events-container {
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Poppins", "Segoe UI", sans-serif;
  }
  
  .custom-events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 30px;
    text-align: left;
  }

  /* ============================================================
     REVEAL ANIMATION (Direction-aware 3D flip + blur)
     ============================================================ */
  .event-reveal {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
    height: 100%;
  }
  .event-reveal.from-down {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
  }
  .event-reveal.from-up {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(-60px) rotateX(15deg) scale(0.92);
  }
  .event-reveal.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  /* ============================================================
     CARD SHELL & PREMIUM HOVER
     ============================================================ */
  .custom-event-card {
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(27, 39, 62, 0.08);
    border: 1px solid var(--brand-border, #e6e9ee);
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  }

  /* Top accent bar sweep */
  .custom-event-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--brand-primary, #c8102e);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 3;
  }

  .custom-event-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 50px rgba(27, 39, 62, 0.15);
  }

  .custom-event-card:hover::before {
    transform: scaleX(1);
  }

  /* ============================================================
     IMAGE & BADGE
     ============================================================ */
  .event-image-wrapper {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    background: #f1f5f9;
  }

  .event-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .custom-event-card:hover .event-image-wrapper img {
    transform: scale(1.06);
  }

  /* Date Badge */
  .event-date-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: #ffffff;
    border-radius: 10px;
    padding: 10px 16px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    z-index: 2;
  }

  .custom-event-card:hover .event-date-badge {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .event-date-badge .day {
    font-size: 1.7rem;
    font-weight: 800;
    color: var(--brand-ink, #1e2433);
    line-height: 1;
  }

  .event-date-badge .month {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--brand-primary, #c8102e);
    letter-spacing: 1px;
    margin-top: 3px;
  }

  /* ============================================================
     CARD CONTENT
     ============================================================ */
  .event-card-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .event-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--brand-muted, #64748b);
    margin-bottom: 14px;
    font-weight: 500;
  }

  .event-meta svg {
    color: var(--brand-primary, #c8102e);
    flex-shrink: 0;
  }

  .event-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--brand-ink, #1e2433);
    margin: 0 0 12px 0;
    line-height: 1.35;
    transition: color 0.3s ease;
  }

  .custom-event-card:hover .event-title {
    color: var(--brand-primary, #c8102e);
  }

  .event-description {
    font-size: 0.95rem;
    color: var(--brand-muted, #64748b);
    line-height: 1.65;
    margin: 0;
    flex-grow: 1;
  }

  /* ============================================================
     RESPONSIVE & REDUCED MOTION
     ============================================================ */
  @media (max-width: 768px) {
    .custom-events-grid {
      grid-template-columns: 1fr;
    }
    .event-image-wrapper {
      height: 200px;
    }
    .event-reveal {
      transform: perspective(1200px) translateY(40px) rotateX(-8deg) scale(0.95);
    }
    .event-reveal.from-up {
      transform: perspective(1200px) translateY(-40px) rotateX(8deg) scale(0.95);
    }
    .custom-event-card:hover {
      transform: translateY(-4px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .event-reveal,
    .event-reveal.from-down,
    .event-reveal.from-up,
    .event-reveal.is-visible {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
    }
    .custom-event-card:hover,
    .custom-event-card:hover .event-image-wrapper img,
    .custom-event-card:hover .event-date-badge {
      transform: none !important;
    }
  }
`;

function COMEvents() {
  const events2026 = [
    // Fixed Christian Events
    { title: "Good Friday", date: "2026-04-03", imageUrl: imag1 },
    { title: "Easter", date: "2026-04-05", imageUrl: imag2 },
    { title: "Christmas", date: "2026-12-25", imageUrl: imag3 },

    // Church Anniversaries
    {
      title: "Church Anniversary - Prasadampadu",
      start: "2026-03-29",
      end: "2026-04-04",
      description: "Celebrating 34th year of Prasadampadu Church Anniversary from March 29th to April 4th, 6pm – 8pm.",
      imageUrl: imag1,
      locationUrl: "https://www.google.com/maps/search/Mahima Rock Church,6-134, BMPS Rd, SER Center, Prasadampadu, currency nagar, Vijayawada, Andhra Pradesh 521108",
    },
    {
      title: "Church Anniversary - Currency Nagar",
      date: "2026-10-02",
      description: "Celebrating 38th year of Currency Nagar Church Anniversary, 10am – 12pm.",
      imageUrl: imag2,
      locationUrl: "https://www.google.com/maps/search/Mahima Church,GMCG+CWC, currency nagar, Vijayawada, Andhra Pradesh 520008",
    },
    {
      title: "Church Anniversary - Thullur",
      start: "2026-04-25",
      end: "2026-05-02",
      description: "Celebrating 28th year of Thullur Church Anniversary, 6pm – 8pm.",
      imageUrl: imag3,
      locationUrl: "https://www.google.com/maps/search/Mahima Church,GFH9+74W, Thullur, Amaravati, Andhra Pradesh 522237",
    },
    {
      title: "Church Anniversary - Mandhadam",
      start: "2026-09-01",
      end: "2026-09-07",
      description: "Celebrating 8th year of Mandhadam Church Anniversary, 6pm – 8pm.",
      imageUrl: imag4,
      locationUrl: "https://www.google.com/maps/search/Mahima Church,GG9C+7R7, Mandadam, Amaravati, Andhra Pradesh 522241",
    },
    {
      title: "Church Anniversary - Kondapur, Hyderabad",
      start: "2026-09-22",
      end: "2026-09-28",
      description: "Celebrating 3th year of Kondapur Church Anniversary, 6pm – 8pm.",
      imageUrl: imag5,
      locationUrl: "https://www.google.com/maps/search/Mahima Prayer Tower,F9F7+4MX, RTO Kondapur Rd, Kondapur, New Hafeezpet, Bikshapathi Nagar, Hyderabad, Telangana 500084",
    },

    // Family Blessings
    {
      title: "3 Days Family Blessings Prayers",
      start: "2026-01-14",
      end: "2026-01-17",
      description: "Family Blessing Prayers 6pm – 8pm at Prasadampadu.",
      imageUrl: imag1,
      locationUrl: "https://maps.google.com/?q=Prasadampadu+Church",
    },

    // All Night Prayer
    { title: "All Night Prayer", date: "2026-01-18", imageUrl: imag4 },
    { title: "All Night Prayer", date: "2026-02-17", imageUrl: imag5 },
    { title: "All Night Prayer", date: "2026-03-18", imageUrl: imag1 },
  ];

  return (
    <>
      <style>{eventStyles}</style>
      <div style={{ backgroundColor: "#f8eee6", minHeight: "100vh", padding: "60px 20px", textAlign: "center" }}>
        
        <RevealOnScroll>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "400",
              fontFamily: "Georgia, serif",
              marginBottom: "30px",
              marginTop: "0",
              color: "var(--brand-ink, #1e2433)"
            }}
          >
            Events
          </h1>
        </RevealOnScroll>

        <div className="custom-events-container" style={{ paddingTop: "20px" }}>
          <div className="custom-events-grid">
            {events2026.map((event, index) => {
              const eventDateStr = event.start || event.date;
              const { day, month, fullString } = parseDate(eventDateStr);
              const timeString = extractTime(event.description);

              // Using a fallback image just in case one is missing
              const displayImage = event.imageUrl || imag1;

              return (
                <RevealOnScroll key={index} delay={(index % 3) * 0.1}>
                  <div className="custom-event-card">
                    <div className="event-image-wrapper">
                      <img src={displayImage} alt={event.title} />
                      
                      {/* White Date Badge */}
                      <div className="event-date-badge">
                        <span className="day">{day}</span>
                        <span className="month">{month}</span>
                      </div>
                    </div>

                    <div className="event-card-content">
                      <div className="event-meta">
                        <CalendarDays size={16} />
                        <span>{fullString}{timeString}</span>
                      </div>

                      <h3 className="event-title">{event.title}</h3>
                      
                      {event.description && (
                        <p className="event-description">{event.description}</p>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default COMEvents;