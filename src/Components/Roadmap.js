import React, { Component } from "react";
import "./Roadmap.css";

const roadmapContent = [
  {
    phase: 1,
    class: "phase-one",
    title: "Phase One",
    description: [
      "Mint Date:",
      "Reveal Date:",
      "First and Second Community Written Episode",
      "Multiple giveaways, contests, and AMAs",
      "Guest Star submissions due",
    ],
  },
  {
    phase: 2,
    class: "phase-two",
    title: "Phase Two",
    description: [
      "Guest Star submissions voted on",
      "Third and Fourth Community Written Confessional",
      "Multiple contests and a surprise limited airdrop",
      "Guest Star Winners to be featured in our Discord and Twitter",
      "“Where Are They Now” Submissions due",
    ],
  },
  {
    phase: 3,
    class: "phase-three",
    title: "Phase Three",
    description: [
      "Top 500 producers will be locked and submissions for Next Season due",
      "Fifth Community Written Episode",
      "Guest Star episodes drop",
      "“Where Are they Now” winners chosen and displayed",
      "5 characters for next season are chosen",
    ],
  },
];

class Roadmap extends Component {
  getBackgroundVideo(innerWidth) {
    if (innerWidth <= 975)
      return "https://ik.imagekit.io/mbhxghyf1m2/SiteTrailer_mkxwv7aBG.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663954456515";
    return "https://ik.imagekit.io/mbhxghyf1m2/SiteTrailer_mkxwv7aBG.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663954456515";
  }

  render() {
    const roadmapText = roadmapContent.map((r) => {
      return (
        <div class={`${r.class} roadmap-phase`} key={r.phase}>
          <h2 class="phase-title">{r.title}</h2>
          <ul class="phase-description">
            {r.description.map((d) => {
              return <li key={d}>{d}</li>;
            })}
          </ul>
        </div>
      );
    });

    return (
      <div class="roadmap-section">
        <section id="roadmap-section" />
        <video
          class="roadmap-background-video"
          autoPlay
          loop
          muted
          playsInline
          src={this.getBackgroundVideo(this.props.innerWidth)}
        ></video>
        <h2 class="roadmap-title">ROAD MAP</h2>
        <div>{roadmapText}</div>
      </div>
    );
  }
}

export default Roadmap;
