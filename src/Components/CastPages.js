import "./CastPages.css";

function CastPages() {
  return (
    <div className="CastPages-Main">
      <div className="CastPages">
        <section id="CastPages-section" />
        <h6 className="title">Cast Pages</h6>
        <div className="videos">
          <video
            autoPlay
            loop
            muted
            playsinline
            webkit-playsinline
            width="220"
            height="220"
            className="videos"
          >
            <source
              src={"assets/mp4/01_Pete_2dTo3d (Stitched Clip).mp4"}
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            loop
            muted
            playsinline
            webkit-playsinline
            width="220"
            height="220"
            className="videos"
          >
            <source
              src={"assets/mp4/02_Monty_2dTo3d (Stitched Clip).mp4"}
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            loop
            muted
            playsinline
            webkit-playsinline
            width="220"
            height="220"
            className="videos"
          >
            <source src={"assets/mp4/SAMS.mp4"} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsinline
            webkit-playsinline
            width="220"
            height="220"
            className="videos"
          >
            <source
              src={"assets/mp4/04_Journey_2dTo3d (Stitched Clip).mp4"}
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            loop
            muted
            playsinline
            webkit-playsinline
            width="220"
            height="220"
            className="videos"
          >
            <source
              src={"assets/mp4/05_Claudine_2dTo3d (Stitched Clip).mp4"}
              type="video/mp4"
            />
          </video>
          <div />
          <div className="description">
            <h6>
              {
                "What started off as a PFP in 2 dimensions has evolved into a fully realized 3D character with an oversized personality. Take some time to read through the cast bios, admire the artists' process and learn how we created this first of its kind series."
              }
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastPages;
