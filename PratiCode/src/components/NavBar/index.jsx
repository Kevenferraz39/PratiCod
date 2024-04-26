import './Navbar.module.css'
import Logo from '../../assets/img/png/Logo.png'
import usuario from '../../assets/img/icon/Usuario.png'
const NavBar = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <h1>PRATICODE</h1>
                        <img src={Logo} alt="Logo" className='Logofoto'/>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Tag</li>
                        <li>About</li>
                        <li>Exrcise</li>
                    </ul>
                    <div className="user">
                        <img src={usuario} alt="usuario" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar