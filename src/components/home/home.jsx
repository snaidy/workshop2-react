import React from 'react'
import './home.scss'
import Header from '../header/header';

import Footer from '../footer/footer';
import MainMaquetacion from '../main/MainMaquetacion';
const Home = () => {
  return (
    <div>
        <Header />
        <MainMaquetacion />
        <Footer />
    </div>
  )
}

export default Home;