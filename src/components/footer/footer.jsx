import React from "react";
import "./footer.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
import  { useEffect, useState } from 'react';
import FooterDekstop from "../footerDekstop/footerDekstop.jsx";
const Footer = () => {
  const [widthMovile, setWidthMovile] = useState();
  useEffect(() => {
      handleResize()
      window.addEventListener("resize", handleResize);
      return () =>{
          window.removeEventListener("resize", handleResize);
      }
  }, []);
  const handleResize = () => {
     const width = window.innerWidth;
     if(width <= 885){
      setWidthMovile(true);
     }else{
      setWidthMovile(false);
     }
  }

  return (
    <>
     {widthMovile? (
    <footer className="footer">
      <h1>loopstudios</h1>
      <span className="footer__sub">About</span>
      <span className="footer__sub">Careers</span>
      <span className="footer__sub">Events</span>
      <span className="footer__sub">Products</span>
      <span className="footer__sub">Support</span>
      <figure className="footer__img">
        <FaSquareFacebook />
        <BsTwitter />
        <BsPinterest />
        <BsInstagram />
      </figure>
      <span className="footer__text">
        © 2021 Loopstudios. All rights reserved.
      </span>
    </footer>
     ): (
      <footer>
        <FooterDekstop />
      </footer>
  )}

    </>
  );
};

export default Footer;
