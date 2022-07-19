import "./Header.css";

import NavBar from "./NavBar";

function Header() {
  return (
    <div className="Header">
        <NavBar />
        <img
          src="/assets/Website 2/01 Landing Page (Home)/LandingPage_Logo.png"
          class="landing-logo"
        />
        <div class="landing-bottom-text">
        What happens when you put a Bored Ape, a Cool Cat, a World of Women, a Roboto {"&"} a Doodle on a reality show together? We have no idea either,
         but we{"’"}re betting they make some jokes, make some mistakes, and maybe even make out?!<br />
         The Real Metaverse (TRM) is an animated parody where Big Brother meets The Real World. 
         The cast, inspired and approved by the original creators from each community, are transported from the metaverse to LA to experience life on our side for the very first time!<br />
         The only thing more crazy than the boom of NFTs is what happens when their worlds collide. Join us and become a Producer to create episodes, control the fate of Season 2 and possibly get your character animated!
        </div>
    </div>
  );
}

export default Header;
