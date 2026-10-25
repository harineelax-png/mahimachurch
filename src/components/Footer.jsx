import React from "react";
import { MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/logo4.png";
import ScrollReveal from "./ScrollReveal";

const footerLinks = [
  { label: "Our story", to: "/about/our-story" },
  { label: "Leadership", to: "/about/leadership" },
  { label: "Mission", to: "/about/mission" },
  { label: "Locations", to: "/locations" },
  { label: "Prayer request", to: "/prayer" },
  // { label: "News & updates", to: "/news" },
  // { label: "Contact", to: "/contact" },
  // { label: "Watch online", to: "/watch-online" },
];

// 🔧 Replace these URLs with your actual social profiles
const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "Facebook",  href: "https://facebook.com/",  Icon: Facebook  },
  { label: "YouTube",   href: "https://youtube.com/",   Icon: Youtube   },
];

function Footer() {
  return (
    <footer className="site-footer">
      <ScrollReveal className="site-footer-inner">
        <div className="site-footer-brand">
          <Link to="/" className="site-footer-logo">
            <img src={logo} alt="Mahima Church" />
            <span>
              <strong>Mahima Church</strong>
              <small>Faith · Hope · Love</small>
            </span>
          </Link>
          <p>Sharing the love of Christ with the whole world.</p>

          <div className="site-footer-socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-social"
                aria-label={label}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer-links">
          <h2>Explore</h2>
          {footerLinks.map(({ label, to }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </div>

        <div className="site-footer-welcome">
          <span className="theme-eyebrow">You are welcome here</span>
          <h2>Find a church family near you.</h2>
          <Link to="/locations" className="theme-button">
            <MapPin size={17} aria-hidden="true" /> Explore locations
          </Link>
        </div>
      </ScrollReveal>

      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} Mahima Church. All rights reserved.</span>
        <Link to="/">Made for the Mahima Church</Link>
      </div>
    </footer>
  );
}

export default Footer;