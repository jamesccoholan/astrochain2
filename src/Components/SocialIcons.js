import { Button } from "@mui/material";
import "./SocialIcons.css";

const icons = [
  {
    key: "Twitter",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_Twiter_F5uE1LWnA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016150",
    link: "https://twitter.com/r3almetaverse",
  },
  {
    key: "TikTok",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_TikTok_J5N-N7iHS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016030",
    link: "https://www.tiktok.com/@r3almetaverse",
  },
  {
    key: "Discord",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_Discord__x56F-mGg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016321",
    link: "https://discord.gg/PxMB8nvw",
  },
  {
    key: "Instagram",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_Instagram_fJzE4TzFp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016654",
    link: "https://www.instagram.com/r3almetaversenft/",
  },
  {
    key: "YouTube",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_YouTube_5LsodS4kj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883015830",
    link: "https://www.youtube.com/channel/UCdsNKt8UFfz3rTCcXT1C3ww",
  },
];

function SocialIcons() {
  const socialIconItems = icons.map((i) => {
    return (
      <Button
        class="social-icon"
        key={i.key}
        href={i.link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={i.img} alt={i.key} />
      </Button>
    );
  });

  return <div class="social-icons-container">{socialIconItems}</div>;
}

export default SocialIcons;
