import React from "react";
import { ArrowRight, BookOpen, Clock3, Heart, MapPin, Music2, Phone, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../../images/image21.jpg";
import img2 from "../../images/music1.jpg";
import ScrollReveal from "../ScrollReveal";

const campuses = [
  {
    name: "Prasadamapdu",
    church: "Mahima Prayer Tower – Prasadamapdu",
    services: ["Every Sunday Praise & Worship Service · 8:30 AM to 10:30 AM", "Every Friday Healing Prayers · 5 PM to 7 PM"],
    contacts: ["Bro. Devaraju · +91 87123 90777", "Sis. Deboramma · +91 91605 01681"],
  },
  {
    name: "Currency Nagar",
    church: "Mahima Prarthana Mandiram – Currency Nagar / Ramavarappadu",
    services: ["Every Sunday Praise & Worship Service · 10:30 AM to 12:30 PM"],
    contacts: ["Pastor Bose · +91 70362 57777", "Sis. Sumadhuramma · +91 97016 96395"],
  },
  {
    name: "Kondapur",
    church: "Mahima Prayer Tower – Kondapur, Hyderabad",
    services: ["Every Sunday Praise & Worship Service · 10 AM to 12 PM", "Every Friday Healing Prayers · 6 PM to 8 PM"],
    contacts: ["Sis. Jyothamma · +91 88867 38515", "Bro. Rajesh · +91 99895 02004"],
  },
  {
    name: "Mandhadum",
    church: "Mahima Prayer Tower – Mandhadum",
    services: ["Every Sunday Praise & Worship Service · 8:00 AM to 10:00 AM", "Every Friday Healing Prayers · 3 PM to 6 PM"],
    contacts: ["Bro. Niranjan · +91 95814 94946", "Pastor Peter · +91 91602 32392"],
  },
  {
    name: "Thulluru",
    church: "Mahima Prayer Tower – Thulluru",
    services: ["Every Sunday Praise & Worship Service · 10 AM to 12 PM", "Every Friday Healing Prayers · 6 PM to 9 PM"],
    contacts: ["Sis. Sailamma · +91 94916 66738", "Sis. Sulochanamma · +91 891-9830802"],
  },
  {
    name: "Kanchikacherla",
    church: "Mahima Prayer Tower – Kanchikacherla",
    services: ["Every Sunday Praise & Worship Service · 4 PM to 6 PM"],
    contacts: ["Bro. Devaraju · +91 87123 90777", "Bro. Cephas · +91 8309-509297"],
  },
  {
    name: "Dachepalli",
    church: "Mahima Prayer Tower – Dachepalli",
    services: ["Every Sunday Praise & Worship Service · 10 AM to 12 PM", "Every Friday Healing Prayers · 6 PM to 9 PM"],
    contacts: ["Pastor Yehoshuva · +91 97056 44966", "Bro. Niranjan · +91 95814 94946"],
  },
];

const visitSteps = [
  {
    icon: UsersRound,
    title: "Come as you are",
    text: "Whether this is your first visit or you are looking for a church family, you are welcome here.",
  },
  {
    icon: Music2,
    title: "Worship together",
    text: "Gather for worship, prayer, and Bible-centred teaching with the Mahima community.",
  },
  {
    icon: Heart,
    title: "Find your community",
    text: "Connect with a campus team and discover a place to grow, serve, and belong.",
  },
];

function Whattoexpect() {
  return (
    <main className="welcome-visit-page">
      <section className="visit-hero">
        <div className="visit-hero-image" style={{ backgroundImage: `url(${img1})` }} />
        <ScrollReveal className="visit-hero-content">
          <span className="theme-eyebrow">A place to belong</span>
          <h1>Welcome to Mahima Church.</h1>
          <p>We’re glad you’re here. Come as you are, worship with us, and find a community where you can grow.</p>
          <Link to="/locations" className="theme-button">
            Find a location <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </ScrollReveal>
        <div className="visit-hero-note">
          <Clock3 size={18} aria-hidden="true" />
          <span>Sunday worship across our campuses</span>
        </div>
      </section>

      <section className="visit-intro">
        <ScrollReveal className="visit-intro-copy">
          <span className="theme-eyebrow">Your first visit</span>
          <h2>Church is better when you feel at home.</h2>
          <p>
            Everyone—men and women, along with kids through young adults—can find a welcoming place to belong,
            grow, and contribute through our diverse ministries. We’d love to meet you and your family.
          </p>
          <Link className="visit-text-link" to="/contact">
            Ask us a question <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </ScrollReveal>
        <ScrollReveal className="visit-image-pair" delay={0.12}>
          <img src={img2} alt="Music and worship at Mahima Church" loading="lazy" />
          <div className="visit-image-caption">
            <BookOpen size={18} aria-hidden="true" />
            <span>Faith · Fellowship · Family</span>
          </div>
        </ScrollReveal>
      </section>

      <section className="visit-steps-section">
        <ScrollReveal className="visit-section-heading">
          <span className="theme-eyebrow">A simple first visit</span>
          <h2>Here’s what to expect</h2>
          <p>There’s no pressure—just a warm welcome and an opportunity to worship together.</p>
        </ScrollReveal>
        <div className="visit-step-grid">
          {visitSteps.map(({ icon: Icon, title, text }, index) => (
            <ScrollReveal key={title} delay={index * 0.1}>
              <article className="visit-step-card">
                <span className="visit-step-number">0{index + 1}</span>
                <span className="visit-step-icon"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="visit-campus-section">
        <ScrollReveal className="visit-section-heading">
          <span className="theme-eyebrow">Join us this week</span>
          <h2>Find your nearest campus</h2>
          <p>Service times and local contacts to help you plan your visit.</p>
        </ScrollReveal>
        <div className="visit-campus-grid">
          {campuses.map((campus, index) => (
            <ScrollReveal key={campus.name} delay={(index % 3) * 0.07}>
              <article className="visit-campus-card">
                <span className="visit-campus-marker"><MapPin size={17} aria-hidden="true" /></span>
                <span className="visit-campus-label">{campus.name}</span>
                <h3>{campus.church}</h3>
                <div className="visit-campus-times">
                  {campus.services.map((service) => (
                    <p key={service}><Clock3 size={15} aria-hidden="true" /> {service}</p>
                  ))}
                </div>
                <div className="visit-campus-contacts">
                  {campus.contacts.map((contact) => {
                    const phone = contact.match(/\+[\d -]+$/)?.[0].trim();
                    const name = phone
                      ? contact.slice(0, contact.lastIndexOf(phone)).replace(/[·–-]\s*$/, "").trim()
                      : contact;
                    const dialNumber = phone?.replace(/[ -]/g, "");

                    return phone ? (
                      <div className="visit-campus-contact" key={contact}>
                        <span className="visit-campus-contact-name">{name}</span>
                        <a
                          className="visit-campus-contact-number"
                          href={`tel:${dialNumber}`}
                          aria-label={`Call ${name} at ${phone}`}
                        >
                          <Phone size={14} aria-hidden="true" />
                          <span>{phone}</span>
                        </a>
                      </div>
                    ) : (
                      <div className="visit-campus-contact" key={contact}>
                        <span className="visit-campus-contact-name">{contact}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal className="visit-cta">
        <div>
          <span className="theme-eyebrow">We can’t wait to meet you</span>
          <h2>Have a question before you visit?</h2>
        </div>
        <Link to="/contact" className="theme-button theme-button-light">
          Get in touch <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </ScrollReveal>
    </main>
  );
}

export default Whattoexpect;
