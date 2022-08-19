
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

        <ZapatillasCard
        image = "."
        name = "Air Jordan 1 Mid - Negro" 
        price = "$1200"
        />
      </body>
    </div>
  );
}

export default App;
