import React from "react";
import { Link } from "react-router-dom";

const BootstrapNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">Mahima</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>

            {/* DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                About
              </a>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about/our-story">Our Story</Link></li>
                <li><Link className="dropdown-item" to="/about/leadership">Leadership</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/about/mission">Mission</Link></li>
                <li><Link className="dropdown-item" to="/about/beliefs">Beliefs</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/watch-online">Watch Online</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default BootstrapNavbar;
