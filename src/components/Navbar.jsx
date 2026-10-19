// import React, { useState } from "react";
// import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

// // IMPORT YOUR LOGO
// import logo from "../images/logo4.jpg";  // <-- update path if needed

// const CustomNavbar = () => {
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <Navbar expand="lg" bg="transparent" variant="light" fixed="top" className="py-3">
//       <Container>

//         {/* ---- LOGO ---- */}
//         <Navbar.Brand as={Link} to="/" className="fw-bold">
//           <img
//             src={logo}
//             alt="Logo"
//             style={{
//               height: "45px",     // adjust size here
//               width: "250px",
//               objectFit: "contain",
//             }}
//           />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           <Nav className="mx-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>

//             {/* ABOUT DROPDOWN */}
//             <NavDropdown
//               id="about-dropdown"
//               title={
//                 <span
//                   onClick={() => navigate("/about")}
//                   style={{ cursor: "pointer" }}
//                 >
//                   About
//                 </span>
//               }
//               show={aboutOpen}
//               onMouseEnter={() => setAboutOpen(true)}
//               onMouseLeave={() => setAboutOpen(false)}
//             >
//               <NavDropdown.Item as={Link} to="/about/our-story">Our Story</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/about/leadership">Leadership</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/about/beliefs">Beliefs</NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link as={Link} to="/events">Events</Nav.Link>
//             <Nav.Link as={Link} to="/donate">Give</Nav.Link>
//             <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
//           </Nav>

//           {/* <Button
//             as={Link}
//             to="/watch-online"
//             variant="outline-primary"
//             className="rounded-pill"
//           >
//            Watch Online
//           </Button> */}
//           <Button
//   as="a"
//   href="https://www.youtube.com/@mahimaswaramu416"
//   target="_blank"
//   rel="noopener noreferrer"
//   variant="outline-primary"
//   className="rounded-pill"
// >
//   Watch Online
// </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;


import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// IMPORT YOUR LOGO
import logo from "../images/logo4.png";  // <-- update path if needed

const CustomNavbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar 
       expand="lg" 
  bg="white" 
  variant="light" 
  fixed="top" 
  className="py-0 shadow-sm"
>
  <Container className="py-0">

    <Navbar.Brand as={Link} to="/" className="fw-bold p-0 m-0">
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "70px",
          width: "90px",
          objectFit: "contain",
          display: "block",
        }}
      />
    </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* ABOUT DROPDOWN */}
            <NavDropdown
              id="about-dropdown"
              title={
                <span
                  onClick={() => navigate("/about")}
                  style={{ cursor: "pointer" }}
                >
                  About
                </span>
              }
              show={aboutOpen}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <NavDropdown.Item as={Link} to="/about/our-story">Our Story</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/leadership">Leadership</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/beliefs">Beliefs</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/donate">Give</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
          </Nav>

          {/* WATCH ONLINE BUTTON */}
          <Button
            as="a"
            href="https://www.youtube.com/@mahimaswaramu416"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-primary"
            className="rounded-pill px-4"
          >
            Watch Online
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;