import "./NavBar.css";
import { Button, AppBar, Toolbar, Grid } from "@mui/material";

import { useScrollSection } from "react-scroll-section";

const buttonContent = [
  {
    name: "HOME",
    href: "#",
  },
  {
    name: "DISCONAUTS",
    href: "#cast-section",
  },
  {
    name: "EPISODE GUIDE",
    href: "#episode-guide-section",
  },
  {
    name: "GET YOUR CHARACTER ANIMATED",
    href: "#animated-section",
  },
  {
    name: "NFT RARITY",
    href: "#rarity-section",
  },
  {
    name: "ROAD MAP",
    href: "#roadmap-section",
  },
  {
    name: "INVISIBLE UNIVERSE",
    href: "#invisible-universe-section",
  },
  {
    name: "FAQS",
    href: "#faqs-section",
  },
  {
    name: "TEAM",
    href: "#team-section",
  },
];

export default function NavBar() {
  const navScroll = useScrollSection();

  const buttons = buttonContent.map((b) => {
    return (
      <Button
        key={b.name}
        size={"large"}
        color={"inherit"}
        onClick={navScroll.onClick}
        href={b.href}
        sx={{
          fontFamily: "futura-medium",
          fontSize: "20px",
          lineHeight: "inherit",
          fontWeight: "inherit",
          letterSpacing: "inherit",
          textTransform: "inherit",
        }}
      >
        {b.name}
      </Button>
    );
  });

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
            <div class="navbar-text-section">{buttons}</div>
          </Grid>
        </Grid>
        <div></div>
      </Toolbar>
    </AppBar>
  );
}
