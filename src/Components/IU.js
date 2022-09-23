import "./IU.css";
import FAQs from "./FAQs";

const teamMembers = [
  {
    name: "Dan",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_53_ILYVmf-X_.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948583222",
  },
  {
    name: "Ben",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_13_uFMFipkc1.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948582116",
  },
  {
    name: "Van",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_45_XqeUZ-INJ.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948581523",
  },
  {
    name: "Yohann",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_36_yM5-iTbp5.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948579387",
  },
  {
    name: "Fubs",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_11_1m_pV-7_G.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948577887",
  },
  {
    name: "Henrique",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_19_X3kq8lqp4.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948577351",
  },
  {
    name: "Bruno",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_41_ic3BTXK6U.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948502316",
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
        src="https://ik.imagekit.io/mbhxghyf1m2/dd_Zt8LlMFy7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663946065524"
        alt="Invisible Universe"
      />
      <div className="character-evolution-description">
        {
          "AstroChains mission is to produce and distribute compelling virtual artists and concerts to mainstream audiences. AstroChain leverages virtual production technology (real-time game engines) to collapse production costs, and increase the volume, and quality of digital music experiences. A goal is to increase the value throughput between artists and audiences with direct-to-consumer digital distribution, and blockchain-based ownership cutting out many legacy intermediaries."
        }
      </div>
      <FAQs />
      <section id="team-section" />
      <h2 className="character-evolution-title" style={{ margin: "auto" }}>
        DAC PICTURES
      </h2>
      <div class="team-section">
        {team}
        <div />
      </div>
      <section id="credits-section" />
      {/* <h2 className="character-evolution-title" style={{ margin: "auto" }}>
        FULL CREDITS
      </h2> */}
    </div>
  );
}

export default IU;
