import LogoDropIt from "./LogoDropIt"
import CartWidget from "./CartWidget"
import React from "react"
import {Link} from "react-router-dom"
import PositionedMenu from "./LoginOptions"


const NavBar = () => {
  return (
    <nav className = "barraNavegacion">
    <Link to = "/"><LogoDropIt /></Link> 
        <ul className = "opciones">
              <Link to= "/category/hombre">Hombres</Link>
              <Link to= "/category/mujer">Mujeres</Link>
              <Link to= "/category/niños">Niños</Link>
              {/* <Link to= "/login">Login</Link> */}
              <PositionedMenu />
        </ul>
   <Link to = "/cart">
   <CartWidget />
   </Link> 
      </nav>
  )
}

export default NavBar;