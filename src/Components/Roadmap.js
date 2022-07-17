import "./Roadmap.css";
import { Stack } from "@mui/material";

function Roadmap() {
  return (
    <div>
      <Stack direction="column">
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 0, sm: 0, md: 2, lg: 4 }}
          alignItems="center"
          width="100%"
          height="auto"
          object-fit="cover"
          overflow="auto"
          style={{ justifyContent: "center" }}
        >
          <div className="Roadmap-Main2">
            <section id="roadmap-section" />
            <video
              autoPlay
              loop
              muted
              playsinline
              webkit-playsinline
              width="100%"
              height="100%"
            >
              <source src={"/assets/RoadMap_BG_v03.mp4"} type="video/mp4" />
            </video>
            <Stack direction="row">
              <text class="phase7">ROAD MAP</text>
              <text class="phase1">Phase Three</text>
              <text class="phase2">
                Top 500 producers will be locked and Submission for Next Season
                due Guests Star episodes drop "Where Are they Now" winners
                chosen and displayed Fifth Community Written Confessional "Where
                are They Now" animated Discord AMA's/ Twitter Spaces Winners of
                Next season are chosen, 5 new communi- ties and holders
                displayed.
              </text>
              <text class="phase3">Phase Two</text>
              <text class="phase4">
                Guest Star submissions due and reviewed Third and Fourth
                Community Written Confessional Multiple contests and a surprise
                limited airdrop to our top 500 holders on the lea- derboard)
                Guest Stars chosen. Winners to be featured in our discord and
                twitter "Where Are they Now" Submissions due
              </text>
              <text class="phase5">Phase One</text>
              <text class="phase6">
                Mint Date: Reveal Date: First and Second Community Written
                Confessional Airdrop for all holders Multiple giveaways,
                contests, and AMAs Guest Star submissions due by August 31st
              </text>
            </Stack>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default Roadmap;
