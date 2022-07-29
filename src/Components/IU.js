import "./IU.css";
import FAQs from "./FAQs";

const teamMembers = [
  {
    name: "Dan",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/01_CoreTeam_Dan_v02_JLlgtCEGk.jpg",
  },
  {
    name: "Ben",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/02_CoreTeam_Ben_v02_HZQdcFXMy.jpg",
  },
  {
    name: "Van",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/03_CoreTeam_Van_v02_I1kPOKNlOv.jpg",
  },
  {
    name: "Yohann",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/04_CoreTeam_Yohann_v02_tu_fmJUeR.jpg",
  },
  {
    name: "Fubs",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/05_CoreTeam_Fubs_v02_hBg4uY9n3s.jpg",
  },
  {
    name: "Henrique",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/06_CoreTeam_Henrique_v02_vf3qvqw_m.jpg",
  },
  {
    name: "Bruno",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/07_Team/07_CoreTeam_Bruno_v02_B0jAynWoG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659044772402",
  },
];

function IU() {
  const team = teamMembers.map((t) => {
    return <img src={t.img} class="team-members" alt={t.name} key={t.name} />;
  });

  return (
    <div class="invisible-universe">
      <section id="invisible-universe-section" />
      <img
        class="invisible-universe-logo"
        src="https://ik.imagekit.io/5ierklngtbt/IU/07_Team/Invisible_Universe_Logo_REfqBQVrx.png"
        alt="Invisible Universe"
      />
      <div className="character-evolution-description">
        {
          "Invisible Universe is an internet-first animation studio run by a team of seasoned storytellers, artists & animators coming together from legacy institutions like MGM, Walt Disney Studios, and Warner Brothers Television. The Animation team, based in Brazil, has won dozens of awards for their work and this year garnered the company’s first award for the character Qai Qai, in partnership with Serena Williams. Invisible Universe’s mission is to create and launch the next household name animated IP in an internet-first way, across web2 platforms, and in web3. The IP launched to date has already expanded into Film, Television, Publishing, and Merchandising. The company is in partnership with some of the world’s biggest celebrities and influencers and backed by some of the best media and technology investors in Hollywood and Silicon Valley, including Alexis Ohanian's Seven Seven Six, The Chernin Group, and Will Smith's Dreamers VC, and many more."
        }
      </div>
      <FAQs />
      <section id="team-section" />
      <h2 className="character-evolution-title" style={{ margin: "auto" }}>
        TEAM
      </h2>
      <div class="team-section">
        {team}
        <div />
      </div>
      <section id="credits-section" />
      <h2 className="character-evolution-title" style={{ margin: "auto" }}>
        FULL CREDITS
      </h2>
    </div>
  );
}

export default IU;
