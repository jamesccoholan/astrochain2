import "./Episodes.css";

function Episodes() {
  return (
    <div className="episode-guide">
        <section id="episode-guide-section" />
        <img src="/assets/Website 2/04 Episode Guide/Spot_Light_01_v02.png" class="spotlight-img" />
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
