import React, { Component } from "react";
import "./Episodes.css";

class Episodes extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      innerWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    // set resizing event listner
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    // pre-load mobile and non-mobile images
    const backgroundImg = new Image();
    backgroundImg.src = "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/EpisodesGuide_BG_v03_UlwcvzPCW.jpg";
    window["https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/EpisodesGuide_BG_Mobile_v02_Fqw1nvJ4J.jpg"] = backgroundImg;
    const mobileBackgroundImg = new Image();
    mobileBackgroundImg.src = "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/EpisodesGuide_BG_Mobile_v02_Fqw1nvJ4J.jpg";
    window["https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/EpisodesGuide_BG_Mobile_v02_Fqw1nvJ4J.jpg"] = mobileBackgroundImg;
  }

  resize() {
    this.setState({ innerWidth: window.innerWidth });
  }

  getBackgroundImage(innerWidth) {
    if (innerWidth <= 600) return "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/EpisodesGuide_BG_Mobile_v02_Fqw1nvJ4J.jpg";
    return "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/EpisodesGuide_BG_v03_UlwcvzPCW.jpg";
  }

  render() {
    return (
      <div class="episode-guide">
        <img
          class="background-img"
          src={this.getBackgroundImage(this.state.innerWidth)}
          alt="Episode Guide"
        />
        <section id="episode-guide-section" />
        <img
          class="spotlight-1-img"
          src="https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_01.png"
          alt="Spotlight 1"
        />
        <div>
          <h2 class="episode-guide-title">EPISODE GUIDE</h2>
          <text class="episode-guide-description">
            {
              "This is where the Metaverse and Real World converge! New episodes are released twice weekly. Click on the link to watch the current episode or click on any previous link to watch earlier episodes."
            }
          </text>
        </div>
      </div>
    );
  }
}

export default Episodes;
