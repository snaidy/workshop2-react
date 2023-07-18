import React, { useEffect, useState } from "react";
import imageH from "../../assets/mobile/image-hero.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import Header from "../header/header.jsx";
import "./headerMob.scss";

const HeaderMob = () => {
  const [widthMobile, setWidthMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 885) {
      setWidthMobile(true);
    } else {
      setWidthMobile(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {widthMobile ? (
        <div className="header">
          <figure className="header__img">
            <img src={imageH} alt="ImagenMobile" />
          </figure>
          <div className="logo">
            <div className="logo__superior">
              <h2>loopstudios</h2>
              <figure className="menu-icon" onClick={handleMenuToggle}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </figure>
            </div>
            <p className="parr">
              IMMERSIVE <br /> EXPERIENCES <br /> THAT <br /> DELIVER
            </p>
          </div>
          {isMenuOpen && (
            <nav className="menuMob">
              <ul className="menu__list">
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
            </nav>
          )}
        </div>
      ) : (
        <header>
          <Header />
        </header>
      )}
    </>
  );
};

export default HeaderMob;
