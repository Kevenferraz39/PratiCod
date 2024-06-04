import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Navbar.module.css";
import Logo from '../../assets/img/png/Logo.png';
import LogoText from '../../assets/img/png/LogoBFT.png'
import icon_menu from '../../assets/img/icon/menu.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav>
          <div className={styles["nav-content"]}>
            <Link to="/Home">
              <img src={LogoText} alt="Logotexto" className={styles.LogoTexto}/>
              <img src={Logo} alt="Logo" className={styles.LogoFoto} /> 
            </Link>
            <ul className={`${styles.NavLinks} ${menuOpen ? styles.open : ''}`}>
              <li><Link to="/Home" className={`${styles.NavLink} ${location.pathname === '/Home' ? styles.active : ''}`}><span>Home</span></Link></li>

              <li><Link to="/Conteudo" className={`${styles.NavLink} ${location.pathname === '/Conteudo' ? styles.active : ''}`}><span>Conteudo</span></Link></li>

              <li><Link to="/Exercicios" className={`${styles.NavLink} ${location.pathname === '/Exercicis' ? styles.active : ''}`}><span>Exercicios</span></Link></li>

              <li><Link to="/Sobre" className={`${styles.NavLink} ${location.pathname === '/Sobre' ? styles.active : ''}`}><span>Sobre</span></Link></li>

              <li><Link to="/" className={styles.NavLink}><span>Login</span></Link></li>
            </ul>
            <div className={styles["nav-icons-container"]}> 
              <img src={icon_menu} alt="menu" className={styles["menu-button"]} onClick={toggleMenu} /> 
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
