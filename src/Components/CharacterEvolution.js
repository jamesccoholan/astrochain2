import "./CharacterEvolution.css";

function CharacterEvolution() {
  return (
    <div className="character-evolution-container">
      <div className="CastPages">
        <section id="character-evolution-section" />
        <h2 className="character-evolution-title">Character Evolution</h2>
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
          <div className="character-evolution-description">
              {
                "Inspired by the incredible art that brought communities like Bored Ape and Doodles to life, we’ve created fully realized 3D animated characters from their 2D profile pictures. Click on a portrait to read their backstories and see the transformation!"
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterEvolution;
