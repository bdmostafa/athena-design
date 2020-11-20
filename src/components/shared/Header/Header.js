import React from "react";
import Banner from "./Banner";
import NavbarTop from "./NavbarTop";

const Header = () => {
  return (
    <>
      <section className="banner">
        <div className="banner-bg"></div>
        <div className="nav-bg"></div>
        <div className="dot-dot"></div>
        <div className="banner-bg-right"></div>
        <div className="banner-dot"></div>
        <div className="studio-top"></div>
        <div className="studio-bottom"></div>
        <div className="pink-ball"></div>
        <div className="small-pink-ball"></div>
        <div className="blue-ball"></div>

        <div className="container">
          <NavbarTop />
          <Banner />
        </div>
      </section>
    </>
  );
};

export default Header;
