import "./EpisodeGuide.css";

function EpisodeGuide() {
  return (
    <div className="episode-guide">
        <section id="episode-guide-section" />
        <div>
          <text class="episode-guide-title">EPISODE GUIDE</text>
          <text class="episode-guide-description">
            {
              "This series is where the Metaverse and Real World converge! Click on the highlighted link to watch the current episode of this one-of-a-kind series or click on any previous link to watch earlier episodes and catch up. New shows are released twice weekly and can be viewed here or on any social media platform."
            }
          </text>
        </div>
    </div>
  );
}

export default EpisodeGuide;
