import "./Episodes.css";

function Episodes() {
  return (
    <div class="episode-guide">
      <img
        class="background-img"
        src="https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/EpisodesGuide_BG_v03_UlwcvzPCW.jpg"
        alt="Episode Guide"
      />
      <section id="episode-guide-section" />
      <img
        class="spotlight-1-img"
        src="https://ik.imagekit.io/5ierklngtbt/IU/04_Episode_Guide/Spot_Light_01.png"
        alt="Spotlight 1"
      />
      <div>
        <text class="episode-guide-title">EPISODE GUIDE</text>
        <text class="episode-guide-description">
          {
            "This is where the Metaverse and Real World converge! New episodes are released twice weekly. Click on the link to watch the current episode or click on any previous link to watch earlier episodes."
          }
        </text>
      </div>
    </div>
  );
}

export default Episodes;
