import "./EpisodeGuide.css";

function EpisodeGuide() {
  return (
    <div className="episode-guide">
        <section id="episode-guide-section" />
        <img src="/assets/Website 2/04 Episode Guide/Spot_Light_01_v02.png" class="spotlight-img" />
        <div>
          <text class="episode-guide-title">EPISODE GUIDE</text>
          <text class="episode-guide-description">
            {
              "This is where the Meteverse and Real World converge! Click on the highlighted link to watch the current episode, or click on any previous link to watch earlier episodes and catch up. New episodes are released twice weekly and can be viewed here or on any social media platform."
            }
          </text>
        </div>
    </div>
  );
}

export default EpisodeGuide;
