import "./NavBar.css";
import { Button, AppBar, Toolbar, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useScrollSection } from "react-scroll-section";

export default function NavBar() {
  const castPagesSection = useScrollSection("castPages");
  // const vbCaresSection = useScrollSection("vb-cares");
  const roadmapSection = useScrollSection("roadmap");
  const faqSection = useScrollSection("faq");

  return (
    <div class="topnav" id="myTopnav">
        <Toolbar disableGutters={true} sx={{ flexWrap: "wrap" }}>
          <Grid container sx={{ display: "flex", flex: "0 0 100%" }}>
            <Grid
              item
              sx={{ backgroundColor: "#000000", color: "white" }}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              py={1}
            >
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={castPagesSection.onClick}
              >
                Home
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={castPagesSection.onClick}
                href="#CastPages-section"
              >
                Cast Pages
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={roadmapSection.onClick}
                href="#roadmap-section"
              >
                Road Map
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={faqSection.onClick}
                href="#episodeGuide-section"
              >
                Episode Guide
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={faqSection.onClick}
                href="#Info-section"
              >
                Value Prop
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={faqSection.onClick}
                href="#rarity-section"
              >
                Rarity
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={faqSection.onClick}
                href="#IU-section"
              >
                Team
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={faqSection.onClick}
                href="#about-section"
              >
                Producers Portal
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={faqSection.onClick}
                href="#about-section"
              >
                Leaderboard
              </Button>
              <div class="right">
                <Button href="https://twitter.com/verabradley">
                  <TwitterIcon sx={{ mr: 1, color: "white" }} />
                </Button>
                <Button href="https://www.facebook.com/verabradley">
                  <FacebookIcon
                    href="https://discord.com"
                    sx={{ mr: 1, color: "white" }}
                  />
                </Button>
                <Button href="https://www.pinterest.com/verabradley/">
                  <PinterestIcon sx={{ mr: 1, color: "white" }} />
                </Button>
                <Button href="https://www.instagram.com/verabradley/">
                  <InstagramIcon sx={{ mr: 1, color: "white" }} />
                </Button>
              </div>
            </Grid>
          </Grid>
          <div></div>
        </Toolbar>
    </div>
  );
}
