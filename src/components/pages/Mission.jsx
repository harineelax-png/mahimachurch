import React from "react";

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

function Mission() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ---------------- TOP SLIDER ---------------- */
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  /* ---------------- LOWER SLIDER ---------------- */
  const bottomSlides = [
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new8,
  ];
  const [bottomSlide, setBottomSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBottomSlide((prev) => (prev + 1) % bottomSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bottomSlides.length]);

  return (
    <div className="mission-page">
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
          backgroundColor:"#f6efe9",
          paddingTop: "2.5rem",
          paddingBottom: "0rem", // reduced bottom space
        }}
      >
        {/* ---------------- TITLE ---------------- */}
        <div style={{ textAlign: "center", padding: "0 20px" }}>
          <h2
            style={{
              fontSize: "38px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#222",
            }}
          >
            Mahima Gospel Messengers
          </h2>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#555",
              fontSize: "20px",
              lineHeight: "1.6",
              marginBottom: "40px",
            }}
          >
            A visual glimpse of how Mahima serves our community with compassion,
            love, and dedication.
          </p>
        </div>

        {/* ---------------- BOTTOM AUTO SLIDER ---------------- */}
        <div
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
                opacity: bottomSlide === index ? 1 : 0,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Mission;