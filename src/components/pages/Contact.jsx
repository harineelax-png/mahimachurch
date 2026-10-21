import React from "react";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

const campuses = [
  {
    name: "Prasadamapdu",
    church: "Mahima Prayer Tower – Prasadamapdu",
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
    <main className="contact-page">
      <section className="contact-hero">
        <ScrollReveal className="contact-hero-content">
          <span className="theme-eyebrow">We’d love to hear from you</span>
          <h1>Let’s get connected.</h1>
          <p>Questions about visiting, service times, or finding a church family? Reach out to a campus team.</p>
          <a className="theme-button" href="#campus-contacts">
            Find a contact <ArrowRight size={17} aria-hidden="true" />
          </a>
        </ScrollReveal>
        <span className="contact-hero-mark" aria-hidden="true"><Phone size={154} /></span>
      </section>

      <section className="contact-content" id="campus-contacts">
        <ScrollReveal className="news-section-heading">
          <span className="theme-eyebrow">Local church family</span>
          <h2>Contact your nearest campus</h2>
          <p>Call a campus contact for local information and service details.</p>
        </ScrollReveal>

        <div className="contact-campus-grid">
          {campuses.map((campus, index) => (
            <ScrollReveal key={campus.name} delay={(index % 3) * 0.07}>
              <article className="contact-campus-card">
                <span className="contact-campus-icon"><MapPin size={19} aria-hidden="true" /></span>
                <span className="contact-campus-name">{campus.name}</span>
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
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal className="contact-prayer-callout">
        <div>
          <span className="theme-eyebrow">Need prayer?</span>
          <h2>Our prayer team would be glad to pray with you.</h2>
        </div>
        <Link to="/prayer" className="theme-button theme-button-light">
          Send a prayer request <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </ScrollReveal>
    </main>
  );
}

export default Contact;
