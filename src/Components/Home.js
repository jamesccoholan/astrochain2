import React, { Component } from "react";
import "./Home.css";

import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

class Home extends Component {
  getVideo(innerWidth) {
    if (innerWidth <= 600)
      return "https://ik.imagekit.io/mbhxghyf1m2/Comp_2_2_K1B4OwOJQ.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663947523586";
    return "https://ik.imagekit.io/mbhxghyf1m2/Comp_2_2_K1B4OwOJQ.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663947523586";
  }

  render() {
    return (
      <div class="Header">
        <NavBar />
        <div class="background-video-and-ls">
          <video
            autoPlay
            loop
            muted
            playsInline
            class="background-video"
            src={this.getVideo(this.props.innerWidth)}
          ></video>
          <div class="logo-and-socials">
            <img
              src="https://ik.imagekit.io/mbhxghyf1m2/dd_Zt8LlMFy7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663946065524"
              class="real-metaverse-logo"
              alt="AstroChain"
            />
            <div class="socials">
              <SocialIcons />
            </div>
          </div>
        </div>
        <div class="landing-bottom-text">
          AstroChain's mission is to produce and distribute compelling virtual
          artists and concerts to mainstream audiences. AstroChain leverages
          virtual production technology (real-time game engines) to collapse
          production costs, and increase the volume, and quality of digital
          music experiences. A goal is to increase the value throughput between
          artists and audiences with direct-to-consumer digital distribution,
          and blockchain-based ownership cutting out many legacy intermediaries.
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
