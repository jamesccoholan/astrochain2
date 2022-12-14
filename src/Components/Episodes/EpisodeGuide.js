import EpisodesList from "./EpisodesList";
import React, { Component } from "react";
import "./EpisodeGuide.css";

const spotlightsArr = [
  {
    number: 1,
    desktop_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_01_v03_nlak9CmH9.png",
    mobile_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/Spot_Light_01_Mobile_v02_yYf_jOzCz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659067039857",
    active: true,
  },
  {
    number: 2,
    desktop_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_02_v03_UFlv560zf.png",
    mobile_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/Spot_Light_02_Mobile_v02_HMFkCVOBp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659067039932",
    active: true,
  },
  {
    number: 3,
    desktop_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_03.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659039930890",
    mobile_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/Spot_Light_03_Mobile_v01_mbw3SuFfBe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659067040138",
    active: false,
  },
  {
    number: 4,
    desktop_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659039938296",
    mobile_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/Spot_Light_04_Mobile_v01_ZSFcvVP3l-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659067040397",
    active: false,
  },
  {
    number: 5,
    desktop_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_05.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659039896986",
    mobile_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/Spot_Light_05_Mobile_v01_RxFp8PD3E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659067040637",
    active: false,
  },
  {
    number: 6,
    desktop_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_06.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659039870253",
    mobile_img:
      "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/Spot_Light_06_Mobile_v01_ebyDlkudh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659067040736",
    active: false,
  },
];

class EpisodeGuide extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      episodeSection: 0,
    };
  }

  getBackgroundImage(innerWidth) {
    if (innerWidth <= 925)
      return "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Mobile/EpisodesGuide_BG_Mobile_v02_Fqw1nvJ4J.jpg";
    return "https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/EpisodeGuide_BG_v04_nHVWmjoP5G.jpg";
  }

  getSpotlightImage(innerWidth, index) {
    if (innerWidth <= 925) return spotlightsArr[index].mobile_img;
    return spotlightsArr[index].desktop_img;
  }

  imageClick = (event) => {
    console.log(event.currentTarget.getAttribute("value"));
  };

  render() {
    const spotlights = spotlightsArr.map((s) => {
      return (
        <img
          key={s.number}
          value={s.number}
          src={this.getSpotlightImage(this.props.innerWidth, s.number - 1)}
          alt={s.number}
          class="spotlight-img"
          style={{ display: s.active ? "block" : "none", cursor: "pointer" }}
          onClick={this.imageClick}
        />
      );
    });

    return (
      <div>
        <div class="episode-guide">
          <section id="episode-guide-section" />
          <img
            class="background-img"
            src={this.getBackgroundImage(this.props.innerWidth)}
            alt="Episode Guide"
            map="image-map"
          />
          {/*<map name="image-map">
            <area alt="Episodes 01-06" title="Episodes 01-06" href="https://twitter.com" coords="551,134,716,414" shape="rect"/>
            <area alt="Episodes 07-12" title="Episodes 07-12" href="https://twitter.com" coords="360,732,171,465" shape="rect"/>
    </map>*/}
          {spotlights}
          <div>
            <h2 class="episode-guide-title">EPISODE GUIDE</h2>
            <div class="episode-guide-description">
              {
                "This is where the Metaverse and Real World converge! New episodes are released twice weekly. Click on the link to watch the current episode or click on any previous link to watch earlier episodes."
              }
            </div>
          </div>
        </div>
        <EpisodesList episodeSection={this.state.episodeSection} />
      </div>
    );
  }
}

export default EpisodeGuide;
