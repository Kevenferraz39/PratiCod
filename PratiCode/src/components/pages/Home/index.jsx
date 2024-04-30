import Footer from "../../Footer"
import NavBar from "../../NavBar"
import Container from '../../Container'
import { Helmet } from "react-helmet"
const Home = () => {
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <NavBar/> 
            <Container/>
            <Footer/>
        </>
    )
}

export default Home