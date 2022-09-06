import LogoDropIt from "./LogoDropIt"
import CartWidget from "./CartWidget"
import React from "react"
import {Link} from "react-router-dom"


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