import React from "react";
import "./home.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainMaquetacion from "../main/MainMaquetacion";
import HeaderMob from "../headerMob/headerMob";
const Home = () => {
  return (
    <div>
      <HeaderMob />
      <MainMaquetacion />
      <Footer />
    </div>
  );
};

export default Home;
