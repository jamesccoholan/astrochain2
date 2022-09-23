import "./Logos.css";

const characterLogos = [
  {
    name: "Character_1",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_53_ILYVmf-X_.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948583222",
  },
  {
    name: "Character_2",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_13_uFMFipkc1.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948582116",
  },
  {
    name: "Character_3",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_45_XqeUZ-INJ.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948581523",
  },
  {
    name: "Character_4",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_36_yM5-iTbp5.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948579387",
  },
  {
    name: "Character_5",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_19_X3kq8lqp4.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948577351",
  },
];

function CharacterLogos() {
  const logos = characterLogos.map((l) => {
    return <img src={l.img} alt={l.name} key={l.name} />;
  });

  return <div class="logos">{logos}</div>;
}

export default CharacterLogos;
