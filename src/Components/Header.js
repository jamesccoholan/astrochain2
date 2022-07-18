import "./Header.css";

import NavBar from "./NavBar";

function Header() {
  return (
    <div className="Header">
        <NavBar class="landing-navbar" />
        <img
          src="/assets/Website 2/01 Landing Page (Home)/LandingPage_Logo.png"
          class="landing-logo"
        />
        <div class="landing-bottom-text">
          This animated parody of a House Reality show features cast members
          from five different NFT communities who are transported to LA to
          experience life in the real world. And, just like a reality TV show,
          our cast is ready for primetime! <br />Fights? Parties? Bad Advice? Let’s
          just say, they’ll share a house, make some jokes, make some mistakes,
          and maybe even make out! Join our community to influence cast
          decisions, create episodes, and control the fate of Season 2!
        </div>
    </div>
  );
}

export default Header;
