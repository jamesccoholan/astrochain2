import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cast from "./Components/Cast";
import Roadmap from "./Components/Roadmap";
import EpisodeGuide from "./Components/EpisodeGuide";
import Season1 from "./Components/Season1";
import Rarity from "./Components/Rarity";
import ValueProp from "./Components/ValueProp/ValueProp";
import IU from "./Components/IU";
import Credits from "./Components/Credits";

import { ScrollingProvider } from "react-scroll-section";

class App extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      innerWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ innerWidth: window.innerWidth });
  }

  render() {
    return (
      <ScrollingProvider offset={0}>
        <div className="App">
          <Header innerWidth={this.state.innerWidth} />
          <Cast />
          <EpisodeGuide innerWidth={this.state.innerWidth} />
          <Season1 />
          <ValueProp />
          <Rarity />
          <Roadmap innerWidth={this.state.innerWidth} />
          <IU />
          <Credits />
        </div>
      </ScrollingProvider>
    );
  }
}

export default App;
