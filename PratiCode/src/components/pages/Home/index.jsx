import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import Notification from '../../Notification';
import Container from '../../Container';

const Home = () => {
    const [showNotification, setShowNotification] = useState(false); // Inicialmente, a notificação não será exibida

    useEffect(() => {
        // Exibe a notificação quando o componente for montado
        setShowNotification(true);

        // Define um timeout para ocultar a notificação após 5 segundos
        const timeout = setTimeout(() => {
            setShowNotification(false);
        }, 5000);

        // Limpa o timeout ao desmontar o componente
        return () => clearTimeout(timeout);
    }, []); // Executa o efeito apenas uma vez quando o componente é montado

    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <NavBar/>
            <div className="container">
                {showNotification && <Notification />} {/* Exibe a notificação apenas se showNotification for true */}
            </div>
            <Footer/>
        </>
    );
};

export default Home;
