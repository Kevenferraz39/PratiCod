import style from './Footer.module.css'; 
import Logo from '../../assets/img/png/Logo2.png'

const Footer = () => {
    return (
        <footer className={style.Footer}>
            <div className={style['footer-container']}>
                <div className={style['logo-space']}>
                    <img src={Logo} alt="logo alternativa" className={style.logofoter} />
                    <p></p>
                </div>
                <div className={style.information}>
                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>

                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>

                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>

                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>

                    {/* Outras listas aqui */}
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <center><p>© PratiCode. Todos os direitos reservados.</p></center>
        </footer>
    );
};

export default Footer;
