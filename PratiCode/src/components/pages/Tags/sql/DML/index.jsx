import { Helmet } from 'react-helmet'
import Styles from './page.module.css'
import NavBar from '../../../../NavBar'
import Footer from '../../../../Footer'
const PageDML = () => {
    return(
        <>
           <Helmet>
                <title>SQL || DML</title>
            </Helmet>
            <NavBar/>
           <div className={Styles.main}>
            
           </div>
           <Footer/>
        </>
    )
}
export default PageDML