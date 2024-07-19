import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import baner from '../../../assets/img/png/LogoBFR.png';
import Loginho from '../../../assets/img/png/Logo.png';
import Footer from '../../Footer';
import Loginjson from '../../../controller/login.json';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = Loginjson.find(
      (user) => user.Usuario === username && user.Senha === password
    );

    if (user) {
      console.log('Login bem-sucedido:', user);
      setError('');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.Usuario);
      navigate('/Home');
    } else {
      console.log('Falha no login. Usuário ou senha incorretos.');
      setError('Nome de usuário ou senha incorretos.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="containerLogin">
        <div className="containerImagem">
          <img src={baner} alt="imagem banner" />
        </div>
        <div className="containerForms">
          <div className="form-container">
            <img src={Loginho} alt="logo pequena" className="loginho" />
            <form className="form" onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="username">Nome de usuário</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="forgot">
                  <a rel="noopener noreferrer" href="#">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <button type="submit" className="sign">Logar</button>
              {error && <p className="error">{error}</p>}
            </form>
            <div className="social-message">
              <div className="line"></div>
              <p className="message">Faça login com suas redes sociais</p>
              <div className="line"></div>
            </div>
            <div className="social-icons">
              {/* Botões de login social */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
