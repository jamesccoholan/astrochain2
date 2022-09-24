import "./Logos.css";

const nftLogos = [
  {
    name: "Bored Ape Yacht Club",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_13_uFMFipkc1.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948582116",
  },
  {
    name: "Cool Cats",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_45_XqeUZ-INJ.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948581523",
  },
  {
    name: "Robotos",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_3666_F_durCI-g.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948526489",
  },
  {
    name: "Wow",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_55_OnXSQZ0qBI.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948504716",
  },
  {
    name: "Doodles",
    img: "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_50_gLj4vUDkX.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948433200",
  },
];

function NFTLogos() {
  const logos = nftLogos.map((l) => {
    return <img src={l.img} alt={l.name} key={l.name} />;
  });

  return <div class="logos">{logos}</div>;
}

export default NFTLogos;
