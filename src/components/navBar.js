import logoAzulSinFondo from '../img/logoAzulSinFondo.svg';

const NavBar = () => {
    return (
        <nav className = "barraNavegacion">
            <img src={logoAzulSinFondo} className="logo-navbar" alt="logo" />
            <ul className = "opciones">
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Hombres</a></li>
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Mujeres</a></li>
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Niños</a></li>
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Iniciar Sesión</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;