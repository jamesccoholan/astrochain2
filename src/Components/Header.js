import React, { Component } from "react";
import "./Header.css";

import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // pre-load mobile and non-mobile videos
    const backgroundImg = new Image();
    backgroundImg.src =
      "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPageBG_v05_i56UQD6n7.mp4";
    window[
      "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPageBG_v05_i56UQD6n7.mp4"
    ] = backgroundImg;
    const mobileBackgroundImg = new Image();
    mobileBackgroundImg.src =
      "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPageBG_Mobile_v01_XyXZyq7B-.mp4";
    window[
      "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPageBG_Mobile_v01_XyXZyq7B-.mp4"
    ] = mobileBackgroundImg;
  }

  getVideo(innerWidth) {
    if (innerWidth <= 600)
      return "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPageBG_Mobile_v01_XyXZyq7B-.mp4";
    return "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPageBG_v05_i56UQD6n7.mp4";
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
          />
          <div class="logo-and-socials">
            <img src="https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/LandingPage_Logo_v04_X1HXn5sAd.gif" class="real-metaverse-logo" />
            <div class="socials"><SocialIcons /></div>
          </div>
        </div>
        <div class="landing-bottom-text">
          What happens when you put a Bored Ape, a Cool Cat, a World of Women, a
          Roboto {"&"} a Doodle on a reality show together? We have no idea, but
          we{"’"}re betting they make some jokes, make some mistakes, and maybe
          even make out?!
          <br />
          <br />
          The Real Metaverse (TRM) is an animated parody where Big Brother meets
          The Real World. The cast, inspired and approved by the original
          creators from each community, are transported from the metaverse to LA
          to experience life on our side for the very first time! Join us and
          become a Producer to create episodes, control the fate of Season 2 and
          possibly get your character animated!
        </div>
      </div>
    );
  }
}

export default Header;
