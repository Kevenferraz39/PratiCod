import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom' // Adicione esta importação
import Styles from './page.module.css'
import NavBar from '../../../../NavBar'
import Footer from '../../../../Footer'
import DDLjson from '../ComandDDL.json'

const PageDDL = () => {
    return(
        <>
           <Helmet>
                <title>SQL || DDL</title>
            </Helmet>
            <NavBar />
            <div className={Styles.containerr}>
                <div className={Styles.sideNav}>
                        {DDLjson.map((item, index) => (
                            <Link key={index} to={item.route}>
                                <span>{item.tag}</span>
                            </Link>
                        ))}
                </div>
                <div className={Styles.main}>
                    {/* Conteúdo principal aqui */} 
                </div>
            </div>
           <Footer />
        </>
    )
}
export default PageDDL