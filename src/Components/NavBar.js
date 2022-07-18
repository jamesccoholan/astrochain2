import "./NavBar.css";
import { Button, AppBar, Toolbar, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useScrollSection } from "react-scroll-section";

export default function NavBar() {
  const navScroll = useScrollSection();

  return (
        <AppBar position="static" color="transparent" elevation={0} style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar disableGutters={true} sx={{ flexWrap: "wrap" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              py={1}
            >
              <div class="navbar-text-section">
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#"
                >
                  Home
                </Button>
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#cast-pages-section"
                >
                  Cast Pages
                </Button>
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#roadmap-section"
                >
                  Road Map
                </Button>
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#episode-guide-section"
                >
                  Episode Guide
                </Button>
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#season1-section"
                >
                  Season 01
                </Button>
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#rarity-section"
                >
                  Rarity
                </Button>
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#value-prop-section"
                >
                  Value Prop
                </Button>
                <Button
                  variant={"text"}
                  size={"large"}
                  color={"inherit"}
                  onClick={navScroll.onClick}
                  href="#team-section"
                >
                  Team
                </Button>
              </div>
              <div class="right navbar-social">
                <Button>
                  <TwitterIcon sx={{ mr: 1, color: "white" }} />
                </Button>
                <Button>
                  <YouTubeIcon sx={{ mr: 1, color: "white" }} />
                </Button>
                <Button>
                  <InstagramIcon sx={{ mr: 1, color: "white" }} />
                </Button>
              </div>
            </Grid>
          </Grid>
          <div></div>
        </Toolbar>
        </AppBar>
  );
}
