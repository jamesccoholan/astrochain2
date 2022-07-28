import "./IU.css";

const teamMembers = [
  {
    name: "Dan",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/01_CoreTeam_Dan_v02_JLlgtCEGk.jpg"
  },
  {
    name: "Ben",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/02_CoreTeam_Ben_v02_HZQdcFXMy.jpg"
  },
  {
    name: "Van",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/03_CoreTeam_Van_v02_I1kPOKNlOv.jpg"
  },
  {
    name: "Yohann",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/04_CoreTeam_Yohann_v02_tu_fmJUeR.jpg"
  },
  {
    name: "Fubs",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/05_CoreTeam_Fubs_v02_hBg4uY9n3s.jpg"
  },
  {
    name: "Henrique",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/06_CoreTeam_Henrique_v02_vf3qvqw_m.jpg"
  },
  {
    name: "Bruno",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/07_CoreTeam_Bruno_v02_B0jAynWoG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659044772402"
  },
];

function IU() {
  const team = teamMembers.map(t => {
    return (
    <img
      src={t.img}
      class="team-members"
      alt={t.name}
      key={t.name}
    />
    );
  });

  return (
    <div className="cast-pages-main">
      <div className="CastPages">
        <section id="invisible-universe-section" />
        <h2 className="character-evolution-title">INVISIBLE UNIVERSE</h2>
          <div style={{ marginTop: "20px" }} className="character-evolution-description">
              {
                "Cartoons have been a part of most people’s lives from the time they can remember. Regardless of background, age, and culture, most of us can recall a time when animated characters captured our attention, and in doing so, our hearts. Invisible Universe is an internet-first animation studio run by a team of executives with Television, Animation and Marketing backgrounds that develops original character IP on social media and Web 3.0 platforms first. The heart of the company’s mission is telling stories that allow communities to have a closer, more regular, and more interactive relationship with the characters they love. Our original IP has received book deals, movie offers and TV Series deals in the last year.  The company is in partnership with some of the world’s biggest celebrities and backed by some of the best media and technology investors in Hollywood and Silicon Valley, including Alexis Ohanian's Seven Seven Six, Initialized Capital, The Chernin Group, Serena Williams, Will Smith's Dreamers VC, CASSIUS Family, Spencer Rascoff’s 75 & Sunny VC, and many more."
              }
          </div>
          <section id="team-section" />
          <h2 className="character-evolution-title">TEAM</h2>
        <div class="team-section">
          {team}
        <div />
        </div>
        <section id="credits-section" />
        <h2 style={{ marginBottom: "20px" }} className="character-evolution-title">FULL CREDITS</h2>
      </div>
    </div>
  );
}

export default IU;
