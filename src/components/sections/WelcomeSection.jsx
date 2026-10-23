// import React, { useState } from "react";
// import sectionImage from "../../images/welcomeimage2.jpg"; // Update your image

// const WelcomeSection = () => {
//   const [openStep, setOpenStep] = useState(null);

//   const toggleStep = (step) => {
//     setOpenStep(openStep === step ? null : step);
//   };

//   const stepStyle = {
//     fontSize: "clamp(20px, 3vw, 28px)",
//     fontWeight: "700",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     cursor: "pointer",
//     padding: "14px 0",
//   };

//   const arrowStyle = (isOpen) => ({
//     transition: "0.3s",
//     transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//   });

//   return (
//     <section
//       className="welcome-section"
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         backgroundColor: "#f6efe9",
//         padding: "60px 20px",
//       }}
//     >
//       {/* LEFT IMAGE */}
//       <div style={{ flex: "1 1 250px", padding: "20px" }}>
//         <img
//           src={sectionImage}
//           alt="Welcome"
//           style={{
//             width: "90%",
//             borderRadius: "12px",
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       {/* RIGHT TEXT */}
//       <div
//         style={{
//           flex: "1 1 450px",
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h1
//   style={{
//     fontSize: "clamp(28px, 5vw, 46px)",
//     fontWeight: "800",
//     margin: "0 0 20px 0",   // prevents margin collapse
//     fontFamily: "Georgia, serif",
//   }}
// >

//           We Can't Wait To See You!
//         </h1>

//         {/* STEP 1 */}
//         <div
//           style={{
//             borderBottom: "1px solid #d3c3a3",
//             paddingBottom: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <div style={stepStyle} onClick={() => toggleStep(1)}>
//             Step 1: Plan Your Visit
//             <span style={arrowStyle(openStep === 1)}>⌄</span>
//           </div>

//           {openStep === 1 && (
//             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
//               Planning your visit helps you know what to expect.  
//               You’ll be welcomed with love and guided through everything.
//             </p>
//           )}
//         </div>

//         {/* STEP 2 */}
//         <div
//           style={{
//             borderBottom: "1px solid #d3c3a3",
//             paddingBottom: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <div style={stepStyle} onClick={() => toggleStep(2)}>
//             Step 2: Get Involved
//             <span style={arrowStyle(openStep === 2)}>⌄</span>
//           </div>

//           {openStep === 2 && (
//             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
//               When we are together you’ll meet some great people.  
//               We’re excited to meet you, your friends and family!
//             </p>
//           )}
//         </div>

//         {/* STEP 3 */}
//         <div
//           style={{
//             borderBottom: "1px solid #d3c3a3",
//             paddingBottom: "10px",
//           }}
//         >
//           <div style={stepStyle} onClick={() => toggleStep(3)}>
//             Step 3: See God Change Lives
//             <span style={arrowStyle(openStep === 3)}>⌄</span>
//           </div>

//           {openStep === 3 && (
//             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
//               Watch how God transforms hearts, families, and futures  
//               through faith, love, and hope.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;




// // import React, { useState } from "react";
// // import Spline from '@splinetool/react-spline';

// // const WelcomeSection = () => {
// //   const [openStep, setOpenStep] = useState(null);

// //   const toggleStep = (step) => {
// //     setOpenStep(openStep === step ? null : step);
// //   };

// //   const stepStyle = {
// //     fontSize: "clamp(20px, 3vw, 28px)",
// //     fontWeight: "700",
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     cursor: "pointer",
// //     padding: "14px 0",
// //   };

// //   const arrowStyle = (isOpen) => ({
// //     transition: "0.3s",
// //     transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
// //     display: "inline-block" // Ensure rotation works
// //   });

// //   return (
// //     <section
// //       style={{
// //         display: "flex",
// //         flexWrap: "wrap",
// //         backgroundColor: "#F8EDC4",
// //         padding: "60px 20px",
// //         alignItems: "center", // Vertically centers content
// //         minHeight: "600px"    // Ensures space for the 3D model
// //       }}
// //     >
// //       {/* LEFT 3D ANIMATION */}
// //       <div style={{ flex: "1 1 450px", height: "500px", padding: "20px" }}>
// //         {/* This is a placeholder 3D scene of a character waving. 
// //            To make your own specific "Church Welcome" scene:
// //            1. Go to spline.design
// //            2. Create a scene (e.g., a cross, a dove, or an open door)
// //            3. Click "Export" -> "Viewer" -> Copy the URL
// //            4. Paste it in the 'scene' prop below.
// //         */}
// //         <Spline 
// //           scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
// //           style={{ width: "100%", height: "100%", borderRadius: "12px" }}
// //         />
// //       </div>

// //       {/* RIGHT TEXT */}
// //       <div
// //         style={{
// //           flex: "1 1 450px",
// //           padding: "20px",
// //           display: "flex",
// //           flexDirection: "column",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: "clamp(28px, 5vw, 46px)",
// //             fontWeight: "800",
// //             margin: "0 0 20px 0",
// //             fontFamily: "Georgia, serif",
// //           }}
// //         >
// //           We Can't Wait To See You!
// //         </h1>

// //         {/* STEP 1 */}
// //         <div style={{ borderBottom: "1px solid #d3c3a3", paddingBottom: "10px", marginBottom: "10px" }}>
// //           <div style={stepStyle} onClick={() => toggleStep(1)}>
// //             Step 1: Plan Your Visit
// //             <span style={arrowStyle(openStep === 1)}>▼</span>
// //           </div>
// //           {openStep === 1 && (
// //             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
// //               Planning your visit helps you know what to expect.  
// //               You’ll be welcomed with love and guided through everything.
// //             </p>
// //           )}
// //         </div>

// //         {/* STEP 2 */}
// //         <div style={{ borderBottom: "1px solid #d3c3a3", paddingBottom: "10px", marginBottom: "10px" }}>
// //           <div style={stepStyle} onClick={() => toggleStep(2)}>
// //             Step 2: Get Involved
// //             <span style={arrowStyle(openStep === 2)}>▼</span>
// //           </div>
// //           {openStep === 2 && (
// //             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
// //               When we are together you’ll meet some great people.  
// //               We’re excited to meet you, your friends and family!
// //             </p>
// //           )}
// //         </div>

// //         {/* STEP 3 */}
// //         <div style={{ borderBottom: "1px solid #d3c3a3", paddingBottom: "10px" }}>
// //           <div style={stepStyle} onClick={() => toggleStep(3)}>
// //             Step 3: See God Change Lives
// //             <span style={arrowStyle(openStep === 3)}>▼</span>
// //           </div>
// //           {openStep === 3 && (
// //             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
// //               Watch how God transforms hearts, families, and futures  
// //               through faith, love, and hope.
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WelcomeSection;


import React, { useState, useRef, useEffect } from "react";
import sectionImage from "../../images/welcomeimage2.jpg"; // Update your image

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

const welcomeAnimations = `
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

  /* ============ IMAGE HOVER ============ */
  .welcome-reveal-img img {
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease;
  }
  .welcome-reveal-img:hover img {
    transform: scale(1.04);
    box-shadow: var(--brand-shadow);
  }

  /* ============ STEP HEADING HOVER ============ */
  .welcome-step-head {
    transition: color 0.3s ease, padding-left 0.3s ease;
  }
  .welcome-step-head:hover {
    color: var(--brand-deep);
    padding-left: 8px;
  }

  /* ============ ACCORDION CONTENT REVEAL ============ */
  @keyframes wContentReveal {
    0%   { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .welcome-step-content {
    animation: wContentReveal 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  /* ============ REDUCED MOTION ============ */
  @media (prefers-reduced-motion: reduce) {
    .reveal-item, .welcome-reveal-img img, .welcome-step-head, .welcome-step-content {
      transition: none !important;
      animation: none !important;
    }
    .reveal-item { opacity: 1 !important; filter: none !important; transform: none !important; }
  }
`;

const WelcomeSection = () => {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (step) => {
    setOpenStep(openStep === step ? null : step);
  };

  const stepStyle = {
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: "700",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "14px 0",
  };

  const arrowStyle = (isOpen) => ({
    transition: "0.3s",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  });

  return (
    <section
      className="welcome-section"
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "var(--brand-soft)",
        padding: "60px 20px",
      }}
    >
      <style>{welcomeAnimations}</style>

      {/* LEFT IMAGE */}
      <div style={{ flex: "1 1 250px", padding: "20px" }}>
        <RevealOnScroll className="welcome-reveal-img">
          <img
            src={sectionImage}
            alt="Welcome"
            style={{
              width: "90%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </RevealOnScroll>
      </div>

      {/* RIGHT TEXT */}
      <div
        style={{
          flex: "1 1 450px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <RevealOnScroll delay={0.15}>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: "800",
              margin: "0 0 20px 0",   // prevents margin collapse
              fontFamily: "Georgia, serif",
            }}
          >
            We Can't Wait To See You!
          </h1>
        </RevealOnScroll>

        {/* STEP 1 */}
        <RevealOnScroll delay={0.30}>
          <div
            style={{
              borderBottom: "1px solid var(--brand-border)",
              paddingBottom: "10px",
              marginBottom: "10px",
            }}
          >
            <div className="welcome-step-head" style={stepStyle} onClick={() => toggleStep(1)}>
              Step 1: Plan Your Visit
              <span style={arrowStyle(openStep === 1)}>⌄</span>
            </div>

            {openStep === 1 && (
              <p
                className="welcome-step-content"
                style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}
              >
                Planning your visit helps you know what to expect.  
                You’ll be welcomed with love and guided through everything.
              </p>
            )}
          </div>
        </RevealOnScroll>

        {/* STEP 2 */}
        <RevealOnScroll delay={0.45}>
          <div
            style={{
              borderBottom: "1px solid var(--brand-border)",
              paddingBottom: "10px",
              marginBottom: "10px",
            }}
          >
            <div className="welcome-step-head" style={stepStyle} onClick={() => toggleStep(2)}>
              Step 2: Get Involved
              <span style={arrowStyle(openStep === 2)}>⌄</span>
            </div>

            {openStep === 2 && (
              <p
                className="welcome-step-content"
                style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}
              >
                When we are together you’ll meet some great people.  
                We’re excited to meet you, your friends and family!
              </p>
            )}
          </div>
        </RevealOnScroll>

        {/* STEP 3 */}
        <RevealOnScroll delay={0.60}>
          <div
            style={{
              borderBottom: "1px solid var(--brand-border)",
              paddingBottom: "10px",
            }}
          >
            <div className="welcome-step-head" style={stepStyle} onClick={() => toggleStep(3)}>
              Step 3: See God Change Lives
              <span style={arrowStyle(openStep === 3)}>⌄</span>
            </div>

            {openStep === 3 && (
              <p
                className="welcome-step-content"
                style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}
              >
                Watch how God transforms hearts, families, and futures  
                through faith, love, and hope.
              </p>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default WelcomeSection;




// import React, { useState } from "react";
// import Spline from '@splinetool/react-spline';

// const WelcomeSection = () => {
//   const [openStep, setOpenStep] = useState(null);

//   const toggleStep = (step) => {
//     setOpenStep(openStep === step ? null : step);
//   };

//   const stepStyle = {
//     fontSize: "clamp(20px, 3vw, 28px)",
//     fontWeight: "700",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     cursor: "pointer",
//     padding: "14px 0",
//   };

//   const arrowStyle = (isOpen) => ({
//     transition: "0.3s",
//     transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//     display: "inline-block" // Ensure rotation works
//   });

//   return (
//     <section
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         backgroundColor: "#F8EDC4",
//         padding: "60px 20px",
//         alignItems: "center", // Vertically centers content
//         minHeight: "600px"    // Ensures space for the 3D model
//       }}
//     >
//       {/* LEFT 3D ANIMATION */}
//       <div style={{ flex: "1 1 450px", height: "500px", padding: "20px" }}>
//         {/* This is a placeholder 3D scene of a character waving. 
//            To make your own specific "Church Welcome" scene:
//            1. Go to spline.design
//            2. Create a scene (e.g., a cross, a dove, or an open door)
//            3. Click "Export" -> "Viewer" -> Copy the URL
//            4. Paste it in the 'scene' prop below.
//         */}
//         <Spline 
//           scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
//           style={{ width: "100%", height: "100%", borderRadius: "12px" }}
//         />
//       </div>

//       {/* RIGHT TEXT */}
//       <div
//         style={{
//           flex: "1 1 450px",
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "clamp(28px, 5vw, 46px)",
//             fontWeight: "800",
//             margin: "0 0 20px 0",
//             fontFamily: "Georgia, serif",
//           }}
//         >
//           We Can't Wait To See You!
//         </h1>

//         {/* STEP 1 */}
//         <div style={{ borderBottom: "1px solid #d3c3a3", paddingBottom: "10px", marginBottom: "10px" }}>
//           <div style={stepStyle} onClick={() => toggleStep(1)}>
//             Step 1: Plan Your Visit
//             <span style={arrowStyle(openStep === 1)}>▼</span>
//           </div>
//           {openStep === 1 && (
//             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
//               Planning your visit helps you know what to expect.  
//               You’ll be welcomed with love and guided through everything.
//             </p>
//           )}
//         </div>

//         {/* STEP 2 */}
//         <div style={{ borderBottom: "1px solid #d3c3a3", paddingBottom: "10px", marginBottom: "10px" }}>
//           <div style={stepStyle} onClick={() => toggleStep(2)}>
//             Step 2: Get Involved
//             <span style={arrowStyle(openStep === 2)}>▼</span>
//           </div>
//           {openStep === 2 && (
//             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
//               When we are together you’ll meet some great people.  
//               We’re excited to meet you, your friends and family!
//             </p>
//           )}
//         </div>

//         {/* STEP 3 */}
//         <div style={{ borderBottom: "1px solid #d3c3a3", paddingBottom: "10px" }}>
//           <div style={stepStyle} onClick={() => toggleStep(3)}>
//             Step 3: See God Change Lives
//             <span style={arrowStyle(openStep === 3)}>▼</span>
//           </div>
//           {openStep === 3 && (
//             <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "10px" }}>
//               Watch how God transforms hearts, families, and futures  
//               through faith, love, and hope.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;