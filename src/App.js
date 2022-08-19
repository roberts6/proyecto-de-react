
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
        <ZapatillasCard
        image = "../src/img/airJordan.svg"
        name = "Air Jordan 1 Mid - Negro" 
        price = "$1200"
        />
      </div>  
      </body>
    </div>
  );
}

export default App;
