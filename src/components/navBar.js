  import LogoDropIt from "./LogoDropIt"
  import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className = "barraNavegacion">
          <LogoDropIt />
          <ul className = "opciones">
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Hombres</a></li>
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Mujeres</a></li>
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Niños</a></li>
                <li><a href = "https://www.coderhouse.com.mx/" className= "linkNavBar">Iniciar Sesión</a></li>
            </ul>
          <CartWidget />
        </nav>
    )
}

export default NavBar;