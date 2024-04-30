import Styles from './Page404.module.css'
const Error404 = () => {
    return(
        <>
            <Helmet>
                <title>page Not found || 404</title>
            </Helmet>
            <section className={Styles.information_404}>
                 <div className={Styles.information-container_404}>
                    <h1>404</h1>
                    <p>Page not found !</p>
                </div>
            </section>
        </>
    )
}

export default Error404