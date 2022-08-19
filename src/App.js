
import './App.css';

// Components
import NavBar from "./components/navBar";
import Header from "./components/header"
import ZapatillasCard from "./components/CardComponent/ZapatillasCard"


function App() {
  return (
    <div >
      <header className="App-header">
      <NavBar />
      </header>
      <body className = "body">
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
      </div>  
      </body>
    </div>
  );
}

export default App;
