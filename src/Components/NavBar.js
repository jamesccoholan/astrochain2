import "./NavBar.css";
import { Button, AppBar, Toolbar, Grid, Container } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useScrollSection } from "react-scroll-section";

function NavBar() {
  const collectionSection = useScrollSection("collection");
  const vbCaresSection = useScrollSection("vb-cares");
  const roadmapSection = useScrollSection("roadmap");
  const faqSection = useScrollSection("faq");

  return (
    <div class="topnav" id="myTopnav">
      <AppBar position="static" elevation={0} sx={{ backgroundColor: "blue" }}>
        <Toolbar disableGutters={true} sx={{ flexWrap: "wrap" }}>
          <Grid container sx={{ display: "flex", flex: "0 0 100%" }}>
            <Grid
              item
              sx={{ backgroundColor: "#f3f3f3", color: "#333" }}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              py={1}
            >
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={collectionSection.onClick}
              >
                Collection
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={vbCaresSection.onClick}
              >
                VB Cares
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={roadmapSection.onClick}
              >
                Roadmap
              </Button>
              <Button
                variant={"text"}
                size={"large"}
                color={"inherit"}
                onClick={faqSection.onClick}
              >
                FAQ
              </Button>
              <div position="right">
                <Button href="https://twitter.com/verabradley">
                  <TwitterIcon sx={{ mr: 1, color: "#000000" }} />
                </Button>
                <Button href="https://www.facebook.com/verabradley">
                  <FacebookIcon
                    href="https://discord.com"
                    sx={{ mr: 1, color: "#000000" }}
                  />
                </Button>
                <Button href="https://www.pinterest.com/verabradley/">
                  <PinterestIcon sx={{ mr: 1, color: "#000000" }} />
                </Button>
                <Button href="https://www.instagram.com/verabradley/">
                  <InstagramIcon sx={{ mr: 1, color: "#000000" }} />
                </Button>
              </div>
            </Grid>
          </Grid>
          <div></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
