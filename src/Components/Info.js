import "./Info.css";

function Info() {
  return (
    <div className="info-main">
      <section id="Info-section" />
      <div className="videos2">
        <img
          src="/assets/logos/BAC-SVG.webp"
          width="180"
          height="180"
          className="videos"
          alt="alt"
        ></img>
        <img
          src="/assets/logos/logo.png"
          width="180"
          height="180"
          className="videos"
          alt="alt"
        ></img>
        <img
          src="/assets/logos/Logo_709x.webp"
          width="180"
          height="180"
          className="videos"
          alt="alt"
        ></img>
        <img
          src="/assets/logos/doodless.png"
          width="180"
          height="180"
          className="videos"
          alt="alt"
        ></img>
        <img
          src="/assets/logos/Robotoss.png"
          width="180"
          height="180"
          className="videos"
          alt="alt"
        ></img>
        <div />
        <div className="description-cast-pages">
          {
            "What started off as a PFP in 2 dimensions has evolved into a fully realized 3D character with an oversized personality. Take some time to read through the cast bios, admire the artists' process and learn how we created this first of its kind series."
          }
        </div>
      </div>
    </div>
  );
}

export default Info;
