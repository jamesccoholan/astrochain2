import React, { Component } from "react";
import "./Header.css";

import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  getVideo(innerWidth) {
    if (innerWidth <= 600) return "/assets/mp4/LandingPageBG_Mobile_v01.mp4";
    return "/assets/mp4/LandingPageBG_v04_GDSn7B6-R.mp4";
  }

  render() {
    return (
      <div class="Header">
        <NavBar />
        <video
          autoPlay
          loop
          muted
          playsInline
          class="background-video"
          src={this.getVideo(this.props.innerWidth)}
        />
        {/*<div class="socials"><SocialIcons /></div>*/}
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
