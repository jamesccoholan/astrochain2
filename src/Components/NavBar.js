import "./NavBar.css";
import { Button, AppBar, Toolbar, Grid } from "@mui/material";

import { useScrollSection } from "react-scroll-section";

export default function NavBar() {
  const navScroll = useScrollSection();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      style={{
        background: "transparent",
        boxShadow: "none",
        zIndex: "2",
        position: "relative",
      }}
    >
      <Toolbar disableGutters={true} sx={{ flexWrap: "wrap" }}>
        <Grid container>
          <Grid item xs={12} display={"flex"} justifyContent={"center"} py={1}>
            <div class="navbar-text-section">
              <Button
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
                href="#cast-section"
              >
                Cast
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
                href="#animated-section"
              >
                Get your Character Animated
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={navScroll.onClick}
                href="#rarity-section"
              >
                NFT Rarity
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={navScroll.onClick}
                href="#roadmap-section"
              >
                Roadmap
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={navScroll.onClick}
                href="#invisible-universe-section"
              >
                Invisible Universe
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
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={navScroll.onClick}
                href="#credits-section"
              >
                Credits
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={navScroll.onClick}
                href="#faqs-section"
              >
                FAQs
              </Button>
            </div>
          </Grid>
        </Grid>
        <div></div>
      </Toolbar>
    </AppBar>
  );
}
