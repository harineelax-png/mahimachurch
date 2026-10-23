// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import img1 from "../../images/image1.jpg";
// import img2 from "../../images/image2.jpg";
// import img3 from "../../images/image3.jpg";
// import img4 from "../../images/image4.jpg";

// const images = [img1, img2, img3, img4];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // const heroStyle = {
//   //   width: "100%",
//   //   minHeight: "85vh",
//   //   backgroundImage: `url(${images[index]})`,
//   //   backgroundSize: "cover",
//   //   backgroundPosition: "center",
//   //   transition: "background-image 1s ease-in-out",
//   //   display: "flex",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   //   padding: "40px",
//   //   color: "#fff"
//   // };
//   const heroStyle = {
//     width: "100%",
//     minHeight: "85vh",
//     marginTop: "1px", // <-- ADD THIS: Adjust this value to match your navbar's exact height
//     backgroundImage: `linear-gradient(115deg, rgba(31, 79, 163, 0.78), rgba(158, 11, 34, 0.38)), url(${images[index]})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     transition: "background-image 1s ease-in-out",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "40px",
//     color: "#ffffff"
//   };

//   const titleStyle = {
//     fontSize: "clamp(28px, 6vw, 48px)",
//     fontWeight: 800,
//     margin: 0,
//     textShadow: "2px 2px 20px rgba(0,0,0,0.8)"
//   };

//   const subtitleStyle = {
//     fontSize: "clamp(18px, 3vw, 28px)",
//     fontWeight: 500,
//     marginTop: "0.5rem",
//     textShadow: "2px 2px 20px rgba(0,0,0,0.8)"
//   };

//   const btnStyle = {
//     marginTop: "20px",
//     padding: "12px 28px",
//     fontSize: "1rem",
//     fontWeight: 600,
//     borderRadius: "30px",
//     border: "none"
//   };

//   return (
//     <header className="home-hero" style={heroStyle}>
//       <div className="text-center">
//         <h1 style={titleStyle}>Mahima Church</h1>
//         <h2 style={subtitleStyle}>
//           living by faith • known by love • a voice of hope
//         </h2>

//         {/* PLAN YOUR VISIT BUTTON */}
//         {/* <Link
//           to="/what-to-expect"
//           className="btn btn-primary rounded-pill"
//           style={btnStyle}
//         >
//           PLAN YOUR VISIT
//         </Link> */}
//       </div>
//     </header>
//   );
// };

// export default Hero;



import React, { useState, useEffect, useRef } from "react";

import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.jpg";
import img4 from "../../images/image4.jpg";

const images = [img1, img2, img3, img4];

const heroAnimations = `
  @keyframes heroTextIn {
    0%   { opacity: 0; transform: translateY(45px) scale(0.96); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }
  @keyframes heroLineGrow {
    0%   { transform: scaleX(0); opacity: 0; }
    100% { transform: scaleX(1); opacity: 1; }
  }
  @keyframes heroGlowPulse {
    0%, 100% { opacity: 0.35; }
    50%      { opacity: 0.7; }
  }
  @keyframes heroBgPan {
    0%   { background-position: center 42%; }
    100% { background-position: center 58%; }
  }
  @keyframes heroScrollFadeIn {
    to { opacity: 1; }
  }
  @keyframes heroScrollBounce {
    0%, 100% { transform: translate(-50%, 0); }
    50%      { transform: translate(-50%, 10px); }
  }

  .home-hero {
    position: relative;
    overflow: hidden;
    animation: heroBgPan 18s ease-in-out infinite alternate;
  }
  .hero-text-block {
    position: relative;
    z-index: 2;
    will-change: transform, opacity;
    transition: transform 0.1s linear, opacity 0.1s linear;
  }
  .hero-title     { animation: heroTextIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both; }
  .hero-subtitle  { animation: heroTextIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both; }
  .hero-divider {
    display: block;
    width: 110px;
    height: 3px;
    margin: 18px auto 0;
    border-radius: 3px;
    background: linear-gradient(90deg, var(--brand-green), #ffffff, var(--brand-green));
    transform-origin: center;
    animation: heroLineGrow 1s ease-out 0.85s both;
  }
  .hero-glow {
    position: absolute;
    inset: -10%;
    pointer-events: none;
    z-index: 1;
    background: radial-gradient(circle at var(--mx, 50%) var(--my, 55%), rgba(255, 255, 255, 0.35), transparent 58%);
    transition: background 0.25s ease-out;
    animation: heroGlowPulse 6s ease-in-out infinite;
  }
  .hero-scroll-indicator {
    position: absolute;
    bottom: 26px;
    left: 50%;
    width: 26px;
    height: 42px;
    border: 2px solid rgba(255,255,255,0.65);
    border-radius: 14px;
    z-index: 3;
    opacity: 0;
    animation: heroScrollFadeIn 0.8s ease 1.5s forwards,
               heroScrollBounce 2s ease-in-out 2.3s infinite;
  }
  .hero-scroll-indicator::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: rgba(255,255,255,0.85);
    border-radius: 2px;
  }

  @media (max-width: 767.98px) {
    .hero-scroll-indicator { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-title, .hero-subtitle, .hero-divider, .hero-glow,
    .hero-scroll-indicator, .home-hero { animation: none !important; }
    .hero-scroll-indicator { opacity: 1; }
    .hero-text-block { transition: none !important; }
  }
`;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-driven parallax: text drifts up + fades as user scrolls past hero
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      if (!textRef.current) return;
      const y = window.scrollY || 0;
      const clamped = Math.min(y, 500);
      textRef.current.style.transform = `translateY(${clamped * 0.35}px)`;
      textRef.current.style.opacity = String(Math.max(1 - clamped / 500, 0.1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  // const heroStyle = {
  //   width: "100%",
  //   minHeight: "85vh",
  //   backgroundImage: `url(${images[index]})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   transition: "background-image 1s ease-in-out",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: "40px",
  //   color: "#fff"
  // };
  const heroStyle = {
    width: "100%",
    minHeight: "85vh",
    marginTop: "1px", // <-- ADD THIS: Adjust this value to match your navbar's exact height
    backgroundImage: `linear-gradient(115deg, rgba(31, 79, 163, 0.78), rgba(158, 11, 34, 0.38)), url(${images[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    color: "#ffffff"
  };

  const titleStyle = {
    fontSize: "clamp(28px, 6vw, 48px)",
    fontWeight: 800,
    margin: 0,
    textShadow: "2px 2px 20px rgba(0,0,0,0.8)"
  };

  const subtitleStyle = {
    fontSize: "clamp(18px, 3vw, 28px)",
    fontWeight: 500,
    marginTop: "0.5rem",
    textShadow: "2px 2px 20px rgba(0,0,0,0.8)"
  };



  return (
    <header
      ref={heroRef}
      className="home-hero"
      style={heroStyle}
      onMouseMove={handleMouseMove}
    >
      <style>{heroAnimations}</style>

      {/* Animated soft glow (follows cursor) */}
      <span className="hero-glow" aria-hidden="true" />

      <div ref={textRef} className="text-center hero-text-block">
        <h1 className="hero-title" style={titleStyle}>Mahima Church</h1>
        <h2 className="hero-subtitle" style={subtitleStyle}>
          living by faith • known by love • a voice of hope
        </h2>

        {/* Animated gradient divider */}
        <span className="hero-divider" aria-hidden="true" />

        {/* PLAN YOUR VISIT BUTTON */}
        {/* <Link
          to="/what-to-expect"
          className="btn btn-primary rounded-pill"
          style={btnStyle}
        >
          PLAN YOUR VISIT
        </Link> */}
      </div>

      {/* Scroll indicator */}
      <span className="hero-scroll-indicator" aria-hidden="true" />
    </header>
  );
};

export default Hero;