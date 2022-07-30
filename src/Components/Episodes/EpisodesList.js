import React, { Component } from "react";
import "./EpisodesList.css";
import { Stack } from "@mui/material";
import Vimeo from "@u-wave/react-vimeo";
import { episodes } from "./episodes-content";

class EpisodesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const episodeSection = episodes[this.props.episodeSection];

    const episodeList = episodeSection.episodeList.map(el => {
      return (
        <div class={`playlist-number`}>
          {el.name}
        </div>
      );
    });

    return (
      <div class="season-1-background">
        <section id="season1-section" />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          spacing={{ xs: 0, sm: 0, md: 6, lg: 24 }}
          justifyContent="center"
          alignItems="center"
          style={{ padding: "70px 0" }}
        >
          <div>
            <h2 class="season-1-title">SEASON 1</h2>
            <div class="playlist-text">
              <div>
                <div>
                  <h2 class="playlist-title">{episodeSection.group}</h2>
                  {episodeList}
                </div>
              </div>
            </div>
          </div>
          <div class="vimeo-player">
            <Vimeo video="https://player.vimeo.com/video/728917047" autoplay />
          </div>
        </Stack>
      </div>
    );
  }
}

export default EpisodesList;
