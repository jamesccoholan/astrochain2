import "./Roadmap.css";
import { Stack } from "@mui/material";

function Roadmap() {
  return (
    <div class="roadmap-section">
      <section id="roadmap-section" />
      <Stack direction="column">
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 0, sm: 0, md: 2, lg: 4 }}
          alignItems="center"
        >
          <div className="Roadmap-Main2">
            <Stack direction="row">
              <text class="roadmap-title phase-title">ROAD MAP</text>
              <text class="phase-three phase-title">Phase Three</text>
              <text class="phase-three-description phase-description">
                Top 500 producers will be locked and Submission for Next Season
                due<br/>Guests Star episodes drop<br/>"Where Are they Now" winners
                chosen and displayed<br/>Fifth Community Written Episode<br/>"Where
                are They Now" drops<br/>Discord AMA's {"&"} Twitter Spaces<br/>Winners of
                Next season are chosen, 5 new communities and holders
                displayed.
              </text>
              <text class="phase-two phase-title">Phase Two</text>
              <text class="phase-two-description phase-description">
                Guest Star submissions due and reviewed<br/>Third and Fourth
                Community Written Confessional<br/>Multiple contests and a surprise
                limited airdrop to our top 500 holders on the leaderboard<br/>
                Guest Stars chosen. Winners to be featured in our discord and
                twitter<br/>"Where Are they Now" Submissions due
              </text>
              <text class="phase-one phase-title">Phase One</text>
              <text class="phase-one-description phase-description">
                Mint Date:<br/> Reveal Date:<br/> First and Second Community Written
                Episode<br/> Airdrop for all holders<br/> Multiple giveaways,
                contests, and AMAs<br/> Guest Star submissions due by August 31st
              </text>
            </Stack>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default Roadmap;
