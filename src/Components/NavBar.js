import "./NavBar.css";
import { Button, AppBar, Toolbar, Grid } from "@mui/material";

import { useScrollSection } from "react-scroll-section";

const buttonContent = [
 {
   name: "Home",
   href: "#"
 },
 {
   name: "Cast",
   href: "#cast-section"
 },
 {
  name: "Episode Guide",
  href: "#episode-guide-section"
},
{
  name: "Get your Character Animated",
  href: "#animated-section"
},
{
  name: "NFT Rarity",
  href: "#rarity-section"
},
{
  name: "Road Map",
  href: "#roadmap-section"
},
{
  name: "Invisible Universe",
  href: "#invisible-universe-section"
},
{
  name: "Team",
  href: "#team-section"
},
{
  name: "FAQs",
  href: "#faqs-section"
}
];

export default function NavBar() {
  const navScroll = useScrollSection();

  const buttons = buttonContent.map(b => {
    return (
      <Button
        key={b.name}
        size={"large"}
        color={"inherit"}
        onClick={navScroll.onClick}
        href={b.href}
        sx={{fontFamily: "futura-medium"}}>
          {b.name}
      </Button>
    )
  })

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
              {buttons}
            </div>
          </Grid>
        </Grid>
        <div></div>
      </Toolbar>
    </AppBar>
  );
}
