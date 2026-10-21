import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.jpg";
import img4 from "../../images/image4.jpg";

const images = [img1, img2, img3, img4];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const btnStyle = {
    marginTop: "20px",
    padding: "12px 28px",
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: "30px",
    border: "none"
  };

  return (
    <header className="home-hero" style={heroStyle}>
      <div className="text-center">
        <h1 style={titleStyle}>Mahima Church</h1>
        <h2 style={subtitleStyle}>
          living by faith • known by love • a voice of hope
        </h2>

        {/* PLAN YOUR VISIT BUTTON */}
        <Link
          to="/what-to-expect"
          className="btn btn-primary rounded-pill"
          style={btnStyle}
        >
          PLAN YOUR VISIT
        </Link>
      </div>
    </header>
  );
};

export default Hero;

