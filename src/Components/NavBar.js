import "./NavBar.css";
import { Button } from "@mui/material";
// import { AppBar, Grid, Button, Toolbar, Container } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function NavBar() {
  return (
    <div class="topnav" id="myTopnav">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
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
  );
}

export default NavBar;
