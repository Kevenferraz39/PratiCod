import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './Cadastro.css'
import baner from '../../../assets/img/png/LogoRFB.png'
import Loginho from '../../../assets/img/png/Logo.png'
import Footer from '../../Footer'


const Cadastro = () => {
    return(
        <>
            <Helmet>
                <title>Cadastro</title>
            </Helmet>
        <div className="containerLogin">
        <div className="containerForms">
                        <div className="form-container">
                    <img src={Loginho} alt="logo pequena" className='loginho' />
                    <form className="form">
                        <div className="input-group">
                            <label for="username">Nome de usuario</label>
                            <input type="text" name="username" id="username" placeholder="&nbsp;Digite o seu nome completo"/>
                        </div>
                        <div className="input-group">
                            <label for="date">Data de Nascimento</label>
                            <input type="date" name="date" id="date" placeholder="&nbsp;Digite dateu nomedatepleto"/>
                        </div>
                        <div className="input-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="&nbsp;Digite o seu Email"/>
                        </div>
                        <div className="input-group">
                            <label for="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="&nbsp;Defina a sua senha"/>
                        </div>
                        <div className="input-group">
                            <label for="password">Confirme a senha</label>
                            <input type="password" name="password" id="password" placeholder="&nbsp;Confirme a sua senha"/>
                        </div><br/>
                        <Link className="sign" to="/">Cadastrar</Link>
                    </form><br/>
                    <p className="signup">ja possui uma conta? &nbsp; 
                        <Link rel="noopener noreferrer" to="/" className="">Voltar ao login</Link>
                    </p>
                </div>
            </div>
            <div className="containerImagem">
                <img src={baner} alt="imagem baner" />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Cadastro