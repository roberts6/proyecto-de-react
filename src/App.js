
import './App.css';


// Components
import NavBar from "./components/navBar";
import Header from "./components/header"

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
      </body>
    </div>
  );
}

export default App;
