import "./Logos.css";

const nftLogos = [
  {
    name: "Bored Ape Yacht Club",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/bayc_logo_riWBUIbzwM.png",
  },
  {
    name: "Cool Cats",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/cool_cats_aH1X9RP_D.png",
  },
  {
    name: "Robotos",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/robotos_kGLQ3TjUYa.png",
  },
  {
    name: "Wow",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/wow_EtO0ECWMy.png",
  },
  {
    name: "Doodles",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/doodles_yivwaeOpm.png",
  },
];

function NFTLogos() {
  const logos = nftLogos.map((l) => {
    return <img src={l.img} alt={l.img} />;
  });

  return <div class="logos">{logos}</div>;
}

export default NFTLogos;
