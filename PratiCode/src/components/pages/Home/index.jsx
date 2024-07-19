import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import Styles from './home.module.css';
import Notification from '../../Notification';

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');

    if (isLoggedIn && storedUsername) {
      setUsername(storedUsername);
      alert(`Bem-vindo, ${storedUsername}!`);
    } else {
      navigate('/Login');
    }

    const hasShownNotification = localStorage.getItem('hasShownNotification');

    if (!hasShownNotification) {
      setShowNotification(true);

      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      localStorage.setItem('hasShownNotification', 'true');

      return () => clearTimeout(timeout);
    }
  }, [navigate]);

  const handleLogout = () => {
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
        {showNotification && <Notification />}
        {username && (
          <div>
            <p>Bem-vindo, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
