import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import Logo from '../../assets/img/png/Logo.png';
import LogoText from '../../assets/img/png/LogoBFT.png'
import icon_menu from '../../assets/img/icon/menu.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav>
          <div className={styles["nav-content"]}>
            <Link to="/">
              <img src={LogoText} alt="Logotexto" className={styles.LogoTexto}/>
              <img src={Logo} alt="Logo" className={styles.LogoFoto} /> 
            </Link>
            <ul className={`${styles.NavLinks} ${menuOpen ? styles.open : ''}`}>
              <li>
                <Link to="/" className={styles.NavLink}><span>Home</span></Link> 
              </li>
              <li>
                <Link to="/Tags" className={styles.NavLink}><span>Tags</span></Link> 
              </li>
              <li>
                <Link to="/Exercicis" className={styles.NavLink}><span>Exercicios</span></Link> 
              </li>
              <li>
                <Link to="/Sobre" className={styles.NavLink}><span>Sobre</span></Link> 
              </li>
            </ul>
          </div>
          <div className={styles["nav-icons-container"]}> 
            <img src={icon_menu} alt="menu" className={styles["menu-button"]} onClick={toggleMenu} /> 
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
