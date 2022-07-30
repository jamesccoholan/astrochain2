import React, { Component } from "react";
import "./EpisodesList.css";
import { Stack } from "@mui/material";
import Vimeo from "@u-wave/react-vimeo";
import { episodes } from "./episodes-content";

class EpisodesList extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      episodeId: 0,
    };
  }

  selectEpisode = (event) => {
    this.setState({ episodeId: event.currentTarget.getAttribute("value") });
  };

  render() {
    const episodeSection = episodes[this.props.episodeSection];

    const episodeList = episodeSection.episodeList.map((el) => {
      return (
        <div
          key={el.id}
          class={`playlist-number`}
          value={el.pos}
          onClick={this.selectEpisode}
        >
          {el.name}
        </div>
      );
    });

    return (
      <div class="season-1-background">
        <section id="season1-section" />
        <h2 class="season-1-title">SEASON 1</h2>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          spacing={{ xs: 4, sm: 4, md: 6, lg: 24 }}
          justifyContent="center"
          alignItems="center"
          style={{ padding: "80px 0" }}
        >
          <div class="playlist-text">
            <div>
              <div>
                <h2 class="playlist-title">{episodeSection.group}</h2>
                {episodeList}
              </div>
            </div>
          </div>
          <div class="vimeo-player">
            <Vimeo
              video={`https://player.vimeo.com/video/${
                episodeSection.episodeList[this.state.episodeId].vimeoId
              }`}
              autoplay
            />
          </div>
        </Stack>
      </div>
    );
  }
}

export default EpisodesList;
