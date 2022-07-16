import "./Roadmap.css";

function Roadmap() {
  return (
    <div>
      <div className="Roadmap-Main2">
        <section id="roadmap-section" />
        {/* <img
          src="/assets/Website 2/03 Road Map/RM.png"
          className="Roadmap-Main"
          alt="alt"
        ></img> */}
        <video
          autoPlay
          loop
          muted
          playsinline
          webkit-playsinline
          width="100%"
          height="100%"
        >
          <source src={"/assets/RoadMap_BG_v03.mp4"} type="video/mp4" />
        </video>
        <text class="phase1">Phase Three</text>
        <text class="phase2">
          Top 500 producers will be locked and Submission for Next Season due
          Guests Star episodes drop "Where Are they Now" winners chosen and
          displayed Fifth Community Written Confessional "Where are They Now"
          animated Discord AMA's/ Twitter Spaces Winners of Next season are
          chosen, 5 new communi- ties and holders displayed.
        </text>
        <text class="phase3">Phase Two</text>
        <text class="phase4">
          Guest Star submissions due and reviewed Third and Fourth Community
          Written Confessional Multiple contests and a surprise limited airdrop
          to our top 500 holders on the lea- derboard) Guest Stars chosen.
          Winners to be featured in our discord and twitter "Where Are they Now"
          Submissions due
        </text>
      </div>
    </div>
  );
}

export default Roadmap;
