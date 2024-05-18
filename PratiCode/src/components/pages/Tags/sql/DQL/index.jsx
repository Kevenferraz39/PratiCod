import { Helmet } from 'react-helmet'
import Styles from './page.module.css'
import NavBar from '../../../../NavBar'
import Footer from '../../../../Footer'
const PageDQL = () => {
    return(
        <>
           <Helmet>
                <title>SQL || DQL</title>
            </Helmet>
            <NavBar/>
           <div className={Styles.main}>
            
           </div>
           <Footer/>
        </>
    )
}
export default PageDQL