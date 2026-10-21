import React from "react";
import { ArrowRight, BookOpen, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import pastorDevaraju from "../../images/image27.jpg";
import pastorVinay from "../../images/vinay.jpg";
import pastorGurvaya from "../../images/gurvaya1.jpg";

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
  return (
    <main className="leadership-page">
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

      <section className="leadership-values">
        <div className="leadership-section-heading">
          <span className="theme-eyebrow">Our shared commitment</span>
          <h2>How we lead and serve</h2>
          <p>Leadership at Mahima Church is a shared calling to care for people and point them to Christ.</p>
        </div>
        <div className="leadership-value-grid">
          {leadershipValues.map(({ icon: Icon, title, description }) => (
            <article className="leadership-value-card" key={title}>
              <span className="leadership-value-icon"><Icon size={23} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership-team">
        <div className="leadership-section-heading">
          <span className="theme-eyebrow">Kanchikacherla campus</span>
          <h2>Serving our church family</h2>
          <p>Meet the campus ministry team serving the Kanchikacherla congregation.</p>
        </div>
        <div className="leadership-team-grid">
          {campusLeaders.map(({ name, image }) => (
            <article className="leadership-person-card" key={name}>
              <div className="leadership-person-image">
                <img src={image} alt={name} loading="lazy" />
              </div>
              <div className="leadership-person-details">
                <span><MapPin size={14} aria-hidden="true" /> Kanchikacherla</span>
                <h3>{name}</h3>
                <p>Campus ministry team</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership-cta">
        <div>
          <span className="theme-eyebrow">Find your place in the family</span>
          <h2>There is a Mahima Church community for you.</h2>
        </div>
        <Link className="theme-button theme-button-light" to="/locations">
          Explore locations <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

export default Leadership;
