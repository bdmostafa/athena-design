import React from "react";
import logo from '../../../../images/logo.png';
import './Navbar.css';

const NavbarHeader = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-top">
        <a class="navbar-brand" href="#">
          <img style={{ width: "100px" }} src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <img  alt="" />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link active" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link customButton" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default NavbarHeader;
