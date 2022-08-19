import React from 'react'
import "./header.css"
import img from "../img/zapatillaColorIcono.svg"

const Header = ({titulo, subtitulo}) => {
  return (
    <div className = "banner">
      <h1 className = "anuncio">{titulo}</h1>
      <img src = {img} className = "jordanBanner" alt = "zapatilla" />
      <h2>{subtitulo}</h2>
    </div>
  )
}

export default Header
