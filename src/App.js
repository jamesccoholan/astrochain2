import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <a href="#news">News</a>
      <header className="App-header">
        <h3>Hello</h3>
      </header>
    </div>
  );
}

export default App;
