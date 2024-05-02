import NavBar from '../../NavBar';
import Styles from './Page404.module.css'; // Certifique-se de que o caminho está correto

const Error404 = () => {
    return(
        <>
            <Helmet>
                <title>Page Not Found || 404</title>
            </Helmet>
            <NavBar/>
            <section className={Styles.information_404}>
                 <div className={Styles.information_container_404}>
                    <h1>404</h1>
                    <p>Page not found!</p>
                </div>
            </section>
        </>
    );
};

export default Error404;
