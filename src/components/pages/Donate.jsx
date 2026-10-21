import React from "react";
import givingImage from "../../images/image9.jpg";
import givingQrCode from "../../images/qrcode.jpg";
import ScrollReveal from "../ScrollReveal";

function Donate() {
  return (
    <main className="donate-page">
      <section
        className="donate-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(31, 79, 163, 0.72), rgba(158, 11, 34, 0.35)), url(${givingImage})`,
        }}
      >
        <ScrollReveal className="donate-hero-content">
          <span className="theme-eyebrow">Give with a joyful heart</span>
          <h1>GIFT</h1>
          <p>“God loves a cheerful giver”</p>
          <h3>2 Corinthians 9:7</h3>
        </ScrollReveal>
      </section>

      <ScrollReveal className="donate-message">
        <span className="theme-eyebrow">Generosity in action</span>
        <h2>Why we give</h2>
        <p>
          Your generous giving helps us in continuing to spread the message of hope &amp;
          love and in bringing about transformation in our community.
        </p>
      </ScrollReveal>

      <ScrollReveal className="donate-code-section">
        <div className="donate-code-card">
          <span className="theme-eyebrow">Give securely</span>
          <h2>Scan to give</h2>
          <p>Use your phone’s camera or payment app to scan the code.</p>
          <img
            className="donate-giving-image"
            src={givingQrCode}
            alt="Scan this QR code to give to Mahima Church"
          />
        </div>
      </ScrollReveal>
    </main>
  );
}

export default Donate;
