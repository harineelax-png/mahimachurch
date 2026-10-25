import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Clock3, MapPin, Navigation, X } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

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

const locationStyles = `
  .locations-page .campus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
    max-width: 1400px;
    margin: 60px auto 0;
    padding: 0 20px;
    align-items: stretch;
  }

  .locations-page .location-card-reveal {
    display: flex;
    min-width: 0;
    height: 100%;
  }

  .locations-page .location-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(27, 39, 62, 0.08);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    border: 1px solid var(--brand-border, #e6e9ee);
  }

  .locations-page .location-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(27, 39, 62, 0.15);
  }

  .locations-page .location-card-image {
    width: 100%;
    height: 220px !important;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .locations-page .location-card:hover .location-card-image {
    transform: scale(1.05);
  }

  .locations-page .location-card-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 24px;
    background: #ffffff;
  }

  .locations-page .location-card-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--brand-ink, #1e2433);
    margin: 0 0 16px;
    flex-grow: 1;
    line-height: 1.4;
  }

  /* Location text above the buttons */
  .locations-page .location-card-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: auto;
    width: 100%;
    border-top: none;
    padding-top: 0;
  }

  .locations-page .location-card-address {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    color: var(--brand-muted, #5b6475);
    font-weight: 500;
  }

  /* Buttons side by side */
  .locations-page .location-card-actions {
    display: flex;
    gap: 12px;
    width: 100%;
  }

  .locations-page .location-card-actions button {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 16px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .locations-page .location-card-actions button.location-card-button {
    background: #ffffff;
    border: 1px solid var(--brand-border, #e6e9ee);
    color: var(--brand-ink, #1e2433);
  }

  .locations-page .location-card-actions button.location-card-button:hover {
    background: var(--brand-soft, #fdf1f5);
    border-color: var(--brand-primary, #c8102e);
    color: var(--brand-primary, #c8102e);
  }

  .locations-page .location-card-actions button.location-card-button-primary {
    background: var(--brand-primary, #c8102e);
    border: 1px solid var(--brand-primary, #c8102e);
    color: #ffffff;
  }

  .locations-page .location-card-actions button.location-card-button-primary:hover {
    background: var(--brand-deep, #9e0b22);
    border-color: var(--brand-deep, #9e0b22);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .locations-page .campus-grid {
      grid-template-columns: 1fr;
      padding: 0 16px;
    }
    .locations-page .location-card-image {
      height: 200px !important;
    }
  }
`;

function Sundays() {
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    if (!openModal) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenModal(false);
        setModalItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal]);

  // All campus data
  const campuses = [
    {
      id: "prasadam",
      title: "Mahima Prayer Tower - Prasadamapdu",
      cardTitle: "Mahima Rock Church",
      address: "Prasadamapdu",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Rock Church,6-134, BMPS Rd, SER Center, Prasadampadu, currency nagar, Vijayawada, Andhra Pradesh 521108",
      campusImage: imag1,
      pastorName: "Pastor Bose",
      pastorImage: pastorPrasadam,
      worshipTimes: [
        "Every Sunday Praise & Worship Service: 8:30 AM to 10:30 AM",
        "Every Friday Healing Prayers: 5 PM to 7 PM",
      ],
      contacts: [
        "Bro. Devaraju – +91 87123 90777",
        "Sis. Deboramma – +91 91605 01681",
      ],
    },
    {
      id: "currency",
      title: "Mahima Prarthana Mandiram – Currency Nagar / Ramavarappadu",
      cardTitle: "Mahima Prathana Mandiram",
      address: "Currency Nagar / Ramavarappadu",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Church,GMCG+CWC, currency nagar, Vijayawada, Andhra Pradesh 520008",
      campusImage: imag2,
      pastorName: "Pastor Bose",
      pastorImage: pastorCurrency,
      worshipTimes: ["Every Sunday Praise & Worship Service: 10:30 AM to 12:30 PM"],
      contacts: [
        "Pastor Bose – +91 70362 57777",
        "Sis. Sumadhuramma – +91 97016 96395",
      ],
    },
    {
      id: "thullur",
      title: "Mahima Prayer Tower – Thulluru",
      cardTitle: "Mahima Prayer Tower",
      address: "Thulluru",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Church,GFH9+74W, Thullur, Amaravati, Andhra Pradesh 522237",
      campusImage: imag3,
      pastorName: "Pastor Peter",
      pastorImage: pastorThullur,
      worshipTimes: [
        "Every Sunday Praise & Worship Service: 10 AM to 12 PM",
        "Every Friday Healing Prayers: 6 PM to 9 PM",
      ],
      contacts: [
        "Sis. Sailamma – +91 94916 66738",
        "Sis. Sulochanamma – +91 891-9830802",
      ],
    },
    {
      id: "mandhadum",
      title: "Mahima Prayer Tower – Mandhadum",
      cardTitle: "Mahima Prayer Tower",
      address: "Mandhadum",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Church,GG9C+7R7, Mandadam, Amaravati, Andhra Pradesh 522241",
      campusImage: imag4,
      pastorName: "Pastor Peter",
      pastorImage: pastorMandhadum,
      worshipTimes: [
        "Every Sunday Praise & Worship Service: 8:00 AM to 10:00 AM",
        "Every Friday Healing Prayers: 3 PM to 6 PM",
      ],
      contacts: [
        "Bro. Niranjan – +91 95814 94946",
        "Pastor Peter – +91 91602 32392",
      ],
    },
    {
      id: "kondapur",
      title: "Mahima Prayer Tower – Kondapur, Hyderabad",
      cardTitle: "Mahima Prayer Tower",
      address: "Kondapur, Hyderabad",
      mapsUrl:
        "https://www.google.com/maps/search/Mahima Prayer Tower,F9F7+4MX, RTO Kondapur Rd, Kondapur, New Hafeezpet, Bikshapathi Nagar, Hyderabad, Telangana 500084",
      campusImage: imag5,
      pastorName: "Sis. Jyothamma",
      pastorImage: pastorKondapur,
      worshipTimes: [
        "Every Sunday Praise & Worship Service: 10 AM to 12 PM",
        "Every Friday Healing Prayers: 6 PM to 8 PM",
      ],
      contacts: [
        "Sis. Jyothamma – +91 88867 38515",
        "Bro. Rajesh – +91 99895 02004",
      ],
    },
    {
      id: "dachepalli",
      title: "Mahima Prayer Tower – Dachepalli",
      cardTitle: "Mahima Church",
      address: "Dachepalli",
      mapsUrl: "https://www.google.com/maps/search/Community+Hub",
      campusImage: imag6,
      pastorName: "Pastor Yehoshuva",
      pastorImage: pastorDachepalli,
      worshipTimes: [
        "Every Sunday Praise & Worship Service: 10 AM to 12 PM",
        "Every Friday Healing Prayers: 6 PM to 9 PM",
      ],
      contacts: [
        "Pastor Yehoshuva – +91 97056 44966",
        "Bro. Niranjan – +91 95814 94946",
      ],
      hideMap: true, // Kept from your original code
    },
    {
      id: "kanchikacherla",
      title: "Mahima Prayer Tower – Kanchikacherla",
      cardTitle: "Mahima Church",
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
      worshipTimes: ["Every Sunday Praise & Worship Service: 4 PM to 6 PM"],
      contacts: [
        "Bro. Devaraju – +91 87123 90777",
        "Bro. Cephas – +91 8309-509297",
      ],
      hideMap: true, // Kept from your original code
    },
  ];

  const openMore = (item) => {
    setModalItem(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setModalItem(null);
  };

  return (
    <>
      <style>{locationStyles}</style>
      <div
        className="locations-page"
        style={{
          backgroundColor: "#f8eee6",
          minHeight: "100vh",
          padding: "24px 20px 60px",
          textAlign: "center",
        }}
      >
        {/* Title (Replaced "You belong here" with "Location") */}
        <h1
          className="locations-title site-page-title"
        >
          Location
        </h1>

        {/* GRID */}
        <div className="campus-grid">
          {campuses.map((item, index) => (
            <ScrollReveal key={item.id} className="location-card-reveal" delay={(index % 4) * 0.06}>
              <article className="location-card">
                <img
                  className="location-card-image"
                  src={item.campusImage}
                  alt={item.cardTitle}
                />
                <div className="location-card-content">
                  <p className="location-card-title">
                    {item.cardTitle}
                  </p>
                  
                  {/* Location is now ABOVE the buttons */}
                  <div className="location-card-footer">
                    <span className="location-card-address">
                      <MapPin size={15} aria-hidden="true" /> {item.address}
                    </span>
                    <div className="location-card-actions">
                      {/* View button now always displays */}
                      <button
                        onClick={() => {
                          if (item.mapsUrl) {
                            window.open(item.mapsUrl, "_blank");
                          } else {
                            alert("Directions not available for this location.");
                          }
                        }}
                        className="location-card-button"
                        type="button"
                      >
                        <FaMapMarkerAlt aria-hidden="true" /> View
                      </button>
                      
                      <button
                        onClick={() => openMore(item)}
                        className="location-card-button location-card-button-primary"
                        type="button"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* MODAL */}
        {openModal && modalItem && (
          <div
            onClick={closeModal}
            className="locations-modal-backdrop"
            role="presentation"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="modal-container"
              role="dialog"
              aria-modal="true"
              aria-labelledby="location-modal-title"
            >
              <button
                onClick={closeModal}
                className="modal-close"
                aria-label="Close location details"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="modal-left">
                <span className="theme-eyebrow">Mahima Church location</span>
                <h2 id="location-modal-title">{modalItem.cardTitle}</h2>
                <p className="location-modal-address"><MapPin size={17} aria-hidden="true" /> {modalItem.address}</p>

                <div className="location-detail-block">
                  <h3><Clock3 size={18} aria-hidden="true" /> Worship times</h3>
                  <ul className="location-detail-list">
                    {modalItem.worshipTimes.map((time) => <li key={time}>{time}</li>)}
                  </ul>
                </div>

                <div className="location-detail-block">
                  <h3>Connect with the team</h3>
                  <ul className="location-contact-list">
                    {modalItem.contacts.map((contact) => <li key={contact}>{contact}</li>)}
                  </ul>
                </div>

                {modalItem.pastors ? (
                  <div className="location-detail-block">
                    <h3>Campus ministry team</h3>
                    <div className="location-pastors">
                      {modalItem.pastors.map((pastor, index) => (
                        <div
                          key={index}
                          className="location-pastor"
                        >
                          <img
                            src={pastor.image}
                            alt={pastor.name}
                          />
                          <span>{pastor.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="location-detail-block">
                    <h3>Campus pastor</h3>
                    <div className="location-pastor">
                      <img
                        src={modalItem.pastorImage}
                        alt={modalItem.pastorName}
                      />
                      <span>{modalItem.pastorName}</span>
                    </div>
                  </div>
                )}

                {/* Directions button now always displays */}
                <a
                  className="location-directions-button"
                  href={modalItem.mapsUrl || "#"}
                  target={modalItem.mapsUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!modalItem.mapsUrl) {
                      e.preventDefault();
                      alert("Directions are currently unavailable for this location.");
                    }
                  }}
                >
                  <Navigation size={17} aria-hidden="true" /> Get directions
                </a>
              </div>

              <div className="modal-right">
                <img
                  src={modalItem.campusImage}
                  alt={modalItem.cardTitle}
                />
                <div className="location-image-caption">
                  <span className="theme-eyebrow">A place to belong</span>
                  <p>{modalItem.title}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sundays;