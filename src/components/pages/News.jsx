import React from "react";
import { ArrowRight, CalendarDays, Clock3, HeartHandshake, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

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
    <main className="news-page">
      <section className="news-hero">
        <ScrollReveal className="news-hero-content">
          <span className="theme-eyebrow">Life at Mahima Church</span>
          <h1>News, gatherings &amp; ways to connect.</h1>
          <p>Stay connected with worship, prayer, and what’s happening across our church family.</p>
          <Link to="/events" className="theme-button">
            View the events calendar <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </ScrollReveal>
        <div className="news-hero-decoration" aria-hidden="true">
          <span>Faith</span><i>·</i><span>Hope</span><i>·</i><span>Love</span>
        </div>
      </section>

      <section className="news-content">
        <ScrollReveal className="news-section-heading">
          <span className="theme-eyebrow">Keep in the know</span>
          <h2>Updates for our church family</h2>
          <p>Regular ministry gatherings and upcoming observances to help you plan your next visit.</p>
        </ScrollReveal>

        <div className="news-card-grid">
          {updates.map(({ label, title, text, detail, icon: Icon, action, to, featured }, index) => (
            <ScrollReveal key={title} delay={index * 0.1}>
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
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="news-calendar-callout">
          <div>
            <span className="theme-eyebrow">Plan ahead</span>
            <h2>Looking for a specific event?</h2>
            <p>Visit the events calendar for church gatherings and anniversary dates.</p>
          </div>
          <Link to="/events" className="theme-button theme-button-light">
            Open events calendar <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}

export default News;
