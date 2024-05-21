import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Styles from './page.module.css'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer'
import ComandDCL from './ComandDCL.json'
import ComandDDL from './ComandDDL.json'
import ComandDML from './ComandDML.json'
import ComandDQL from './ComandDQL.json'
import ComandTCL from './ComandTCL.json'
const Pagesql = () => {
    return (
        <>
            <Helmet>
                <title>Page || SQL</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    <details>
                        <summary>Commands DCL</summary>
                        {ComandDCL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands DDL</summary>
                        {ComandDDL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands DML</summary>
                        {ComandDML.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands DQL</summary>
                        {ComandDQL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                    <details>
                        <summary>Commands TCL</summary>
                        {ComandTCL.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                    </details>
                </div>
                <div className={Styles.main}>
                    {/* Conteúdo principal aqui */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pagesql
