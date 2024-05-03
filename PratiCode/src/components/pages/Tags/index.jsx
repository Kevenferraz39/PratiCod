import { Helmet } from "react-helmet"
import Styles from './Tags.module.css'
import NavBar from "../../NavBar"
import Footer from "../../Footer"

const Tags = () => {
    return(
        <>
            <Helmet>
                <title>Tags</title>
            </Helmet>
            <NavBar />
            <div className={Styles.main}>

            </div>
            <Footer />
        </>
    )
}

export default Tags