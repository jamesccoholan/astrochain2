import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <a component={Section} id="collection" href="#news">
        Here
      </a>
      <header className="App-header">
        <h3>Hello</h3>
      </header>
    </div>
  );
}

export default App;
