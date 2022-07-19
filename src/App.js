import "./App.css";
import Header from "./Components/Header";
import CastPages from "./Components/CastPages";
import Roadmap from "./Components/Roadmap";
import EpisodeGuide from "./Components/EpisodeGuide";
import Season1 from "./Components/Season1";
import Rarity from "./Components/Rarity";
import ValueProp from "./Components/ValueProp";
import IU from "./Components/IU";
import Credits from "./Components/Credits";

import { Section, ScrollingProvider } from "react-scroll-section";

function App() {
  return (
    <ScrollingProvider offset={0}>
      <div className="App">
        <Header />
        {/*<CastPages />*/}
        <EpisodeGuide />
        <ValueProp />
        <Rarity />
        <Roadmap />
        <Season1 />
        <IU />
        <Credits />
      </div>
    </ScrollingProvider>
  );
}

export default App;
