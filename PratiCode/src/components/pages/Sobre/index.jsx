import { Helmet } from "react-helmet"
import NavBar from "../../NavBar"
import Styles from "./Sobre.module.css"
import Footer from "../../Footer"
const Sobre = () => {
    return(
        <>
        <Helmet>
            <title>Sobre</title>
        </Helmet>
            <NavBar/>
            <div className={Styles.main}>

            </div>
            <Footer/>
        </>
    )
}

export default Sobre