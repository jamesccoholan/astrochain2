import "./Logos.css";

const characterLogos = [
  {
    name: "Character_1",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/character_01_9U3JskWJjz.png",
  },
  {
    name: "Character_2",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/character_02_LX-s1ewc1.png",
  },
  {
    name: "Character_3",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/character_03_bfNP9O1jT.png",
  },
  {
    name: "Character_4",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/character_04_Oq1Cl-7c0.png",
  },
  {
    name: "Character_5",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/06_Value_Prop/character_05_AoQHObrrH.png",
  },
];

function CharacterLogos() {
  const logos = characterLogos.map((l) => {
    return <img src={l.img} alt={l.img} />;
  });

  return <div class="logos">{logos}</div>;
}

export default CharacterLogos;
