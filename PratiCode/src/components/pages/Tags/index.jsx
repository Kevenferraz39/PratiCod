import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom';
import Styles from './Tags.module.css'
import NavBar from "../../NavBar"
import Footer from "../../Footer"
import html_Icon from '../../../assets/img/icon/html.svg'

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
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>
                    
                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
                        </div>
                        <div className={Styles.containerBtn}>
                            <Link className={Styles.button}><span>Ver mais</span></Link>
                        </div>
                    </div>

                    <div className={Styles.pageLink}>
                        <div className={Styles.containerImg}>
                            <img src={html_Icon} alt="icone do html" />
                        </div>
                        <div className={Styles.containerTitle}>
                            <h3>Tags HTML</h3>
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