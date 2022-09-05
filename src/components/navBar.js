import LogoDropIt from "./LogoDropIt"
import CartWidget from "./CartWidget"
import React from "react"
import {Link} from "react-router-dom"

// Import views
// import SneakerDetail from "../views/SneakerDetail/SneakerDetail"
// import Home from "../views/home/Home"
// import Hombres from "../views/hombres/Hombres"
// import Mujeres from "../views/mujeres/Mujeres"
// import Niños from "../views/niños/Niños"
// import Login from "../views/LogIn/Login"

const NavBar = () => {
  return (
    <nav className = "barraNavegacion">
    <Link to = "/"><LogoDropIt /></Link> 
        <ul className = "opciones">
              <Link to= "/hombres">Hombres</Link>
              <Link to= "/mujeres">Mujeres</Link>
              <Link to= "/kids">Niños</Link>
              <Link to= "/login">Login</Link>
        </ul>
    <CartWidget />
      </nav>
  )
}

export default NavBar;