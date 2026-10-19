import React from "react";
import givingImage from "../../images/image9.jpg"; // background image
import img4 from "../../images/qrcode.jpg";

function Donate() {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: `url(${givingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 10vw, 70px)",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          GIFT
        </h1>

        <p
          style={{
            maxWidth: "1000px",
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: "1.6",
            fontStyle: "italic",
            marginBottom: "10px",
          }}
        >
          “God loves a cheerful giver”
        </p>

        <h3
          style={{
            fontSize: "clamp(18px, 4.5vw, 24px)",
            fontWeight: "700",
          }}
        >
          2 Corinthians 9:7
        </h3>
      </div>

      {/* TITLE 2 + SUBTITLE 2 */}
      <div
        style={{
          background: "white",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 6vw, 40px)",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Why we give
        </h2>

        <p
          style={{
            maxWidth: "900px",
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: "1.6",
            margin: "0 auto",
            color: "#555",
          }}
        >
         Your generous giving helps us in continuing to spread the message of hope & 
         love and in bringing about transformation in our community.
        </p>
      </div>

      {/* FINAL IMAGE (QR CODE) */}
      <div
        style={{
          width: "100%",
          // padding: "40px 20px 60px",
          background: "white",
        }}
      >
        <img
          src={img4}
          alt="QR Code for Giving"
          style={{
            width: "100%",
            // maxWidth: "850px",
            height: "350px",
            display: "block",
            // margin: "0",
          }}
        />
      </div>
    </div>
  );
}

export default Donate;
