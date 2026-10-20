import React from "react";
import img1 from "../../images/image21.jpg";
import img2 from "../../images/music1.jpg"

function Whattoexpect() {
  return (
    <div style={{ backgroundColor: "white", padding: "40px 20px" }}>
      {/* TOP SECTION */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: "400",
            fontFamily: "Georgia, serif",
            color: "#111",
            marginBottom: "20px",
          }}
        >
          Welcome to Mahima Church
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#444",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          We're glad you're here! You've probably got questions. This is a great
          place to get started.
        </p>
      </div>

      {/* TEXT + IMAGE SECTION */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE TEXT */}
        <div style={{ flex: "1 1 400px", maxWidth: "600px", order: 1 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: "500",
              fontFamily: "Georgia, serif",
              color: "#111",
              marginBottom: "10px",
            }}
          >
            What to expect
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            Everyone—men and women, along with kids through young adults—can find
            a welcoming place to belong, grow, and contribute to a vibrant
            community through our diverse ministries.
          </p>

          {/* BUTTON */}
          <a
            href="/locations"
            style={{
              padding: "14px 34px",
              backgroundColor: "#000",
              color: "white",
              borderRadius: "6px",
              fontSize: "18px",
              textDecoration: "none",
              transition: "0.3s",
              display: "inline-block",
              marginBottom: "20px",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.7")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Locations
          </a>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            Learn more and get connected at any of our campuses.
          </p>

          {/* LOCATIONS / PRAYER TOWERS SECTION */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              textAlign: "left",
            }}
          >
            {/* Prasadamapdu */}
            <div
              style={{
                flex: "1 1 260px",
                borderLeft: "4px solid #000",
                paddingLeft: "16px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                Mahima Prayer Tower – Prasadamapdu
              </h3>
              <p><strong>Timings:</strong></p>
              <p>Every Sunday Praise & Worship: 8:30 AM – 10:30 AM</p>
              <p>Every Friday Healing Prayers: 5 PM – 7 PM</p>
              <p><strong>Contacts:</strong></p>
              <p>Bro. Devaraju @ +91 87123 90777</p>
              <p>Sis. Deboramma @ +91 91605 01681</p>
            </div>

            {/* Currency Nagar */}
            <div
              style={{
                flex: "1 1 260px",
                borderLeft: "4px solid #000",
                paddingLeft: "16px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                Mahima Prarthana Mandiram – Currency Nagar / Ramavarappadu
              </h3>
              <p><strong>Timings:</strong></p>
              <p>Every Sunday Praise & Worship: 10:30 AM – 12:30 PM</p>
              <p><strong>Contacts:</strong></p>
              <p>Pastor Bose @ +91 70362 57777</p>
              <p>Sis. Sumadhuramma @ +91 97016 96395</p>
            </div>

            {/* Kondapur Hyderabad */}
            <div
              style={{
                flex: "1 1 260px",
                borderLeft: "4px solid #000",
                paddingLeft: "16px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                Mahima Prayer Tower – Kondapur, Hyderabad
              </h3>
              <p><strong>Timings:</strong></p>
              <p>Every Sunday Praise & Worship: 10 AM – 12 PM</p>
              <p>Every Friday Healing Prayers: 6 PM – 8 PM</p>
              <p><strong>Contacts:</strong></p>
              <p>Sis. Jyothamma @ +91 88867 38515</p>
              <p>Bro. Rajesh @ +91 99895 02004</p>
            </div>

            {/* Mandhadum */}
            <div
              style={{
                flex: "1 1 260px",
                borderLeft: "4px solid #000",
                paddingLeft: "16px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                Mahima Prayer Tower – Mandhadum
              </h3>
              <p><strong>Timings:</strong></p>
              <p>Every Sunday Praise & Worship: 8 AM – 10 AM</p>
              <p>Every Friday Healing Prayers: 3 PM – 6 PM</p>
              <p><strong>Contacts:</strong></p>
              <p>Bro. Niranjan @ +91 95814 94946</p>
              <p>Pastor Peter @ +91 91602 32392</p>
            </div>

            {/* Thulluru */}
            <div
              style={{
                flex: "1 1 260px",
                borderLeft: "4px solid #000",
                paddingLeft: "16px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                Mahima Prayer Tower – Thulluru
              </h3>
              <p><strong>Timings:</strong></p>
              <p>Every Sunday Praise & Worship: 10 AM – 12 PM</p>
              <p>Every Friday Healing Prayers: 6 PM – 9 PM</p>
              <p><strong>Contacts:</strong></p>
              <p>Sis. Sailamma @ +91 94916 66738</p>
              <p>Sis. Sulochanamma @ +91 891-9830802</p>
            </div>

            {/* Kanchikacherla */}
            <div
              style={{
                flex: "1 1 260px",
                borderLeft: "4px solid #000",
                paddingLeft: "16px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                Mahima Prayer Tower – Kanchikacherla
              </h3>
              <p><strong>Timings:</strong></p>
              <p>Every Sunday Praise & Worship: 4 PM – 6 PM</p>
              <p><strong>Contacts:</strong></p>
              <p>Bro. Devaraju @ +91 87123 90777</p>
              <p>Bro. Cephas @ +91 8309-509297</p>
            </div>

            {/* Dachepalli */}
            <div
              style={{
                flex: "1 1 260px",
                borderLeft: "4px solid #000",
                paddingLeft: "16px",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                Mahima Prayer Tower – Dachepalli
              </h3>
              <p><strong>Timings:</strong></p>
              <p>Every Sunday Praise & Worship: 10 AM – 12 PM</p>
              <p>Every Friday Healing Prayers: 6 PM – 9 PM</p>
              <p><strong>Contacts:</strong></p>
              <p>Pastor Yehoshuva @ +91 97056 44966</p>
              <p>Bro. Niranjan @ +91 95814 94946</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES WITH CAPTIONS */}
<div
  style={{
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "450px",
    order: 2,
  }}
>
  {[
    { src: img1, caption: "Biblical teaching" },
    { src: img2, caption: "Contemporary music" },
    { src: img1, caption: "Kids learning about Jesus" },
  ].map((item, index) => (
    <div key={index}>
      <img
        src={item.src}
        alt={item.caption}
        style={{
          width: "100%",
          height: "400px",
          maxHeight: "450px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          color: "#555",
          marginTop: "8px",
        }}
      >
        {item.caption}
      </p>
    </div>
  ))}
</div>

        
      </div>
    </div>
  );
}

export default Whattoexpect;