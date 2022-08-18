import logo from './logo.svg';
import './App.css';


// Components
import NavBar from "./components/navBar";

function App() {
  return (
    <div >
      <header className="App-header">
      <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi nombre es Oscar Roberts
        </p>
        <p>
          Mi proyecto se llama "Drop iT"
        </p>
        <p>
          podés buscarme en <a className = "linkedin" href = "https://www.linkedin.com/in/oscar-roberts-529683a8/">LinkedIn</a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
