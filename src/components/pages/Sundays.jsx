import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// CAMPUS PHOTOS
import imag1 from "./../../images/image5.jpg";
import imag2 from "./../../images/image6.jpg";
import imag3 from "./../../images/Thuchurch1.JPG";
import imag4 from "./../../images/manChurch1.jpg";
import imag5 from "./../../images/image16.jpg";
import imag6 from "./../../images/image11.jpg";
import imag7 from "./../../images/image11.jpg";

// PASTOR PHOTOS
import pastorPrasadam from "./../../images/image22.jpg";
import pastorCurrency from "./../../images/image22.jpg";
import pastorKondapur from "./../../images/image22.jpg";
import pastorMandhadum from "./../../images/image22.jpg";
import pastorThullur from "./../../images/image22.jpg";
import pastorKanchik from "./../../images/image27.jpg";
// import pastorDavaraju from "./../../images/image27.jpg";
import pastorVinay from "./../../images/vinay.jpg";
import pastorGurvaya from "./../../images/gurvaya1.jpg";

import pastorDachepalli from "./../../images/image22.jpg";

function Sundays() {
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  // Inject mobile responsive styles (grid + modal)
  // Wrapped in backticks to prevent syntax errors
  const responsiveStyles = `
    @media (max-width: 768px) {
      .campus-grid { grid-template-columns: 1fr !important; }
      .modal-container { flex-direction: column !important; max-height: 80vh !important; }
      .modal-left, .modal-right { width: 100% !important; }
      .modal-right img { height: 200px !important; object-fit: cover !important; }
      .modal-left { padding: 15px !important; }
      .modal-close { top: 10px !important; right: 10px !important; font-size: 20px !important; }
      .modal-left h3 { font-size: 20px !important; }
    }
  `;

  if (typeof document !== "undefined") {
    if (!document.getElementById("mobile-responsive")) {
      const tag = document.createElement("style");
      tag.id = "mobile-responsive";
      tag.innerHTML = responsiveStyles;
      document.head.appendChild(tag);
    }
  }

  // All campus data
  const campuses = [
    {
      id: "prasadam",
      title: "Mahima Prayer Tower - Prasadamapdu",
      cardTitle: "Mahima Rock Church - PrasadamPadu",
      address: "Prasadamapdu",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Rock Church,6-134, BMPS Rd, SER Center, Prasadampadu, currency nagar, Vijayawada, Andhra Pradesh 521108",
      campusImage: imag1,
      pastorName: "Pastor Bose",
      pastorImage: pastorPrasadam,
      worshipTimes: [
        "Sunday Worship: 8:30 AM – 10:30 AM",
        "Friday Healing Prayers: 5 PM – 7 PM",
      ],
      contacts: [
        "Bro. Devaraju – +91 87123 90777",
        "Sis. Deboramma – +91 91605 01681",
      ],
    },
    {
      id: "currency",
      title: "Mahima Prarthana Mandiram – Currency Nagar / Ramavarappadu",
      cardTitle: "Mahima Prathana Mandiram - Currency Nagar",
      address: "Currency Nagar / Ramavarappadu",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Church,GMCG+CWC, currency nagar, Vijayawada, Andhra Pradesh 520008",
      campusImage: imag2,
      pastorName: "Pastor Bose",
      pastorImage: pastorCurrency,
      worshipTimes: ["Sunday Worship: 10:30 AM – 12:30 PM"],
      contacts: [
        "Pastor Bose – +91 70362 57777",
        "Sis. Sumadhuramma – +91 97016 96395",
      ],
    },
    {
      id: "thullur",
      title: "Mahima Prayer Tower – Thulluru",
      cardTitle: "Mahima Prayer Tower - Thullur",
      address: "Thulluru",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Church,GFH9+74W, Thullur, Amaravati, Andhra Pradesh 522237",
      campusImage: imag3,
      pastorName: "Pastor Peter",
      pastorImage: pastorThullur,
      worshipTimes: [
        "Sunday Worship: 10 AM – 12 PM",
        "Friday Healing Prayers: 6 PM – 9 PM",
      ],
      contacts: [
        "Sis. Sailamma – +91 94916 66738",
        "Sis. Sulochanamma – +91 89198 30802",
      ],
    },
    {
      id: "mandhadum",
      title: "Mahima Prayer Tower – Mandhadum",
      cardTitle: "Mahima Prayer Tower - Mandhadum",
      address: "Mandhadum",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Church,GG9C+7R7, Mandadam, Amaravati, Andhra Pradesh 522241",
      campusImage: imag4,
      pastorName: "Pastor Peter",
      pastorImage: pastorMandhadum,
      worshipTimes: [
        "Sunday Worship: 8 AM – 10 AM",
        "Friday Healing Prayers: 3 PM – 6 PM",
      ],
      contacts: [
        "Bro. Niranjan – +91 95814 94946",
        "Pastor Peter – +91 91602 32392",
      ],
    },
    {
      id: "kondapur",
      title: "Mahima Prayer Tower – Kondapur, Hyderabad",
      cardTitle: "Mahima Prayer Tower - Kondapur",
      address: "Kondapur, Hyderabad",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Prayer Tower,F9F7+4MX, RTO Kondapur Rd, Kondapur, New Hafeezpet, Bikshapathi Nagar, Hyderabad, Telangana 500084",
      campusImage: imag5,
      pastorName: "Sis. Jyothamma",
      pastorImage: pastorKondapur,
      worshipTimes: [
        "Sunday Worship: 10 AM – 12 PM",
        "Friday Healing Prayers: 6 PM – 8 PM",
      ],
      contacts: [
        "Sis. Jyothamma – +91 88867 38515",
        "Bro. Rajesh – +91 99895 02004",
      ],
    },
    {
      id: "dachepalli",
      title: "Mahima Prayer Tower – Dachepalli",
      cardTitle: "Mahima Church - Dachepalli",
      address: "Dachepalli",
      mapsUrl: "https://www.google.com/maps/search/Community+Hub",
      campusImage: imag6,
      pastorName: "Pastor Yehoshuva",
      pastorImage: pastorDachepalli,
      worshipTimes: [
        "Sunday Worship: 10 AM – 12 PM",
        "Friday Healing Prayers: 6 PM – 9 PM",
      ],
      contacts: [
        "Pastor Yehoshuva – +91 97056 44966",
        "Bro. Niranjan – +91 95814 94946",
      ],
      hideMap: true, // Hides View/Directions
    },
    {
      id: "kanchikacherla",
      title: "Mahima Prayer Tower – Kanchikacherla",
      cardTitle: "Mahima Church - Kanchikacherla",
      address: "Kanchikacherla",
      mapsUrl: "https://www.google.com/maps/search/East+Campus",
      campusImage: imag7,
      pastors: [
        { name: "Bro. Devaraju", image: pastorKanchik },
        { name: "Bro. Vinay", image: pastorVinay },
        { name: "Bro. Gurvaya", image: pastorGurvaya },
      ],
      pastorName: "Bro. Devaraju",
      pastorImage: pastorKanchik,
      worshipTimes: ["Sunday Worship: 4 PM – 6 PM"],
      contacts: [
        "Bro. Devaraju – +91 87123 90777",
        "Bro. Cephas – +91 83095 09297",
      ],
      hideMap: true, // Hides View/Directions
    },
  ];

  const openMore = (item) => {
    setModalItem(item);
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpenModal(false);
    setModalItem(null);
    document.body.style.overflow = "";
  };

  return (
    <div
      style={{
        backgroundColor: "#f8eee6",
        minHeight: "100vh",
        padding: "120px 20px",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "80px",
          fontWeight: "400",
          fontFamily: "Georgia, serif",
          marginBottom: "30px",
        }}
      >
        You belong here
      </h1>

      {/* Subtitle */}
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "20px",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        Visiting for the first time can be overwhelming, but it doesn’t have to
        be! Whether you're checking things out or looking for a place to call
        home, you belong here.
      </p>

      {/* Header Row */}
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "900px",
          margin: "150px auto 0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontFamily: "Georgia, serif",
            fontWeight: "500",
          }}
        >
          Locations
        </h2>
        
      </div>

      {/* GRID */}
      <div
        className="campus-grid"
        style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {campuses.map((item) => (
          <div key={item.id} style={{ textAlign: "left" }}>
            <img
              src={item.campusImage}
              alt={item.cardTitle}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                fontFamily: "Georgia, serif",
                color: "#333",
              }}
            >
              {item.cardTitle}
            </p>
            <div
              style={{
                marginTop: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "16px", color: "#444" }}>
                📍 {item.address}
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                {/* HIDE VIEW BUTTON FOR DACHEPALLI & KANCHIKACHERLA */}
                {!item.hideMap && (
                  <button
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      border: "1px solid #000",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onClick={() => window.open(item.mapsUrl, "_blank")}
                  >
                    <FaMapMarkerAlt /> View
                  </button>
                )}
                <button
                  style={{
                    padding: "8px 14px",
                    borderRadius: "20px",
                    border: "1px solid #000",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => openMore(item)}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && modalItem && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "15px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-container"
            style={{
              width: "100%",
              maxWidth: "1000px",
              maxHeight: "100vh",
              background: "#fff",
              borderRadius: "12px",
              overflowY: "auto",
              display: "flex",
              position: "relative",
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="modal-close"
              style={{
                position: "sticky",
                top: "5px",
                right: "10px",
                marginLeft: "auto",
                fontSize: "20px",
                background: "#fff",
                border: "none",
                cursor: "pointer",
                zIndex: 100,
              }}
            >
              ✖
            </button>

            {/* LEFT SIDE */}
            <div className="modal-left" style={{ width: "50%", padding: "25px" }}>
              <h3 style={{ fontSize: "20px", fontFamily: "Georgia, serif" }}>
                {modalItem.title}
              </h3>
              <hr />
              <h4>Address</h4>
              <p>{modalItem.address}</p>

              {/* HIDE DIRECTIONS BUTTON IN MODAL */}
              {!modalItem.hideMap && (
                <button
                  onClick={() => window.open(modalItem.mapsUrl, "_blank")}
                  style={{
                    padding: "8px 8px",
                    borderRadius: "8px",
                    border: "1px solid #000",
                    background: "white",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  Directions
                </button>
              )}

              <h4>Worship Times</h4>
              {modalItem.worshipTimes.map((t, idx) => (
                <p key={idx}>{t}</p>
              ))}
              <h4 style={{ marginTop: "2px" }}>Contacts</h4>
              {modalItem.contacts.map((c, idx) => (
                <p key={idx}>{c}</p>
              ))}

              {/* DYNAMIC PASTOR SECTION */}
              {modalItem.pastors ? (
                <>
                  <h4 style={{ marginTop: "2px" }}>Campus Pastors</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {modalItem.pastors.map((pastor, index) => (
                      <div
                        key={index}
                        style={{ display: "flex", gap: "10px", alignItems: "center" }}
                      >
                        <img
                          src={pastor.image}
                          alt={pastor.name}
                          style={{
                            width: "75px",
                            height: "65px",
                            borderRadius: "5px",
                            objectFit: "cover",
                          }}
                        />
                        <span>{pastor.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h4 style={{ marginTop: "2px" }}>Campus Pastor</h4>
                  <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                    <img
                      src={modalItem.pastorImage}
                      alt={modalItem.pastorName}
                      style={{
                        width: "75px",
                        height: "65px",
                        borderRadius: "5px",
                        objectFit: "cover",
                      }}
                    />
                    <span>{modalItem.pastorName}</span>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="modal-right" style={{ width: "50%", minHeight: "300px" }}>
              <img
                src={modalItem.campusImage}
                alt={modalItem.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sundays;