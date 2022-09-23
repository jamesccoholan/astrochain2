import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Cast from "./Components/Cast";
import Roadmap from "./Components/Roadmap";
// import EpisodeGuide from "./Components/Episodes/EpisodeGuide";
import Rarity from "./Components/Rarity";
import ValueProp from "./Components/ValueProp/ValueProp";
import IU from "./Components/IU";
import Credits from "./Components/Credits";

import { ScrollingProvider } from "react-scroll-section";

const preloadImages = [
  // Home
  "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPageBG_v05_i56UQD6n7.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPage_Mobile_v02_f1nwEPXs5.mp4",
  // Cast Front/Back Images
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/01_Pete2D.png",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/01_Pete3D.jpg",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/02_Monty2D.png",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/02_Monty3D.jpg",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/03_Sam2D.png",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/03_Sam3D.jpg",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/04_Journey2Dpng",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/04_Journey3D.jpg",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/05_Claudine2D.png",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/05_Claudine3D.jpg",
  // Cast Videos
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Pete/01.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Pete/02.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Pete/03.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Monty/01.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Monty/02.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Monty/03.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Sam/01.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Sam/02.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Sam/03.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Journey/01.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Journey/02.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Journey/03.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Claudine/01.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Claudine/02.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Claudine/03.mp4",
  // Episode Guide
  "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/EpisodeGuide_BG_v04_nHVWmjoP5G.jpg",
  "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/EpisodesGuide_BG_Mobile_v02_Fqw1nvJ4J.jpg",
  // Road Map
  "https://ik.imagekit.io/5ierklngtbt/IU/03_Road_Map/RoadMap_BG_v04_Mx-H8KuhG.mp4",
  "https://ik.imagekit.io/5ierklngtbt/IU/03_Road_Map/RoadMap_BG_Mobile_v02_WzPQewhSA.mp4",
];

class App extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      innerWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    // Add resizing event listner
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    // Pro-load all necessary images/videos for the site
    preloadImages.forEach((i) => {
      const newImage = new Image();
      newImage.src = i;
      window[i] = newImage;
    });
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
          {/* <EpisodeGuide innerWidth={this.state.innerWidth} /> */}
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
