
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// Components
import NavBar from "./components/navBar";
import Header from "./components/header"
import ZapatillasCard from "./components/CardComponent/ZapatillaCard"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetail from './components/ItemDetail';
import ItemList from "./components/ItemList"


function App() {
  return (
  <body className = "body">
    <div >
      <header className="App-header">
      <NavBar />
      <ItemListContainer 
      greeting = "Soy el greeting"/>
      </header>
        <Header 
        titulo = "Tus nuevas Jordan te están esperando"
        subtitulo = "Podés encontrarlas en Drop It"
        />
      <div className = "cards">
      <div className = "cards-individual">
        <ZapatillasCard
        image = "https://cdn-images.farfetch-contents.com/17/68/92/00/17689200_37154678_1000.jpg"
        //image = "./components/img/airJordan.svg"
        name = "Air Jordan 1 Mid - Negro" 
        price = "$1200"
        description = "Logo Air Jordan Wings característico, detalle del logo, panel en contraste, detalle de perforaciones, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, diseño por el tobillo, plantilla con logo y suela de goma. Material: Cuero. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.."
        />
      </div>
      <div className = "cards-individual">
        <ZapatillasCard
        image = "https://cdn-images.farfetch-contents.com/15/81/95/56/15819556_37007103_1000.jpg"
        //image = "./components/img/airJordan.svg"
        name = "Tenis Dunk Low SP Community Garden"
        price = "$2300"
        description = "Características
        puntera redonda
        suela plana de goma
        cierre con agujetas en la parte delantera
        estampado floral
        Estos estilos llegan a nosotros gracias a un marketplace de tenis especializados y piezas difíciles de conseguir. Cada producto es rigurosamente inspeccionado por expertos que garantizan su autenticidad."
        />
      </div>
      <div className = "cards-individual">
        <ZapatillasCard
        image = "https://cdn-images.farfetch-contents.com/13/12/32/06/13123206_21511417_1000.jpg"
        //image = "./components/img/airJordan.svg"
        name = "Tenis Air Jordan 3 Retro"
        price = "$4300"
        description = "Puntera redonda y cierre con cordón.
Composición
Suela: Goma 100%
Exterior: Cuero 100%
Forro: Poliéster 100%"
        />
      </div>

      <div className = "cards-individual">
        <ZapatillasCard
        image = "https://cdn-images.farfetch-contents.com/14/60/16/40/14601640_22559259_1000.jpg"
        //image = "./components/img/airJordan.svg"
        name = "Tenis Air Jordan 6 Retro Cactus Jack de Jordan x Travis Scott"
        price = "$5700"
        description = "Características:
        
        color verde oliva, negro y rojo
        piel de nobuk
        plantilla con logo
        cierre con agujetas en la parte delantera
        diseño por el tobillo
        
        Composición
        Suela: Goma 100%
        
        Exterior: Cuero 100%, Ante 100%, Lona 100%
        
        Forro: Poliéster 100%"
        />
      </div>

      <div className = "cards-individual">
        <ZapatillasCard
        image = "https://cdn-images.farfetch-contents.com/17/76/89/38/17768938_38630461_1000.jpg"
        //image = "./components/img/airJordan.svg"
        name = "Tenis Air Jordan 1 High OG Brotherhood"
        price = "$2860"
        description = "Logo Air Jordan Wings característico, detalle del logo Swoosh característico, panel en contraste, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, diseño por el tobillo, plantilla con logo y suela de goma. Material: Cuero. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..
        Composición
        Suela: Goma 100%
        
        Forro: Tela 100%
        
        Exterior: Cuero 100%"
        />
      </div>

      <div>
          <ItemList />
      </div>
<Router>
  <div>
    <Routes>
      <Route path= '/detail/:id' element={<ItemDetail />}/>
    </Routes>
  </div>
</Router>
      </div>  
    </div>
   
    </body>
  );
}

export default App;
