import LogoDropIt from "./LogoDropIt"
import CartWidget from "./CartWidget"
import React from "react"
import {Link} from "react-router-dom"


const NavBar = () => {
  return (
    <nav className = "barraNavegacion">
    <Link to = "/"><LogoDropIt /></Link> 
        <ul className = "opciones">
              <Link to= "/category/hombres">Hombres</Link>
              <Link to= "/category/mujeres">Mujeres</Link>
              <Link to= "/category/kids">Niños</Link>
              <Link to= "/login">Login</Link>
        </ul>
   <Link to = "/cart">
   <CartWidget />
   </Link> 
      </nav>
  )
}

export default NavBar;