import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

import imag1 from "./../../images/image5.jpg";
import imag2 from "./../../images/image6.jpg";
import imag3 from "./../../images/Thuchurch1.JPG";
import imag4 from "./../../images/manChurch1.jpg";
import imag5 from "./../../images/image16.jpg";

function COMEvents() {
  const events2026 = [
    // Fixed Christian Events
    { title: "Good Friday", date: "2026-04-03" },
    { title: "Easter", date: "2026-04-05" },
    { title: "Christmas", date: "2026-12-25" },

    // Church Anniversaries
    {
      title: "Church Anniversary - Prasadampadu",
      start: "2026-03-29",
      end: "2026-04-04",
      description: "Celebrating 34th year of Prasadampadu Church Anniversary from March 29th to April 4th, 6pm – 8pm.",
      imageUrl: imag1,
      locationUrl: "https://www.google.com/maps/search/Mahima Rock Church,6-134, BMPS Rd, SER Center, Prasadampadu, currency nagar, Vijayawada, Andhra Pradesh 521108",
    },
    {
      title: "Church Anniversary - Currency Nagar",
      date: "2026-10-02",
      description: "Celebrating 38th year of Currency Nagar Church Anniversary, 10am – 12pm.",
      imageUrl: imag2,
      locationUrl:  "https://www.google.com/maps/search/Mahima Church,GMCG+CWC, currency nagar, Vijayawada, Andhra Pradesh 520008",
    },
    {
      title: "Church Anniversary - Thullur",
      start: "2026-04-25",
      end: "2026-05-02",
      description: "Celebrating 28th year of Thullur Church Anniversary, 6pm – 8pm.",
      imageUrl: imag3,
      locationUrl:  "https://www.google.com/maps/search/Mahima Church,GFH9+74W, Thullur, Amaravati, Andhra Pradesh 522237",
    },

    {
      title: "Church Anniversary - Mandhadam",
      start: "2026-09-01",
      end: "2026-09-07",
      description: "Celebrating 8th year of Mandhadam Church Anniversary, 6pm – 8pm.",
      imageUrl: imag4,
      locationUrl:  "https://www.google.com/maps/search/Mahima Church,GG9C+7R7, Mandadam, Amaravati, Andhra Pradesh 522241",

    },

    {
      title: "Church Anniversary - Kondapur, Hyderabad",
      start: "2026-09-22",
      end: "2026-09-28",
      description: "Celebrating 3th year of Kondapur Church Anniversary, 6pm – 8pm.",
      imageUrl: imag5,
      locationUrl:  "https://www.google.com/maps/search/Mahima Prayer Tower,F9F7+4MX, RTO Kondapur Rd, Kondapur, New Hafeezpet, Bikshapathi Nagar, Hyderabad, Telangana 500084",

    },

    // Family Blessings
    {
      title: "3 Days Family Blessings Prayers",
      start: "2026-01-14",
      end: "2026-01-17",
      description: "Family Blessing Prayers 6pm – 8pm at Prasadampadu.",
      imageUrl: "/images/family-prayer.jpg",
      locationUrl: "https://maps.google.com/?q=Prasadampadu+Church",
    },

    // All Night Prayer
    { title: "All Night Prayer", date: "2026-01-18" },
    { title: "All Night Prayer", date: "2026-02-17" },
    { title: "All Night Prayer", date: "2026-03-18" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        // REMOVED initialDate="2026-01-01" so it defaults to Today (Feb 2026)
        validRange={{
          start: "2026-01-01",
          end: "2026-12-31",
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listMonth",
        }}
        buttonText={{
          listMonth: "List",
          month: "Grid"
        }}
        events={events2026}
        height="auto"
        eventDidMount={(info) => {
          const { description, imageUrl, locationUrl } = info.event.extendedProps;

          // Only create a tooltip if there is content to show
          if (description || imageUrl) {
            const instance = tippy(info.el, {
              content: `
                <div style="max-width:230px; text-align:center; padding: 5px;">
                  ${imageUrl ? `<img src="${imageUrl}" style="width:100%; border-radius:6px; margin-bottom:8px;" />` : ""}
                  <strong style="display:block; margin-bottom:6px;">${info.event.title}</strong>
                  ${description ? `<p style="font-size:12px; margin-bottom:10px; color: #555;">${description}</p>` : ""}
                  ${locationUrl ? `
                    <a href="${locationUrl}" target="_blank" style="
                      display:inline-block;
                      padding:6px 16px;
                      border:1px solid #198754;
                      border-radius:20px;
                      color:#198754;
                      font-size:12px;
                      font-weight:600;
                      text-decoration:none;
                    ">DIRECTIONS</a>` : ""}
                </div>
              `,
              allowHTML: true,
              theme: "light",
              placement: "top",
              interactive: true, // Allows users to click the "Directions" link
            });

            // Cleanup: Destroy tooltip when event element is removed
            info.el._tippy = instance;
          }
        }}
        eventWillUnmount={(info) => {
          if (info.el._tippy) {
            info.el._tippy.destroy();
          }
        }}
      />
    </div>
  );
}

export default COMEvents;



// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import tippy from "tippy.js";
// import "tippy.js/dist/tippy.css";

// function COMEvents() {
//   const events2026 = [
//     // Fixed Christian Events
//     { title: "Good Friday", date: "2026-04-03" },
//     { title: "Easter", date: "2026-04-05" },
//     { title: "Christmas", date: "2026-12-25" },

//     // Church Anniversaries (with different images + directions)
//     {
//       title: "Church Anniversary - Prasadampadu",
//       start: "2026-03-29",
//       end: "2026-04-04",
//       description:
//         "Celebrating 34th year of Prasadampadu Church Anniversary from March 29th to April 4th, 6pm – 8pm.",
//       imageUrl: "/images/prasadampadu.jpg",
//       locationUrl: "https://maps.google.com/?q=Prasadampadu+Church",
//     },
//     {
//       title: "Church Anniversary - Currency Nagar",
//       date: "2026-10-02",
//       description:
//         "Celebrating 38th year of Currency Nagar Church Anniversary, 10am – 12pm.",
//       imageUrl: "/images/currencynagar.jpg",
//       locationUrl: "https://maps.google.com/?q=Currency+Nagar+Church",
//     },
//     {
//       title: "Church Anniversary - Thullur",
//       start: "2026-04-25",
//       end: "2026-05-02",
//       description:
//         "Celebrating 28th year of Thullur Church Anniversary, 6pm – 8pm.",
//       imageUrl: "/images/thullur.jpg",
//       locationUrl: "https://maps.google.com/?q=Thullur+Church",
//     },

//     // Family Blessings
//     {
//       title: "3 Days Family Blessings Prayers",
//       start: "2026-01-14",
//       end: "2026-01-17",
//       description:
//         "Family Blessing Prayers 6pm – 8pm at Prasadampadu.",
//       imageUrl: "/images/family-prayer.jpg",
//       locationUrl: "https://maps.google.com/?q=Prasadampadu+Church",
//     },

//     // All Night Prayer (no image, no directions)
//     { title: "All Night Prayer", date: "2026-01-18" },
//     { title: "All Night Prayer", date: "2026-02-17" },
//     { title: "All Night Prayer", date: "2026-03-18" },
//   ];

//   return (
//     <div style={{ padding: "20px" }}>
//       <FullCalendar
//         plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
//         initialView="dayGridMonth"
//         initialDate="2026-01-01"
//         validRange={{
//           start: "2026-01-01",
//           end: "2026-12-31",
//         }}
//         headerToolbar={{
//           left: "",
//           center: "title",
//           right: "prev,next today listMonth",
//         }}
//         buttonText={{
//           listMonth: "List",
//         }}
//         events={events2026}
//         height="auto"

//         eventDidMount={(info) => {
//           const { description, imageUrl, locationUrl } =
//             info.event.extendedProps;

//           if (!description && !imageUrl) return;

//           tippy(info.el, {
//             content: `
//               <div style="max-width:230px; text-align:center;">
//                 ${
//                   imageUrl
//                     ? `<img 
//                         src="${imageUrl}" 
//                         style="width:100%; border-radius:6px; margin-bottom:8px;"
//                       />`
//                     : ""
//                 }

//                 <strong style="display:block; margin-bottom:6px;">
//                   ${info.event.title}
//                 </strong>

//                 ${
//                   description
//                     ? `<p style="font-size:12px; margin-bottom:10px;">
//                         ${description}
//                       </p>`
//                     : ""
//                 }

//                 ${
//                   locationUrl
//                     ? `<a 
//                         href="${locationUrl}" 
//                         target="_blank"
//                         style="
//                           display:inline-block;
//                           padding:6px 16px;
//                           border:1px solid #198754;
//                           border-radius:20px;
//                           color:#198754;
//                           font-size:12px;
//                           font-weight:600;
//                           text-decoration:none;
//                         "
//                       >
//                         DIRECTIONS
//                       </a>`
//                     : ""
//                 }
//               </div>
//             `,
//             allowHTML: true,
//             theme: "light",
//             placement: "top",
//           });
//         }}
//       />
//     </div>
//   );
// }

// export default COMEvents;