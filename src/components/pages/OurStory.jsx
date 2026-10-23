import React, { useRef, useState, useEffect } from "react";
import "./OurStory.css";

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
      className={`ourstory-reveal ${stateClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

function OurStory() {
  return (
    <div className="ourstory-container">
      
      {/* Hero Section */}
      <RevealOnScroll className="ourstory-reveal" delay={0}>
      <section className="ourstory-hero">
        <h1>Our Story</h1>
        <p className="ourstory-tagline">
          A Vision Given by Christ. A Journey of Faith. A Legacy of Grace.
        </p>
      </section>
      </RevealOnScroll>

      {/* Intro */}
      <RevealOnScroll className="ourstory-reveal" delay={0}>
      <section className="ourstory-section">
        <p className="ourstory-text">
          The story of <strong>Mahima Church</strong> is a testimony to the faithfulness of God and the obedience of one servant who dared to respond to a divine calling.
        </p>
        <p className="ourstory-text">
          In the year 1988, <strong>Potluri Ruth Ratnam garu</strong> received a <strong>clear and life-transforming vision from our Lord Jesus Christ.</strong>
          In that vision, the Lord commissioned her to rise and establish a ministry that would proclaim the <strong>love, grace, and saving gospel of Jesus Christ,</strong>  
          with a special burden to reach<strong> Gentile families</strong> across the Telugu-speaking regions of <strong>Andhra Pradesh and Telangana.</strong>
        </p>

        <p className="ourstory-text">
          This divine commission marked the beginning of a missionary journey that has now spanned  <strong>nearly four decades</strong>—a journey characterized by prayer,
          sacrifice, unwavering faith, and total dependence on God.
        </p>

      </section>
      </RevealOnScroll>

      {/* Timeline Section */}
      <RevealOnScroll className="ourstory-reveal" delay={0.05}>
      <section className="ourstory-section light">
        <h2>The Early Years (1988–1991)</h2>
        <p className="ourstory-text">
          Responding to the call of God, Pastor Ruth Ratnam garu stepped out in faith with <strong> no material resources,
          no institutional backing, and no worldly assurance—only the Word of God and the promise of Christ.</strong>
        </p>

        <p className="ourstory-text">
          The ministry began humbly:
        </p>

        <ul className="ourstory-list">
          <li>Small prayer gatherings in homes</li>
          <li>Village-to-village evangelism</li>
          <li>Personal witnessing to families</li>
          <li>Fasting prayers and night vigils</li>
          <li>Sharing the gospel among communities unfamiliar with Christ</li>
        </ul>

        <p className="ourstory-text">
         Facing opposition, financial challenges, and physical hardships, Pastor garu remained steadfast. 
         Her heart burned with a singular passion—to <strong>make Jesus known</strong> and to bring souls into the saving knowledge of Christ.
        </p>

        <p className="ourstory-text">
          It was during these foundational years that the ministry came to be known as <strong>“Mahima Church,”</strong>
          a name that reflects the<strong>glory (Mahima) of God</strong>  revealed through the gospel.
        </p>
      </section>
      </RevealOnScroll>

      {/* Growth Section */}
      <RevealOnScroll className="ourstory-reveal" delay={0.1}>
      <section className="ourstory-section">
        <h2>GROWTH THROUGH PERSEVERANCE: BUILDING THE CHURCH (1992–2010)</h2>
        <p className="ourstory-text">
          As the Word of God was preached faithfully and prayer became the foundation, 
          the Lord began to <strong>confirm the ministry with His power:</strong>
        </p>

        <ul className="ourstory-list two-column">
          <li>Lives were transformed</li>
          <li>Families were restored</li>
          <li>Addictions were broken</li>
          <li>Healings and testimonies emerged</li>
          <li>Many experienced Christ for the first time</li>
        </ul>

        <p className="ourstory-text">
          Mahima Church gradually grew from home fellowships into 
          organized congregational worship. Believers gathered regularly for:
        </p>

        <ul className="ourstory-list two-column">
          <li>Sunday Worship Services</li>
          <li>Mid-week Prayer Meetings</li>
          <li>Fasting Prayers</li>
          <li>All-night Prayer Vigils</li>
          <li>Bible Teaching & Discipleship</li>
        </ul>

        <p className="ourstory-text">
          The ministry expanded beyond a single location as God opened doors in new towns and cities. 
          Pastors, leaders, and volunteers were trained and raised from within the church, 
          grounded in sound doctrine and servant leadership
        </p>

      </section>
      </RevealOnScroll>

      {/* Mission Section */}
      <RevealOnScroll className="ourstory-reveal" delay={0.05}>
      <section className="ourstory-section light">
        <h2>A MISSION-MINDED CHURCH: REACHING THE LOST</h2>

        <p className="ourstory-text">
          From its inception, Mahima Church has remained deeply mission-oriented. 
          The heartbeat of the ministry has always been:
        </p>
        <blockquote>
          “To reach the unreached and share the love of Christ with one and all.”
        </blockquote>

        <h5 className="ourstory-text">Key Mission Activities:</h5>

        <ul className="ourstory-list">
          <li>Village evangelistic outreaches</li>
          <li>Gospel meetings and revival crusades</li>
          <li>House visits and family prayers</li>
          <li>Open-air meetings and street evangelism</li>
          <li>Distributing Bibles and Christian literature</li>
          <li>Prayer support for the sick, broken, and marginalized</li>
        </ul>

        <p className="ourstory-text">
         Special emphasis has always been placed on Gentile families, 
         helping them encounter Christ personally and experience transformation in every area of life.
        </p>
        

      </section>
      </RevealOnScroll>

      {/* Today Section */}
      <RevealOnScroll className="ourstory-reveal" delay={0.1}>
      <section className="ourstory-section highlight">
        <h2>Today: A Growing Family of Faith</h2>

        <div className="stats-grid">
          <div>
            <h3>2,000+</h3>
            <p>Believers</p>
          </div>
          <div>
            <h3>7</h3>
            <p>Church Branches</p>
          </div>
          <div>
            <h3>7</h3>
            <p>Cities & Towns</p>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* Future */}
      <RevealOnScroll className="ourstory-reveal" delay={0.05}>
      <section className="ourstory-section">
        <h2>Looking Ahead</h2>
        <p className="ourstory-text">
          As Mahima Church moves forward, we continue to depend on the leading of the Holy Spirit—embracing 
          new avenues such as <strong> digital ministry through Mahima Swaramu</strong>, expanding outreach,
          and strengthening discipleship for future generations.
        </p>

        {/* <p className="ourstory-text emphasis">
          All glory, honor, and praise belong to our Lord and Savior Jesus
          Christ.
        </p> */}

        <p className="ourstory-text emphasis">
          All glory, honor, and praise belong to our Lord and Savior Jesus Christ, who has been faithful in every season
        </p>
      </section>
      </RevealOnScroll>

    </div>
  );
}

export default OurStory;

// import React from "react";

// function OurStory() {
//   return (
//     <div className="p-6 max-w-4xl mx-auto font-sans">
//       {/* Header Section */}
//       <section className="mb-10 text-center">
//         <h1 className="text-3xl font-bold mb-4 text-blue-900">Our Story</h1>
//         <h2 className="text-xl italic text-gray-600">
//           A Vision Given by Christ. A Journey of Faith. A Legacy of Grace.
//         </h2>
//         <p className="mt-4 text-lg">
//           The story of Mahima Church is a testimony to the faithfulness of God and
//           the obedience of one servant who dared to respond to a divine calling.
//         </p>
//       </section>

//       {/* The Beginning */}
//       <section className="mb-8">
//         <h3 className="text-2xl font-semibold mb-3 text-blue-800">The Vision (1988)</h3>
//         <p className="mb-4">
//           In 1988, Pastor Potluri Ruth Ratnam garu received a clear and
//           life-transforming vision from our Lord Jesus Christ. She was commissioned
//           to establish a ministry proclaiming the love, grace, and saving gospel
//           of Jesus, specifically reaching Gentile families across Andhra Pradesh
//           and Telangana.
//         </p>
//         <p>
//           This marked the beginning of a journey characterized by prayer,
//           sacrifice, and total dependence on God. Starting with no material resources, 
//           Pastor Ruth stepped out with only the Word of God.
//         </p>
//       </section>

//       {/* Growth & Impact */}
//       <section className="mb-8 bg-gray-50 p-6 rounded-lg">
//         <h3 className="text-2xl font-semibold mb-3 text-blue-800">
//           From Humble Beginnings to a Growing Family
//         </h3>
//         <p className="mb-4">
//           What began as small prayer gatherings and village-to-village evangelism
//           faced opposition and hardship. Yet, through perseverance and the power
//           of God, lives were transformed, addictions broken, and families restored.
//         </p>
//         <p className="font-medium">
//           By the grace of God, what started with just 4 people has grown into:
//         </p>
//         <ul className="list-disc pl-6 mt-2 space-y-1">
//           <li>A church family of over 2,000 believers.</li>
//           <li>7 established church branches.</li>
//           <li>Presence in 7 cities and towns across Andhra Pradesh and Telangana.</li>
//         </ul>
//       </section>

//       {/* Mission & Ministries */}
//       <section className="mb-8">
//         <h3 className="text-2xl font-semibold mb-3 text-blue-800">
//           Our Mission & Ministries
//         </h3>
//         <p className="mb-4">
//           Our heartbeat has always been to reach the unreached. Through the <strong>Mahima Foundation</strong>, 
//           we also demonstrate the gospel through love—caring for the poor, supporting widows 
//           and orphans, and providing educational assistance.
//         </p>
//         <div className="grid md:grid-cols-2 gap-4 mt-4">
//           <div className="border p-4 rounded shadow-sm">
//             <h4 className="font-bold text-lg">Worship & Prayer</h4>
//             <p className="text-sm">Spirit-filled worship services and dedicated intercessory prayer vigils.</p>
//           </div>
//           <div className="border p-4 rounded shadow-sm">
//             <h4 className="font-bold text-lg">Discipleship</h4>
//             <p className="text-sm">Systematic Bible teaching and leadership training to raise mature believers.</p>
//           </div>
//           <div className="border p-4 rounded shadow-sm">
//             <h4 className="font-bold text-lg">Next Generation</h4>
//             <p className="text-sm">Nurturing youth and children through Sunday School and mentoring.</p>
//           </div>
//           <div className="border p-4 rounded shadow-sm">
//             <h4 className="font-bold text-lg">Evangelism</h4>
//             <p className="text-sm">Ongoing outreach to villages, towns, and cities.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer / Vision Statement */}
//       <section className="mt-10 pt-6 border-t border-gray-300 text-center">
//         <p className="text-gray-700 italic">
//           "To glorify Jesus Christ, proclaim the full gospel, and prepare the Church for the coming of the Lord."
//         </p>
//       </section>
//     </div>
//   );
// }

// export default OurStory;