import React from "react";
import "./footer.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
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

      <span className="footer__text">© 2021 Loopstudios. All rights reserved. </span>
    </div>
  );
};

export default Footer;
