import { Helmet } from 'react-helmet'
import Styles from './page.module.css'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer'
const Pagecss = () => {
    return(
        <>
            <Helmet>
                <title>Page || CSS3</title>
            </Helmet>
            <NavBar/>
           <div className={Styles.main}>
            
           </div>
           <Footer/>
        </>
    )
}

export default Pagecss