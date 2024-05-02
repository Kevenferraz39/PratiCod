import { Helmet } from "react-helmet"
import NavBar from '../../NavBar';
import Footer from '../../Footer';
import Styles from './Error404A.module.css'; 
import img from '../../../assets/img/svg/error.svg'// Certifique-se de que o caminho está correto

const Error404Alternate = () => {
    return(
        <>
            <Helmet>
                <title>Page Not Found || 404</title>
            </Helmet>
            <NavBar/>
            <section className={Styles.information_404}>
                 <img src={img} alt="imagem 404 not found" className={Styles.imagem} />
            </section>
            <Footer />
        </>
    );
};

export default Error404Alternate;
