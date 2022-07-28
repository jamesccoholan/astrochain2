import "./Rarity.css";
import { Stack } from "@mui/material";

function Rarity() {
  return (
    <div class="rarity-section">
      <section id="rarity-section" />
      <div class="rarity-container">
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 0, sm: 0, md: 2, lg: 4 }}
          alignItems="top-text"
          height="auto"
          object-fit="cover"
          style={{ justifyContent: "center" }}
        >
          <div class="rarity-text-container">
            <h2 class="rarity-title">NFT RARITY</h2>
            <div class="rarity-description">
            Our Producer Pass is designed to become your Twitter banner. Our traits combine iconic locations in Los Angeles with award-winning animation to generate over a million combinations. The Mint will randomly produce 7000 unique Producer Passes.<br/><br/>
            In addition, 20 Ultra Rare Passes will be created. If you{"’"}re lucky enough to mint one of these NFTs you will automatically receive bonus points for the Leaderboard.
            </div>
          </div>
          <div class="rarity-pics">
            <img
              style={{ paddingTop: "20px" }}
              src="https://ik.imagekit.io/5ierklngtbt/IU/05_Rarity/NFT_Common_gBs2-01D1.jpg"
              alt="alt"
            ></img>
            <img
              style={{ paddingTop: "20px" }}
              src="https://ik.imagekit.io/5ierklngtbt/IU/05_Rarity/NFT_Ultra_Rare_UsJL-Encs.jpg"
              alt="alt"
            ></img>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Rarity;
