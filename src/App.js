import "./App.css";
import Header from "./Components/Header";
import Cast from "./Components/Cast";
import Roadmap from "./Components/Roadmap";
import Episodes from "./Components/Episodes";
import Season1 from "./Components/Season1";
import Rarity from "./Components/Rarity";
import ValueProp from "./Components/ValueProp";
import IU from "./Components/IU";
import Credits from "./Components/Credits";
import FAQs from "./Components/FAQs";

import { Section, ScrollingProvider } from "react-scroll-section";

function App() {
  return (
    <ScrollingProvider offset={0}>
      <div className="App">
        <Header />
        <Cast />
        <Episodes />
        <Season1 />
        <ValueProp />
        <Rarity />
        <Roadmap />
        <IU />
        <Credits />
        <FAQs />
      </div>
    </ScrollingProvider>
  );
}

export default App;
