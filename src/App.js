import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Cast from "./Components/Cast";
import Roadmap from "./Components/Roadmap";
import EpisodeGuide from "./Components/Episodes/EpisodeGuide";
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
          <Home innerWidth={this.state.innerWidth} />
          <Cast />
          <EpisodeGuide innerWidth={this.state.innerWidth} />
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
