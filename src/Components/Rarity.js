import "./Rarity.css";
import { Stack } from "@mui/material";

function Rarity() {
  return (
    <div className="rarity-section">
      <h2 className="rarity-title">RARITY</h2>
      <Stack direction={{xs:'column', sm:'column', md: 'row', lg:'row'}} spacing={{xs:0, sm:2, md:2, lg:4}} alignItems="top-text" width="90%" height="auto" object-fit="cover" style={{ justifyContent: 'center', padding: '0 0 40px 0' }}>
      <div>
        <div className="rarity-description">
          Our Producer Passes are designed to become your Twitter banner. We chose
          this underutilized stvle to accentuate the fact that while our
          characters may originate in different communities, thev only exist
          together here on The R3eal Metaverse.
        </div>
        <div className="rarity-description">
          Over 100 different traits algorithmi- cally combine iconic locations in
          Los Angeles with award winning animation to generate over 4 million
          combinations. The Mint will randomly produce XXXX unique Producer
          Passes.
        </div>
        <div className="rarity-description">
          {" "}
          In addition, 20 Ultra Rare Passes will be created. If you're lucky
          enough to mint one of these rare NFT's you will automatically receive
          100 bonus points to be included on the Leader-board for a chance to win
          amazing opportunities.
        </div>
      </div>
      <div className="rarity-pics">
        <img
          style={{ padding: "20px" }}
          src="/assets/1.png"
          className="Roadmap-Main"
          alt="alt"
        ></img>
        <img
          style={{ padding: "20px" }}
          src="/assets/2.png"
          className="Roadmap-Main"
          alt="alt"
        ></img>
      </div>
      </Stack>
    </div>
  );
}

export default Rarity;

// <div className="CastPages">
//         <div className="Roadmap">
//           <section id="rarity-section" />
//           {/* <img
//             src="/assets/Website 2/05 Rarity/RarityTemp.png"
//             className="Roadmap-Main"
//             alt="alt"
//           ></img> */}
//         </div>
//       </div>
