import NavBar from "../../NavBar"
import { Helmet } from "react-helmet"
import Styles from "./Exercicios.module.css"
import Footer from "../../Footer"
const Exercicio = () => {
    return(
        <>
        <Helmet>
            <title>Exercicios</title>
        </Helmet>
            <NavBar/>
            <div className={Styles.main}>

            </div>
            <Footer/>
        </>
    )
}

export default Exercicio