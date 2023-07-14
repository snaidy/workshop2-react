import React from 'react';
import './footerDekstop.scss';

import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
const FooterDekstop = () => {
  return (
    <footer className="footerDek">
    <div className='footerDek__le'>
    <h1>loopstudios</h1>
    <section className='footerDek__le-span'>
    <span className="footerDek__derecho-sub">About</span>
    <span className="footerDek__derecho-sub">Careers</span>
    <span className="footerDek__derecho-sub">Events</span>
    <span className="footerDek__derecho-sub">Products</span>
    <span className="footerDek__derecho-sub">Support</span>
    </section>
        </div>
    <div className='footerDek__izquierdo'>
    <figure className="footerDek__izquierdo-img">
      <FaSquareFacebook />
      <BsTwitter />
      <BsPinterest />
      <BsInstagram />
    </figure>
    <span className="footerDek__izquierdo-text">
      © 2021 Loopstudios. All rights reserved.
    </span>
    </div>
  </footer>
  )
}

export default FooterDekstop;