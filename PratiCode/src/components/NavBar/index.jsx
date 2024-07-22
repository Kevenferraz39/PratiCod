import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";
import Logo from '../../assets/img/png/Logo.png';
import LogoText from '../../assets/img/png/LogoBFT.png';
import icon_menu from '../../assets/img/icon/menu.png';
import ImagemPerfil from '../../assets/img/png/LogoBFR.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está logado
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/Login');
  };

  const showModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };

  return (
    <>
      <header>
        <nav>
          <div className={styles["nav-content"]}>
            <Link to="/Home">
              <img src={LogoText} alt="Logotexto" className={styles.LogoTexto} />
              <img src={Logo} alt="Logo" className={styles.LogoFoto} /> 
            </Link>
            <ul className={`${styles.NavLinks} ${menuOpen ? styles.open : ''}`}>
              <li><Link to="/Home" className={`${styles.NavLink} ${location.pathname === '/Home' ? styles.active : ''}`}><span>Home</span></Link></li>
              <li><Link to="/Conteudo" className={`${styles.NavLink} ${location.pathname === '/Conteudo' ? styles.active : ''}`}><span>Conteúdo</span></Link></li>
              <li><Link to="/Exercicios" className={`${styles.NavLink} ${location.pathname === '/Exercicios' ? styles.active : ''}`}><span>Exercícios</span></Link></li>
              <li><Link to="/Sobre" className={`${styles.NavLink} ${location.pathname === '/Sobre' ? styles.active : ''}`}><span>Sobre</span></Link></li>
              {isLoggedIn ? (
              
                  <li><a href="#" onClick={showModal} style={{ width: 'auto' }}><span>Pefil</span></a></li>
                
              ) : (
                <li><Link to="/Login" className={styles.NavLink}><span>Login</span></Link></li>
              )}
            </ul>
            <div className={styles["nav-icons-container"]}> 
              <img src={icon_menu} alt="menu" className={styles["menu-button"]} onClick={toggleMenu} /> 
            </div>
          </div>
        </nav>
      </header>
      
      <div id="id01" className={styles.modal}>
        <form className={`${styles.modalContent} ${styles.animate}`} action="/action_page.php" method="post">
          <div className={styles.imgcontainer}>
            <span onClick={closeModal} className={styles.close} title="Close Modal">&times;</span>
            <img src={ImagemPerfil} alt="Avatar" className={styles.avatar} />
          </div>
          <div className={styles.container}>
            <div className={styles.informationUser}>
              <p>{localStorage.getItem('username')}</p>
              <p>{localStorage.getItem('email')}</p>
            </div>
            <div className={styles["button-container"]}> 
              <button className={styles.Vermais}><Link to="#">Ver mais</Link></button>
              <button className={styles.cadastro}><Link to="cadastro.html">Cadastre-se</Link></button>
             
            </div>
          </div>
          <div className={styles.container} style={{ backgroundColor: '#16181D' }}>
            <button onClick={handleLogout} className={styles.logout}>Logout</button>
            <span className={styles.psw}>Esqueceu a <a href="#">Senha?</a></span>
          </div>
        </form>
      </div>

    </>
  );
};

export default NavBar;
