// import React from "react";

// // TOP SLIDER IMAGES
// import slide1 from "./../../images/mahimagoodsamaritan1.jpg";
// import slide2 from "./../../images/mahimagoodsamaritan2.JPG";
// import slide3 from "./../../images/mahimagoodsamaritan3.jpg";
// import slide4 from "./../../images/mahimagoodsamaritan4.JPG";
// import slide5 from "./../../images/mahimagoodsamaritan5.JPG";

// // LOWER SLIDER IMAGES
// import new1 from "./../../images/mahimagospelmessengers1.JPG";
// import new2 from "./../../images/mahimagospelmessengers2.JPG";
// import new3 from "./../../images/mahimagospelmessengers3.JPG";
// import new4 from "./../../images/mahimagospelmessengers4.JPG";
// import new5 from "./../../images/mahimagospelmessengers5.jpg";
// import new6 from "./../../images/mahimagospelmessengers6.jpg";
// import new7 from "./../../images/mahimagospelmessengers7.jpg";
// import new8 from "./../../images/mahimagospelmessengers8.jpg";

// function Mission() {
//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   /* ---------------- TOP SLIDER ---------------- */
//   const slides = [slide1, slide2, slide3, slide4, slide5];
//   const [currentSlide, setCurrentSlide] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   /* ---------------- LOWER SLIDER ---------------- */
//   const bottomSlides = [
//     new1,
//     new2,
//     new3,
//     new4,
//     new5,
//     new6,
//     new7,
//     new8,
//   ];
//   const [bottomSlide, setBottomSlide] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setBottomSlide((prev) => (prev + 1) % bottomSlides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [bottomSlides.length]);

//   return (
//     <div className="mission-page">
//       {/* ---------------- TOP AUTO SLIDER ---------------- */}
//       <div
//         style={{
//           width: "100%",
//           marginTop: "1px",
//           position: "relative",
//           overflow: "hidden",
//           height: "450px",
//         }}
//       >
//         {slides.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt="slide"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               transition: "opacity 1.5s ease",
//               opacity: currentSlide === index ? 1 : 0,
//             }}
//           />
//         ))}

//         {/* Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background: "rgba(0,0,0,0.3)",
//           }}
//         />

//         {/* Title */}
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "white",
//             fontSize: "48px",
//             fontWeight: "800",
//             textAlign: "center",
//             textShadow: "0px 4px 14px rgba(0,0,0,0.9)",
//             padding: "0 20px",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Mahima Good Samaritan's
//         </div>
//       </div>

//       {/* ================= SAME BACKGROUND AS QUICKLINKS ================= */}
//       <section
//         className="mission-page-content"
//         style={{
//           backgroundColor:"#f6efe9",
//           paddingTop: "2.5rem",
//           paddingBottom: "0rem", // reduced bottom space
//         }}
//       >
//         {/* ---------------- TITLE ---------------- */}
//         <div style={{ textAlign: "center", padding: "0 20px" }}>
//           <h2
//             style={{
//               fontSize: "38px",
//               fontWeight: "800",
//               marginBottom: "20px",
//               color: "#222",
//             }}
//           >
//             Mahima Gospel Messengers
//           </h2>

//           <p
//             style={{
//               maxWidth: "800px",
//               margin: "0 auto",
//               color: "#555",
//               fontSize: "20px",
//               lineHeight: "1.6",
//               marginBottom: "40px",
//             }}
//           >
//             A visual glimpse of how Mahima serves our community with compassion,
//             love, and dedication.
//           </p>
//         </div>

//         {/* ---------------- BOTTOM AUTO SLIDER ---------------- */}
//         <div
//           style={{
//             width: "100%",
//             height: "420px",
//             position: "relative",
//             overflow: "hidden",
//             maxWidth: "1200px",
//             margin: "0 auto",
//             borderRadius: "16px",
//           }}
//         >
//           {bottomSlides.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="ministry slide"
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 transition: "opacity 1.5s ease",
//                 opacity: bottomSlide === index ? 1 : 0,
//               }}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Mission;

import React, { useRef, useState, useEffect } from "react";

// TOP SLIDER IMAGES
import slide1 from "./../../images/mahimagoodsamaritan1.jpg";
import slide2 from "./../../images/mahimagoodsamaritan2.JPG";
import slide3 from "./../../images/mahimagoodsamaritan3.jpg";
import slide4 from "./../../images/mahimagoodsamaritan4.JPG";
import slide5 from "./../../images/mahimagoodsamaritan5.JPG";

// LOWER SLIDER IMAGES
import new1 from "./../../images/mahimagospelmessengers1.JPG";
import new2 from "./../../images/mahimagospelmessengers2.JPG";
import new3 from "./../../images/mahimagospelmessengers3.JPG";
import new4 from "./../../images/mahimagospelmessengers4.JPG";
import new5 from "./../../images/mahimagospelmessengers5.jpg";
import new6 from "./../../images/mahimagospelmessengers6.jpg";
import new7 from "./../../images/mahimagospelmessengers7.jpg";
import new8 from "./../../images/mahimagospelmessengers8.jpg";

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
      className={`reveal-item ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const missionAnimations = `
  @keyframes missionKenBurns {
    0%   { transform: scale(1); }
    100% { transform: scale(1.08); }
  }
  @keyframes missionTitleIn {
    0%   { opacity: 0; transform: translate(-50%, -38%); letter-spacing: 10px; }
    100% { opacity: 1; transform: translate(-50%, -50%); letter-spacing: 1px; }
  }

  .mission-title { animation: missionTitleIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both; }

  /* ============ DIRECTION-AWARE 3D FLIP + BLUR REVEAL ============ */
  .reveal-item {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.1s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  .reveal-item.from-down {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(60px) rotateX(-15deg) scale(0.92);
  }
  .reveal-item.from-up {
    opacity: 0;
    filter: blur(10px);
    transform: perspective(1200px) translateY(-60px) rotateX(15deg) scale(0.92);
  }
  .reveal-item.is-visible {
    opacity: 1;
    filter: blur(0);
    transform: perspective(1200px) translateY(0) rotateX(0) scale(1);
  }

  .mission-bottom-slider {
    box-shadow: var(--brand-shadow);
  }

  /* ============ MOBILE: prevent title overflow ============ */
  @media (max-width: 767.98px) {
    .mission-title {
      font-size: 26px !important;
      white-space: normal !important;
      padding: 0 16px !important;
    }
    .mission-heading { font-size: 26px !important; }
    .mission-sub { font-size: 17px !important; }
    .mission-bottom-slider { height: 280px !important; }
  }

  @media (prefers-reduced-motion: reduce) {
    .mission-title,
    .reveal-item {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
    }
  }
`;

function Mission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ---------------- TOP SLIDER ---------------- */
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  /* ---------------- LOWER SLIDER ---------------- */
  const bottomSlides = [new1, new2, new3, new4, new5, new6, new7, new8];
  const [bottomSlide, setBottomSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBottomSlide((prev) => (prev + 1) % bottomSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bottomSlides.length]);

  return (
    <div className="mission-page">
      <style>{missionAnimations}</style>

      {/* ---------------- TOP AUTO SLIDER ---------------- */}
      <div
        style={{
          width: "100%",
          marginTop: "1px",
          position: "relative",
          overflow: "hidden",
          height: "450px",
        }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slide"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 1.5s ease",
              animation:
                currentSlide === index
                  ? "missionKenBurns 6s ease-in-out forwards"
                  : "none",
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        ))}

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
          }}
        />

        {/* Title */}
        <div
          className="mission-title"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "48px",
            fontWeight: "800",
            textAlign: "center",
            textShadow: "0px 4px 14px rgba(0,0,0,0.9)",
            padding: "0 20px",
            whiteSpace: "nowrap",
          }}
        >
          Mahima Good Samaritan's
        </div>
      </div>

      {/* ================= SAME BACKGROUND AS QUICKLINKS ================= */}
      <section
        className="mission-page-content"
        style={{
          backgroundColor: "var(--brand-soft)",
          paddingTop: "2.5rem",
          paddingBottom: "0rem", // reduced bottom space
        }}
      >
        {/* ---------------- TITLE ---------------- */}
        <div style={{ textAlign: "center", padding: "0 20px" }}>
          <RevealOnScroll delay={0.05}>
            <h2
              className="mission-heading"
              style={{
                fontSize: "38px",
                fontWeight: "800",
                marginBottom: "20px",
                color: "var(--brand-ink)",
              }}
            >
              Mahima Gospel Messengers
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.20}>
            <p
              className="mission-sub"
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                color: "var(--brand-muted)",
                fontSize: "20px",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              A visual glimpse of how Mahima serves our community with compassion,
              love, and dedication.
            </p>
          </RevealOnScroll>
        </div>

        {/* ---------------- BOTTOM AUTO SLIDER ---------------- */}
        <RevealOnScroll delay={0.35}>
          <div
            className="mission-bottom-slider"
            style={{
              width: "100%",
              height: "420px",
              position: "relative",
              overflow: "hidden",
              maxWidth: "1200px",
              margin: "0 auto",
              borderRadius: "16px",
            }}
          >
            {bottomSlides.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="ministry slide"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 1.5s ease",
                  animation:
                    bottomSlide === index
                      ? "missionKenBurns 6s ease-in-out forwards"
                      : "none",
                  opacity: bottomSlide === index ? 1 : 0,
                }}
              />
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}

export default Mission;