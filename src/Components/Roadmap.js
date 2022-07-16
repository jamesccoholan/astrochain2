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
      </div>
    </div>
  );
}

export default Roadmap;
