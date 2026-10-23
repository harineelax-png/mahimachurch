import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.jpg";
import img4 from "../../images/image4.jpg";

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
      className={`about-reveal-item ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const aboutAnimations = `
  .about-reveal-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(70px) rotateX(-15deg) scale(0.9);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  .about-reveal-item.from-down {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(70px) rotateX(-15deg) scale(0.9);
  }
  .about-reveal-item.from-up {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(-70px) rotateX(15deg) scale(0.9);
  }
  .about-reveal-item.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .about-reveal-item {
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
      transition: none !important;
    }
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  padding: 60px 40px;
  background: ${({ theme }) => theme?.bg || "var(--brand-soft, #fdf1f5)"};
  color: ${({ theme }) => theme?.text_primary || "var(--brand-ink, #1e2433)"};
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--brand-blue, #1f4fa3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  letter-spacing: 0.5px;

  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background: var(--brand-primary, #c8102e);
    border-radius: 4px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  background: ${({ theme }) => theme?.card || "#ffffff"};
  padding: 20px;
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(27, 39, 62, 0.08);
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--brand-primary, #c8102e);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 3;
  }

  &:hover {
    box-shadow: 0 24px 50px rgba(27, 39, 62, 0.15);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.15));
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  ${ImageCard}:hover & img {
    transform: scale(1.08) rotate(0.5deg);
  }

  ${ImageCard}:hover &::after {
    opacity: 1;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.55;
  color: var(--brand-muted, #5b6475);
  flex: 1;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const InfoButton = styled.button`
  padding: 11px 20px;
  border-radius: 999px;
  border: 2px solid var(--brand-primary, #c8102e);
  background: transparent;
  color: var(--brand-primary, #c8102e);
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: background 0.3s ease, color 0.3s ease,
              transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.3s ease;

  &:hover {
    background: var(--brand-primary, #c8102e);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(200, 16, 46, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const About = () => {
  /* --- 3D mouse tilt (disabled on touch) --- */
  const handleMouseMove = (e) => {
    if (window.matchMedia("(max-width: 767.98px)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;
    card.style.transition = "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "";
  };

  return (
    <>
      <style>{aboutAnimations}</style>
      <AboutContainer className="about-page">
        <Title>About Us</Title>

        <Grid>
          {/* Card 1 */}
          <RevealOnScroll delay={0}>
            <ImageCard onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <ImageBox><img src={img1} alt="Church community" /></ImageBox>
              <Description>Our church is rooted in love and compassion, serving the community with grace.</Description>
              <ButtonGroup>
                <Link to="/about/our-story" style={{ textDecoration: 'none' }}>
                  <InfoButton>Our Story <ArrowRight size={16} /></InfoButton>
                </Link>
              </ButtonGroup>
            </ImageCard>
          </RevealOnScroll>

          {/* Card 2 */}
          <RevealOnScroll delay={0.1}>
            <ImageCard onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <ImageBox><img src={img2} alt="Church leadership" /></ImageBox>
              <Description>Leadership committed to guiding people toward spiritual growth and hope.</Description>
              <ButtonGroup>
                <Link to="/about/leadership" style={{ textDecoration: 'none' }}>
                  <InfoButton>Leadership <ArrowRight size={16} /></InfoButton>
                </Link>
              </ButtonGroup>
            </ImageCard>
          </RevealOnScroll>

          {/* Card 3 */}
          <RevealOnScroll delay={0.2}>
            <ImageCard onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <ImageBox><img src={img3} alt="Church mission" /></ImageBox>
              <Description>Our mission is to spread the gospel and uplift the community with faith.</Description>
              <ButtonGroup>
                <Link to="/about/mission" style={{ textDecoration: 'none' }}>
                  <InfoButton>Mission <ArrowRight size={16} /></InfoButton>
                </Link>
              </ButtonGroup>
            </ImageCard>
          </RevealOnScroll>

          {/* Card 4 */}
          <RevealOnScroll delay={0.3}>
            <ImageCard onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <ImageBox><img src={img4} alt="Church beliefs" /></ImageBox>
              <Description>Our beliefs are centered on the Word of God and living a Christ-led life.</Description>
              <ButtonGroup>
                <Link to="/about/beliefs" style={{ textDecoration: 'none' }}>
                  <InfoButton>Beliefs <ArrowRight size={16} /></InfoButton>
                </Link>
              </ButtonGroup>
            </ImageCard>
          </RevealOnScroll>
        </Grid>
      </AboutContainer>
    </>
  );
};

export default About;