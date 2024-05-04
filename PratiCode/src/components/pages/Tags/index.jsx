import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom';
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
    return(
        <>
            <Helmet>
                <title>Tags</title>
            </Helmet>
            <NavBar />
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
                            <Link to="/tagHtml" className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
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
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tags