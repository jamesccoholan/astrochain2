import "./Rarity.css";
import { Stack } from "@mui/material";

function Rarity() {
  return (
    <div class="rarity-section">
      <section id="rarity-section" />
      <Stack
        direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        spacing={{ xs: 0, sm: 0, md: 2, lg: 4 }}
        alignItems="top-text"
        height="auto"
        object-fit="cover"
        style={{ justifyContent: "center", padding: "0 0 40px 0" }}
      >
        <div>
        <h2 class="rarity-title">NFT RARITY</h2>
          <div class="rarity-description">
            Our NFT is a Producer Pass designed to become your Twitter banner. We chose this style to accentuate the fact that while our characters may originate in different communities, they only exist together here on The R3eal Metaverse. 
            Our traits algorithmically combine iconic locations in Los Angeles with award winning animation to generate over a million combinations. The Mint will randomly produce 7000 unique Producer Passes. 
          </div>
          <div class="rarity-description">
            In addition, 20 Ultra Rare Passes will be created. If you{"’"}re lucky enough to mint one of these rare NFT{"’"}s you will automatically receive 50 bonus points to be included on the Leaderboard.
          </div>
        </div>
        <div class="rarity-pics">
          <img
            style={{ padding: "20px" }}
            src="/assets/1.png"
            alt="alt"
          ></img>
          <img
            style={{ padding: "20px" }}
            src="/assets/2.png"
            alt="alt"
          ></img>
        </div>
      </Stack>
    </div>
  );
}

export default Rarity;
