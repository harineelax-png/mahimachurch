import React, { useRef, useState, useEffect } from "react";
import givingQrCode from "../../images/qrcode1.png";
import { 
  User, 
  CreditCard, 
  Hash, 
  Building2, 
  MapPin, 
  Smartphone, 
  CheckCircle2, 
  Heart,
  BookOpen,
  Users
} from "lucide-react";

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
      className={`donate-reveal ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const donateAnimations = `
  /* ============================================================
     REVEAL — Direction-aware 3D flip + blur
     ============================================================ */
  .donate-reveal {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  .donate-reveal.from-down {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
  }
  .donate-reveal.from-up {
    opacity: 0;
    filter: blur(12px);
    transform: perspective(1200px) translateY(-60px) rotateX(15deg) scale(0.92);
  }
  .donate-reveal.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  /* ============================================================
     PREMIUM HERO HEADING ANIMATION
     ============================================================ */
  .donate-hero h1 {
    animation: donateTitleIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes donateTitleIn {
    0% { opacity: 0; transform: translateY(30px); letter-spacing: 20px; filter: blur(8px); }
    100% { opacity: 1; transform: translateY(0); letter-spacing: 0.04em; filter: blur(0); }
  }

  /* ============================================================
     SPLIT LAYOUT (No Card Layout)
     ============================================================ */
  .donate-code-section {
    padding: 60px 24px 100px;
    background: transparent;
  }

  .donate-split-layout {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: clamp(40px, 6vw, 80px);
    max-width: 1100px;
    margin: 0 auto;
    align-items: flex-start;
    background: transparent;
  }

  /* LEFT SIDE: Details & Steps */
  .donate-details-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
  }

  .donate-details-side h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    color: var(--brand-ink, #1e2433);
    margin: 0 0 24px;
  }

  /* Bank Details */
  .bank-details-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    background: var(--brand-soft, #fdf1f5);
    border-radius: 12px;
    border-left: 4px solid var(--brand-primary, #c8102e);
    margin-bottom: 32px;
  }

  .bank-detail-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .bank-icon {
    color: var(--brand-primary, #c8102e);
    margin-top: 4px;
    flex-shrink: 0;
  }

  .bank-detail-text {
    display: flex;
    flex-direction: column;
  }

  .bank-detail-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--brand-muted, #5b6475);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 2px;
  }

  .bank-detail-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--brand-ink, #1e2433);
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.02em;
  }

  /* How to give steps */
  .donate-steps {
    margin-bottom: 32px;
  }

  .donate-steps h3 {
    font-size: 1.25rem;
    color: var(--brand-blue, #1f4fa3);
    margin-bottom: 16px;
    font-weight: 700;
  }

  .steps-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .steps-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 1rem;
    color: var(--brand-muted, #5b6475);
    line-height: 1.5;
  }

  .steps-list svg {
    color: var(--brand-green, #4caf3a);
    flex-shrink: 0;
    margin-top: 3px;
  }

  /* What your gift supports */
  .donate-supports {
    border-top: 1px solid var(--brand-border, #e6e9ee);
    padding-top: 24px;
  }

  .donate-supports h3 {
    font-size: 1.25rem;
    color: var(--brand-blue, #1f4fa3);
    margin-bottom: 16px;
    font-weight: 700;
  }

  .supports-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .support-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .support-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: var(--brand-soft, #fdf1f5);
    border-radius: 50%;
    color: var(--brand-primary, #c8102e);
    flex-shrink: 0;
  }

  .support-item p {
    margin: 0;
    font-size: 1rem;
    color: var(--brand-muted, #5b6475);
    line-height: 1.5;
  }

  .support-item strong {
    color: var(--brand-ink, #1e2433);
    display: block;
    margin-bottom: 2px;
  }

  /* RIGHT SIDE: QR Code */
  .donate-qr-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px;
    background: radial-gradient(circle at center, var(--brand-soft, #fdf1f5) 0%, transparent 70%);
    border-radius: 24px;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .donate-qr-side:hover {
    transform: translateY(-6px);
  }

  .donate-qr-side h3 {
    font-size: 1.25rem;
    color: var(--brand-ink, #1e2433);
    margin-bottom: 8px;
    font-weight: 700;
  }

  .donate-qr-side p {
    font-size: 0.9rem;
    color: var(--brand-muted, #5b6475);
    text-align: center;
    margin-bottom: 20px;
  }

  .qr-image-wrapper {
    padding: 16px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(27, 39, 62, 0.08);
    border: 1px dashed var(--brand-border, #e6e9ee);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .donate-qr-side:hover .qr-image-wrapper {
    border-color: var(--brand-primary, #c8102e);
    box-shadow: 0 15px 40px rgba(200, 16, 46, 0.15);
  }

  .donate-giving-image {
    width: 100%;
    max-width: 280px;
    height: auto;
    display: block;
    object-fit: contain;
  }

  .scan-apps {
    display: flex;
    gap: 10px;
    margin-top: 16px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--brand-muted, #5b6475);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* ============================================================
     MOBILE RESPONSIVE
     ============================================================ */
  @media (max-width: 768px) {
    .donate-split-layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .donate-details-side {
      text-align: center;
      align-items: center;
    }

    .bank-details-list {
      text-align: left;
      width: 100%;
      max-width: 400px;
      margin: 0 auto 32px;
    }

    .donate-steps {
      width: 100%;
      max-width: 400px;
      margin: 0 auto 32px;
    }

    .steps-list li {
      justify-content: flex-start;
      text-align: left;
    }

    .donate-supports {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }

    .support-item {
      text-align: left;
    }

    .donate-qr-side {
      padding: 20px 10px;
    }

    .donate-reveal {
      transform: perspective(1200px) translateY(40px) rotateX(-8deg) scale(0.95);
    }
    .donate-reveal.from-up {
      transform: perspective(1200px) translateY(-40px) rotateX(8deg) scale(0.95);
    }
  }

  /* ============================================================
     REDUCED MOTION
     ============================================================ */
  @media (prefers-reduced-motion: reduce) {
    .donate-reveal,
    .donate-reveal.from-down,
    .donate-reveal.from-up,
    .donate-reveal.is-visible {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
    }
    .donate-hero h1 { animation: none !important; }
    .donate-qr-side:hover, .donate-qr-side:hover .qr-image-wrapper { transform: none !important; box-shadow: none !important; }
  }
`;

function Donate() {
  return (
    <>
      <style>{donateAnimations}</style>
      <main className="donate-page">
        <header className="site-page-heading site-page-heading--compact">
          <h1 className="site-page-title">GIFT</h1>
          <p className="site-page-subtitle">Give with a joyful heart</p>
          <blockquote className="site-page-quote">
            “God loves a cheerful giver”
            <cite>2 Corinthians 9:7</cite>
          </blockquote>
        </header>

        {/* ================= MESSAGE SECTION (Original Preserved) ================= */}
        <RevealOnScroll className="donate-message">
          <span className="theme-eyebrow">Generosity in action</span>
          <h2>Why we give</h2>
          <p>
            Your generous giving helps us in continuing to spread the message of hope &amp;
            love and in bringing about transformation in our community.
          </p>
        </RevealOnScroll>

        {/* ================= SPLIT LAYOUT (Left Details, Right QR) ================= */}
        <RevealOnScroll className="donate-code-section">
          <div className="donate-split-layout">
            
            {/* LEFT: Account Details & Added Content */}
            <div className="donate-details-side">
              <h2>Account Details</h2>
              
              <div className="bank-details-list">
                <div className="bank-detail-row">
                  <User className="bank-icon" size={20} />
                  <div className="bank-detail-text">
                    <span className="bank-detail-label">A/C Name</span>
                    <span className="bank-detail-value">MAHIMA FOUNDATION</span>
                  </div>
                </div>
                <div className="bank-detail-row">
                  <CreditCard className="bank-icon" size={20} />
                  <div className="bank-detail-text">
                    <span className="bank-detail-label">A/C Number</span>
                    <span className="bank-detail-value">50200071534637</span>
                  </div>
                </div>
                <div className="bank-detail-row">
                  <Hash className="bank-icon" size={20} />
                  <div className="bank-detail-text">
                    <span className="bank-detail-label">IFSC Code</span>
                    <span className="bank-detail-value">HDFC0003975</span>
                  </div>
                </div>
                <div className="bank-detail-row">
                  <MapPin className="bank-icon" size={20} />
                  <div className="bank-detail-text">
                    <span className="bank-detail-label">Branch</span>
                    <span className="bank-detail-value">ENIKEPADU</span>
                  </div>
                </div>
                <div className="bank-detail-row">
                  <Building2 className="bank-icon" size={20} />
                  <div className="bank-detail-text">
                    <span className="bank-detail-label">Beneficiary Bank</span>
                    <span className="bank-detail-value">HDFC</span>
                  </div>
                </div>
              </div>

              {/* How to give steps */}
              <div className="donate-steps">
                <h3>How to give via Bank Transfer</h3>
                <ul className="steps-list">
                  <li>
                    <CheckCircle2 size={18} />
                    <span>Open your banking app or visit your bank branch.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} />
                    <span>Select <strong>NEFT</strong> or <strong>IMPS</strong> transfer.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} />
                    <span>Enter the account details provided above.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} />
                    <span>Enter the amount and complete the transfer securely.</span>
                  </li>
                </ul>
              </div>

              {/* What your gift supports */}
              <div className="donate-supports">
                <h3>What your gift supports</h3>
                <div className="supports-grid">
                  <div className="support-item">
                    <div className="support-icon"><BookOpen size={18} /></div>
                    <p>
                      <strong>Spreading the Gospel</strong>
                      Helping us share the message of hope and love in our community.
                    </p>
                  </div>
                  <div className="support-item">
                    <div className="support-icon"><Users size={18} /></div>
                    <p>
                      <strong>Community Outreach</strong>
                      Supporting local programs that bring positive transformation.
                    </p>
                  </div>
                  <div className="support-item">
                    <div className="support-icon"><Heart size={18} /></div>
                    <p>
                      <strong>Ministries & Operations</strong>
                      Keeping our church doors open and our ministries active.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: QR Code */}
            <div className="donate-qr-side">
              <h3>Scan to give via UPI</h3>
              <p>Open any UPI app and scan the code below to give instantly.</p>
              
              <div className="qr-image-wrapper">
                <img
                  className="donate-giving-image"
                  src={givingQrCode}
                  alt="Scan this QR code to give to Mahima Church"
                />
              </div>
              
              <div className="scan-apps">
                <Smartphone size={16} style={{ marginTop: '-2px' }} />
                <span>GPay • PhonePe • Paytm</span>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </main>
    </>
  );
}

export default Donate;