import React, { useContext } from 'react'
import "./header.css"
import img from "../img/zapatillaColorIcono.svg"
import {useItemContext} from "./CartContext"

const Header = ({titulo, subtitulo}) => {
  const [data, setData] = useContext(useItemContext)
  return (
    <div className = "banner">
      <p>Productos en tienda: {data.length}</p>
      <h1 className = "anuncio">{titulo}</h1>
      <img src = {img} className = "jordanBanner" alt = "zapatilla" />
      <h2 className = "anuncio">{subtitulo}</h2>
    </div>
  )
}

export default Header
