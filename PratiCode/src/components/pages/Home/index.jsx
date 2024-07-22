import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import Styles from './home.module.css';

const Home = () => {
  
  const handleLogout = () => {
    // Remove os itens de login do localStorage e redireciona para a página de login
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/Login');
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />
      <div className={Styles.main}>
       
      </div>
      <Footer />
    </>
  );
};

export default Home;
