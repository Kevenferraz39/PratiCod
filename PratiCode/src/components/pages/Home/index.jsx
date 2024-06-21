import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import Footer from "../../Footer"
import NavBar from "../../NavBar"
import Styles from './home.module.css'
import Notification from '../../Notification'  

const Home = () => {
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        // Verifica se a notificação já foi exibida anteriormente
        const hasShownNotification = localStorage.getItem('hasShownNotification')

        if (!hasShownNotification) {
            // Exibe a notificação se ela ainda não foi exibida
            setShowNotification(true)

            // Define um timeout para ocultar a notificação após 5 segundos
            const timeout = setTimeout(() => {
                setShowNotification(false)
            }, 5000)

            // Armazena no localStorage que a notificação foi exibida
            localStorage.setItem('hasShownNotification', 'true')

            // Limpa o timeout ao desmontar o componente
            return () => clearTimeout(timeout)
        }
    }, []) // Executa o efeito apenas uma vez quando o componente é montado

    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <NavBar/>
            <div className={Styles.main}>
                {showNotification && <Notification />}{/* Exibe a notificação apenas se showNotification for true */}
            </div>
            <Footer/>
        </>
    )
}

export default Home
