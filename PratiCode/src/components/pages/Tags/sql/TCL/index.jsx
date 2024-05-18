import { Helmet } from 'react-helmet'
import Styles from './page.module.css'
import NavBar from '../../../../NavBar'
import Footer from '../../../../Footer'
const PageTCL = () => {
    return(
        <>
           <Helmet>
                <title>SQL || TCL</title>
            </Helmet>
            <NavBar/>
           <div className={Styles.main}>
            
           </div>
           <Footer/>
        </>
    )
}
export default PageTCL