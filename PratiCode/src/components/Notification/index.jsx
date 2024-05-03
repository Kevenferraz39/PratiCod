import Styles from './Notification.module.css'
const Notification = () => {
    return(
        <div className={Styles.notification}>
            <div className={Styles.notiglow}></div>
            <div className={Styles.notiborderglow}></div>
            <div className={Styles.notititle}>Bem vindo ao PratiCode</div>
            <div className={Styles.notibody}>Contribute to Open Source UI Elements</div>
        </div>
    )
}

export default Notification