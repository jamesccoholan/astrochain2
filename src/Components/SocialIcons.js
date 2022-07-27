import { Button } from "@mui/material";
import "./SocialIcons.css";

const icons = [
  {
    key: "Twitter",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_Twiter_F5uE1LWnA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016150",
    link: "https://twitter.com"
  },
  {
    key: "TikTok",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_TikTok_J5N-N7iHS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016030",
    link: "https://twitter.com"
  },
  {
    key: "Discord",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_Discord__x56F-mGg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016321",
    link: "https://twitter.com"
  },
  {
    key: "Instagram",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_Instagram_fJzE4TzFp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883016654",
    link: "https://twitter.com"
  },
  {
    key: "YouTube",
    img: "https://ik.imagekit.io/5ierklngtbt/IU/01_Landing_Page/Icons/Icon_YouTube_5LsodS4kj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658883015830",
    link: "https://twitter.com"
  }
]

function SocialIcons() {
  const socialIconItems = icons.map(i => {
    return (
        <Button class="social-icon" key={i.key} href={i.link} target="_blank" rel="noreferrer">
          <img src={i.img} />
        </Button>
    );
  });

  return (
    <div class="social-icons-container">
        {socialIconItems}
    </div>
  );
}

export default SocialIcons;