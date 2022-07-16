import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="App-header2">
        <a href="#about-section" />
        <img
          src="/assets/Website 2/01 Landing Page (Home)/3.jpg"
          alt="Hero"
          display="flex"
          height="100%"
          width="100%"
          minHeight="30px"
        />
        <div class="bottom-left">
          This animated parody of a House Reality show features cast members
          from five different NFT communities who are transported to LA to
          experience life in the real world. And, just like a reality TV show,
          our cast is ready for primetime! Fights? Parties? Bad Advice? Let’s
          just say, they’ll share a house, make some jokes, make some mistakes,
          and maybe even make out! Join our community to influence cast
          decisions, create episodes, and control the fate of Season 2!
        </div>
        {/* <div class="top-left">Top Left</div>
        <div class="top-right">Top Right</div>
        <div class="bottom-right">Bottom Right</div>
        <div class="centered">Centered</div> */}
      </div>
    </div>
  );
}

export default Header;
