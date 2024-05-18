import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Styles from './page.module.css'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer' 
import SqlComand from './SqlComand.json'

const Pagesql = () => {
    return (
        <>
            <Helmet>
                <title>Page || SQL</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                    {SqlComand.map((item, index) => (
                        <Link key={index} to={item.route}>
                            <span>{item.tag}</span>
                        </Link>
                    ))}
                </div>
                <div className={Styles.main}>
                    {/* Conteúdo principal aqui */}
                </div>
            </div> {/* Feche a div `containerr` aqui */}
            <Footer />
        </>
    )
}

export default Pagesql
