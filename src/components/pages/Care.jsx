// import React from "react";

// function Care() {
//     return(
//         <div>
//             hello
//         </div>
//     )
// }


// export default Care

import React from "react";
import "./Care.css";

import hero from "../../images/care1.png";
import care2 from "../../images/care2.webp";
import care4 from "../../images/care2.webp";
import care5 from "../../images/care2.webp";
import care6 from "../../images/care2.webp";
import care7 from "../../images/care2.webp";
import care8 from "../../images/care2.webp";

function Care() {

  const services = [

    { title: "Celebrate Recovery", image: care2 },
    { title: "Marriage Mentoring", image: care4 },
    { title: "Weddings", image: care5 },
    { title: "Funerals", image: care6 },
    { title: "DivorceCare", image: care7 },
    { title: "GriefShare", image: care8 },
  ];

  return (
    <div className="care-page">

      {/* HERO SECTION */}
      <div
        className="care-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay">
          <h1 className="site-page-title">Care & Support Ministries</h1>

          <button className="btn-primary">Find Support</button>

          <p className="get-prayer">Get Prayer →</p>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="care-content">
        <h2>Care & Support</h2>

        <p>
          Life's challenges, like grief, loss, divorce, or addiction,
          require community support. These challenging life experiences
          can leave you feeling isolated, overwhelmed, and vulnerable.
          A strong community offers comfort, understanding, and practical
          help, allowing individuals to heal, grow, and find hope.
        </p>

        <p>
          Whether it be through counseling, support groups, or simply
          having a listening ear, the presence of care and support can
          help mend broken hearts, offer hope amidst despair, and guide
          individuals toward healing, recovery, and newfound strength.
        </p>

        <button className="btn-primary">Find Support</button>
      </div>


      {/* GRID CARDS */}
      <div className="care-grid">

        {services.map((item, index) => (
          <div className="care-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Care;