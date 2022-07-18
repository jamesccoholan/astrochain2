import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import CastPages from "./Components/CastPages";
import Roadmap from "./Components/Roadmap";
import EpisodeGuide from "./Components/EpisodeGuide";
import Season1 from "./Components/Season1";
import Rarity from "./Components/Rarity";
import ValueProp from "./Components/ValueProp";
import Info from "./Components/Info";
import IU from "./Components/IU";

import { Section, ScrollingProvider } from "react-scroll-section";

function App() {
  return (
    <ScrollingProvider offset={0}>
      <div className="App">
        <NavBar />
        <Header />
        <CastPages />
        <Roadmap />
        <EpisodeGuide />
        <Season1 />
        <Rarity />
        <ValueProp />
        <Info />
        <IU />
      </div>
    </ScrollingProvider>
  );
}

export default App;
