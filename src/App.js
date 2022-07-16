import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import CastPages from "./Components/CastPages";
import Roadmap from "./Components/Roadmap";
import EpisodeGuide from "./Components/EpisodeGuide";
import Season1 from "./Components/Season1";
import Rarity from "./Components/Rarity";
import Info from "./Components/Info";
import IU from "./Components/IU";

import { Section } from "react-scroll-section";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <CastPages component={Section} id="castPages" />
      <Roadmap />
      <EpisodeGuide />
      <Season1 />
      <Rarity />
      <Info />
      <IU />
    </div>
  );
}

export default App;
