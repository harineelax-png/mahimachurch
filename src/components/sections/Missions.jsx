

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Eye, Target } from 'lucide-react'; // Using lucide-react for the icons

// const MissionVision = () => {
//   const cards = [
//     {
//       title: "Our Vision",
//       icon: <Eye className="text-white w-8 h-8" />,
//       iconBg: "bg-teal-500",
//       content: "Sharing the Good News of God’s Love and seeing all Indians loving God - like Jesus did and loving one another – like Jesus did!",
//       footer: "To create thriving generations in an academically excellent, culturally diverse, and spiritually strong community."
//     },
//     {
//       title: "Our Mission",
//       icon: <Target className="text-white w-8 h-8" />,
//       iconBg: "bg-orange-500",
//       content: "In the Service of God - by preaching the Gospel of Jesus Christ, reaching the lost and transforming lives through the power of God’s Word and Spirit.",
//       subContent: "In the Service of Nation - by being the Body of Christ, serving the needy, healing the broken, and bringing hope through acts of love, mercy, and kindness."
//     }
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-8 p-10 bg-gray-50">
//       {cards.map((card, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(0,0,0,0.1)" }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="max-w-md bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-start cursor-pointer"
//         >
//           {/* Icon Header */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className={`${card.iconBg} p-4 rounded-2xl shadow-lg`}>
//               {card.icon}
//             </div>
//             <h2 className="text-4xl font-bold text-slate-800">{card.title}</h2>
//           </div>

//           {/* Body Content */}
//           <div className="text-slate-600 leading-relaxed text-lg space-y-4">
//             <p className="font-medium text-slate-700">{card.content}</p>
//             {card.subContent && <p>{card.subContent}</p>}
//             {card.footer && <p className="text-sm italic text-slate-500 pt-4 border-t">{card.footer}</p>}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default MissionVision;
import React, { useRef, useState, useEffect } from "react";
import "./Missions.css";
import { Sparkles, HeartHandshake } from "lucide-react";

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
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
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

const mvAnimations = `
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

  /* ============ CARD HOVER POLISH (preserved) ============ */
  .mv-card {
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .mv-card::after {
    content: "";
    position: absolute;
    top: 0; left: -120%;
    width: 55%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    transform: skewX(-20deg);
    transition: left 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
    z-index: 1;
  }
  .mv-card:hover::after { left: 130%; }

  .mv-card h2 {
    position: relative;
    display: inline-block;
    transition: color 0.4s ease, letter-spacing 0.4s ease;
  }
  .mv-card h2::after {
    content: "";
    position: absolute;
    left: 0; bottom: -6px;
    width: 100%; height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--brand-blue), var(--brand-deep), var(--brand-green));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .mv-card:hover h2::after { transform: scaleX(1); }
  .mv-card:hover h2 { color: var(--brand-deep); letter-spacing: 0.4px; }

  .mv-card .mv-icon {
    animation: mvIconFloat 3.5s ease-in-out infinite;
    transition:
      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.5s ease,
      filter 0.5s ease;
  }
  .mv-card:hover .mv-icon {
    transform: translateY(-4px) scale(1.15) rotate(-6deg);
    box-shadow: 0 0 28px rgba(31, 79, 163, 0.45);
    filter: drop-shadow(0 0 8px rgba(31, 79, 163, 0.55));
  }
  @keyframes mvIconFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }
  .mv-card:hover { box-shadow: var(--brand-shadow) !important; }

  /* ============ MOBILE ============ */
  @media (max-width: 767.98px) {
    .mv-card:hover::after { left: -120%; }
    .mv-card:hover { box-shadow: 0 14px 32px rgba(27, 39, 62, 0.12) !important; }
    .mv-card:hover .mv-icon { transform: none; box-shadow: none; filter: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal-item, .mv-card, .mv-card::after, .mv-card h2::after,
    .mv-card .mv-icon {
      animation: none !important;
      transition: none !important;
    }
    .reveal-item { opacity: 1 !important; filter: none !important; transform: none !important; }
  }
`;

function MissionVision() {
  /* --- 3D mouse-tracking tilt per card (preserved) --- */
  const handleMouseMove = (e) => {
    if (window.matchMedia("(max-width: 767.98px)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transition = "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "";
  };

  return (
    <section className="mv-section">
      <style>{mvAnimations}</style>
      <div className="mv-container">

        {/* Vision Card */}
        <RevealOnScroll delay={0.10}>
          <div
            className="mv-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mv-icon vision">
              <Sparkles size={26} />
            </div>
            <h2>Our Vision</h2>
            <p>
              Sharing the Good News of God’s Love and seeing all Indians loving
              God - like Jesus did and loving one another – like Jesus did !
            </p>
          </div>
        </RevealOnScroll>

        {/* Mission Card */}
        <RevealOnScroll delay={0.30}>
          <div
            className="mv-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mv-icon mission">
              <HeartHandshake size={26} />
            </div>
            <h2>Our Mission</h2>
            <p>
              In the Service of God and in the Service of Nation !!!
            </p>
            <p>
              In the Service of God - by preaching the Gospel of Jesus Christ,
              reaching the lost and transforming lives through the power of
              God’s Word and Spirit.
            </p>
            <p>
              In the Service of Nation - by being the Body of Christ, serving the
              needy, healing the broken, and bringing hope through acts of love,
              mercy, and kindness.
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

export default MissionVision;