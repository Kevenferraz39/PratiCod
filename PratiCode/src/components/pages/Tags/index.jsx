import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import Styles from './Tags.module.css'
import NavBar from "../../NavBar"
import Footer from "../../Footer"
import html_Icon from '../../../assets/img/icon/html.svg'
import react_Icon from '../../../assets/img/icon/react.svg'
import git_Icon from '../../../assets/img/icon/git.svg'
import js_Icon from '../../../assets/img/icon/javascript.svg'
import json_Icon from '../../../assets/img/icon/json.svg'
import node_Icon from '../../../assets/img/icon/nodejs.svg'
import php_Icon from '../../../assets/img/icon/php.svg'
import ruby_Icon from '../../../assets/img/icon/ruby.svg'
import css_Icon from '../../../assets/img/icon/css.svg'
import sql_icon from '../../../assets/img/icon/database.svg'

const Tags = () => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        // Verificar se o modal já foi mostrado anteriormente
        const hasShownModal = localStorage.getItem('hasShownModal')
        if (!hasShownModal) {
            setShowModal(true)
            localStorage.setItem('hasShownModal', 'true')
        }
    }, [])

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <Helmet>
                <title>Conteudo</title>
            </Helmet>
            <NavBar />
            {showModal && (
                <div className={Styles.modal}>
                    <div className={Styles.modalContent}>
                        <h2> Bem-vindo à Nossa Página de Conteúdos!</h2>
                        <p>
                            É com imensa alegria que te recebemos aqui! 🌟
                            <br/><br/>
                            Neste espaço, você terá acesso a uma vasta gama de conteúdos que vão te ajudar a dominar diversas tecnologias essenciais para o desenvolvimento web. Nossa missão é tornar sua jornada de aprendizado a mais prazerosa e produtiva possível. Aqui você encontrará:<br/><br/>
                        </p>
                        <ul>
                            <li><span>HTML5:</span> A base de toda página web. Vamos explorar suas tags, atributos e melhores práticas para criar estruturas robustas.</li>
                            <li><span>CSS3:</span> A magia por trás do estilo. Aprenda a estilizar suas páginas com elegância e eficiência.</li>
                            <li><span>React:</span> Uma biblioteca poderosa para construir interfaces dinâmicas e reativas. Vamos juntos desvendar seus segredos.</li>
                            <li><span>JavaScript:</span> O motor que dá vida às suas páginas. Desde conceitos básicos até técnicas avançadas.</li>
                            <li><span>PHP:</span> A linguagem do lado do servidor que pode transformar suas páginas em aplicações completas.</li>
                            <li><span>Git:</span> Controle de versão essencial para qualquer desenvolvedor. Mantenha seu código organizado e colaborativo.</li>
                            <li><span>SQL:</span> Domine a arte de manipular bancos de dados e faça consultas poderosas.</li>
                            <li><span>Ruby:</span> Uma linguagem elegante e produtiva, perfeita para quem valoriza simplicidade e eficiência.</li>
                            <li><span>Node.js:</span> Leve seu JavaScript para o lado do servidor e construa aplicações escaláveis.</li>
                            <li><span>JSON:</span> Formato leve e eficiente para troca de dados. Fundamental para integrações e APIs.</li>
                        </ul><br/>
                        <p>
                            Sinta-se à vontade para explorar cada um desses tópicos e aproveitar ao máximo os materiais que preparamos com tanto carinho. Nossa comunidade está aqui para te apoiar em cada passo da sua jornada.
                            <br/>
                            Prepare-se para mergulhar em um mundo de conhecimento e inovação. Vamos juntos transformar ideias em realidade!
                            <br/><br/>
                            Bem-vindo e aproveite a sua estadia! 🚀✨
                        </p>
                        <button onClick={handleCloseModal} className={Styles.modalButton}>Fechar</button>
                    </div>
                </div>
            )}
            <div className={Styles.main}>
                <div className={Styles.containerLinks}>
                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML 5</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagehtml" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>
                    
                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={css_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>CSS 3</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagecss" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={js_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>JavaScript</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagejs" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={sql_icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>SQL</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagesql" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={php_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>PHP</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagephp" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={react_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>React js</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagereact" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={node_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Node js</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagenode" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={json_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>JSON</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagejson" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={git_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Git</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pagegit" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={ruby_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Ruby</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pageruby" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={ruby_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Ruby</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pageruby" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={ruby_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Ruby</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link to="/Pageruby" className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tags
