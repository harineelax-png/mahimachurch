// import React from "react";
// import "./Beliefs.css"; // Assuming you will create a CSS file for this

// function Beliefs() {
//   return (
//     <div className="beliefs-container">
      
//       {/* Header Section */}
//       <section className="beliefs-hero">
//         <h1>Our Beliefs & Core Values</h1>
//         <p className="beliefs-subtitle">
//           Rooted in Biblical Truth. Driven by the Love of Christ.
//         </p>
//       </section>

      
//       <section className="beliefs-mission">
//         <div className="mission-content">
//           <h2>Our Mission</h2>
//           <p className="mission-statement">
//             "To reach the unreached and share the love of Christ with one and all."
//           </p>
//           <ul className="mission-desc">
//           <li>Village evangelistic outreaches</li>
//           <li>Gospel meetings and revival crusades</li>
//           <li>House visits and family prayers</li>
//           <li>Open-air meetings and street evangelism</li>
//           <li>Distributing Bibles and Christian literature</li>
//           <li>Prayer support for the sick, broken, and marginalized</li>
//           </ul>
//         <p className="ourstory-text">
//           Special emphasis has always been placed on Gentile families, helping them encounter Christ personally and experience transformation in every area of life.
//         </p>
//         </div>
//       </section>


//       <section className="beliefs-pillars">
//         <h2>MINISTRIES THAT BUILD THE CHURCH</h2>
//         <p className="section-intro">
//             Over the years, Mahima Church has developed structured ministries to serve the Kingdom of Christ, in a more systematic manner :
//         </p>
//         <div className="pillars-grid">
//           <div className="pillar-card">
//             <h3>1. Worship Ministry</h3>
//             <p>
//               Spirit-filled worship services that glorify God and lead believers into His presence.
//             </p>
//           </div>

//           <div className="pillar-card">
//             <h3>2.Teaching & Discipleship</h3>
//             <p>
//              Systematic Bible teaching, foundational doctrine classes, and leadership training to raise mature believers.
//             </p>
//           </div>

//           <div className="pillar-card">
//             <h3>3.Prayer Ministry</h3>
//             <p>
//               Fasting prayers, intercessory prayer, healing prayers, and all-night prayer meetings.
//             </p>
//           </div>

//           <div className="pillar-card">
//             <h3>4. Youth & Children’s Ministry</h3>
//             <p>
//               Spiritual nurturing of the next generation through Sunday School, youth fellowships, camps, and mentoring.
//             </p>
//           </div>

//          <div className="pillar-card">
//             <h3>5.Women’s Ministry</h3>
//             <p>
//              Encouraging women to grow spiritually, strengthen families, and serve the church and society.
//             </p>
//           </div>

//            <div className="pillar-card">
//             <h3>6.Evangelism & Missions</h3>
//             <p>
//               Ongoing outreach programs to villages, towns, and cities across Andhra Pradesh and Telangana.
//             </p>
//           </div>


//         </div>
//       </section>

     
//       <section className="beliefs-holistic">
//         <h2>HOLISTIC MINISTRY: CARING FOR BODY, SOUL & SPIRIT</h2>
//         <p>
//           Mahima Church believes that the gospel is not only preached but demonstrated through love and service.
//         </p>
//         <p>
//          Through its charitable and social initiatives—now carried forward in association with Mahima Foundation—the church actively engages in:
//         </p>
//         <ul className="holistic-list">
//             <li><strong>Care for the poor and needy</strong>.</li>
//             <li><strong>Support for widows and orphans</strong>.</li>
//             <li><strong>Educational assistance for underprivileged children</strong>.</li>
//             <li><strong>Food distribution and relief work</strong>.</li>
//             <li><strong>Prayer and counseling for families in crisis</strong>.</li>
//         </ul>

//         <p>
//          These acts of compassion reflect the heart of Christ and affirm the church’s commitment to holistic ministry.
//         </p>
//       </section>

//     </div>
//   );
// }

// export default Beliefs;

import "./Beliefs.css";

function Beliefs() {
  return (
    <div className="beliefs-container">

      {/* Hero */}
      <section className="beliefs-hero">
        <h1>Our Beliefs & Core Values</h1>
        <p className="beliefs-subtitle">
          Rooted in Biblical Truth. Driven by the Love of Christ.
        </p>
      </section>

      {/* Mission */}
      <section className="beliefs-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            “To reach the unreached and share the love of Christ with one and all.”
          </p>

          <ul className="mission-list">
            <li>Village evangelistic outreaches</li>
            <li>Gospel meetings and revival crusades</li>
            <li>House visits and family prayers</li>
            <li>Open-air meetings and street evangelism</li>
            <li>Distributing Bibles and Christian literature</li>
            <li>Prayer support for the sick, broken, and marginalized</li>
          </ul>

          <p className="mission-note">
            Special emphasis has always been placed on Gentile families, helping
            them encounter Christ personally and experience transformation in
            every area of life.
          </p>
        </div>
      </section>

      {/* Ministries */}
      <section className="beliefs-pillars">
        <h2>Ministries That Build the Church</h2>
        <p className="section-intro">
          Over the years, Mahima Church has developed structured ministries to
          serve the Kingdom of Christ in a systematic and Spirit-led manner.
        </p>

        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>Worship Ministry</h3>
            <p>Spirit-filled worship services that glorify God and lead believers into His presence.</p>
          </div>

          <div className="pillar-card">
            <h3>Teaching & Discipleship</h3>
            <p>Systematic Bible teaching, doctrinal foundations, and leadership training.</p>
          </div>

          <div className="pillar-card">
            <h3>Prayer Ministry</h3>
            <p>Fasting prayers, intercession, healing prayers, and all-night prayer meetings.</p>
          </div>

          <div className="pillar-card">
            <h3>Youth & Children</h3>
            <p>Spiritual nurturing through Sunday School, youth fellowships, camps, and mentoring.</p>
          </div>

          <div className="pillar-card">
            <h3>Women’s Ministry</h3>
            <p>Encouraging women to grow spiritually, strengthen families, and serve faithfully.</p>
          </div>

          <div className="pillar-card">
            <h3>Evangelism & Missions</h3>
            <p>Ongoing outreach across villages, towns, and cities of Andhra Pradesh and Telangana.</p>
          </div>
        </div>
      </section>

      {/* Holistic Ministry */}
      <section className="beliefs-holistic">
        <h2>Holistic Ministry</h2>
        <p className="holistic-intro">
          We believe the Gospel must be both proclaimed and demonstrated through love and service.
        </p>

        <ul className="holistic-list">
          <li>Care for the poor and needy</li>
          <li>Support for widows and orphans</li>
          <li>Educational assistance for underprivileged children</li>
          <li>Food distribution and relief work</li>
          <li>Prayer and counseling for families in crisis</li>
        </ul>

        <p className="holistic-note">
          These acts of compassion reflect the heart of Christ and affirm our
          commitment to caring for body, soul, and spirit.
        </p>
      </section>

    </div>
  );
}

export default Beliefs;




// /* Beliefs.css */
// .beliefs-container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 40px 20px;
//   font-family: sans-serif;
//   color: #333;
// }

// .beliefs-hero {
//   text-align: center;
//   margin-bottom: 60px;
// }

// .beliefs-hero h1 {
//   font-size: 2.5rem;
//   color: #2c3e50;
//   margin-bottom: 10px;
// }

// .beliefs-subtitle {
//   font-size: 1.2rem;
//   color: #7f8c8d;
//   font-style: italic;
// }

// .beliefs-mission {
//   background-color: #f8f9fa;
//   padding: 40px;
//   border-left: 5px solid #3498db; /* Blue accent */
//   margin-bottom: 60px;
//   text-align: center;
// }

// .mission-statement {
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #2c3e50;
//   margin: 20px 0;
// }

// .beliefs-pillars {
//   margin-bottom: 60px;
// }

// .beliefs-pillars h2 {
//   text-align: center;
//   font-size: 2rem;
//   margin-bottom: 30px;
// }

// .section-intro {
//   text-align: center;
//   max-width: 700px;
//   margin: 0 auto 40px auto;
//   line-height: 1.6;
// }

// .pillars-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 30px;
// }

// .pillar-card {
//   background: white;
//   padding: 30px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//   text-align: center;
//   border-top: 4px solid #e67e22; /* Orange accent */
// }

// .pillar-card h3 {
//   color: #2c3e50;
//   margin-bottom: 15px;
// }

// .beliefs-holistic {
//   text-align: center;
//   max-width: 800px;
//   margin: 0 auto;
// }

// .holistic-list {
//   list-style: none;
//   padding: 0;
//   margin-top: 30px;
//   text-align: left;
// }

// .holistic-list li {
//   margin-bottom: 15px;
//   padding-left: 20px;
//   border-left: 3px solid #27ae60; /* Green accent */
// }

// .ourstory-text {
//   margin-bottom: 20px;
//   font-size: 1rem;
// }