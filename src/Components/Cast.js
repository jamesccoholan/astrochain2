import React, { Component } from "react";
import "./Cast.css";

const cast = [
  {
    front:
      "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/2E4AF179-E436-4225-9B9B-4861EA2102A0_zDde-leFD.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948162869",
    back: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/01_Pete3D.jpg",
    value: "0",
  },
  {
    front:
      "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/AC44B533-A55B-4DCF-BF00-0EB446E6B679_Px-zuLX9DD.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948163416",
    back: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/02_Monty3D.jpg",
    value: "1",
  },
  {
    front:
      "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_28_aVqrfJx2kw.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948255576",
    back: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/03_Sam3D.jpg",
    value: "2",
  },
  {
    front:
      "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/DAC_27_nlmS80xkw.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948237121",
    back: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/04_Journey3D.jpg",
    value: "3",
  },
  {
    front:
      "https://ik.imagekit.io/mbhxghyf1m2/DAC_Square/29CC3A81-B89A-409D-9409-AF964785F4CC_uuR-czxDT.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1663948162590",
    back: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Coins/05_Claudine3D.jpg",
    value: "4",
  },
];

const castPagesContent = [
  {
    images: [
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_1_NPRZuJc3M.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326910",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_2_6-bvZK46u.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326891",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_RYlRApAXs.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326342",
    ],
    background: "#C5BDC5",
    character: "DAC",
    description: "The first virtual artist from AstroChain",
  },
  {
    images: [
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_1_NPRZuJc3M.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326910",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_2_6-bvZK46u.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326891",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_RYlRApAXs.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326342",
    ],
    background: "#D7E2F4",
    character: "DAC",
    description: "The first virtual artist from AstroChain",
  },
  {
    images: [
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_1_NPRZuJc3M.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326910",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_2_6-bvZK46u.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326891",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_RYlRApAXs.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326342",
    ],
    background: "#B8EAE4",
    character: "DAC",
    description: "The first virtual artist from AstroChain",
  },
  {
    images: [
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_1_NPRZuJc3M.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326910",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_2_6-bvZK46u.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326891",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_RYlRApAXs.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326342",
    ],
    background: "#D0F1F6",
    character: "DAC",
    description: "The first virtual artist from AstroChain",
  },
  {
    images: [
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_1_NPRZuJc3M.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326910",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_2_6-bvZK46u.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326891",
      "https://ik.imagekit.io/mbhxghyf1m2/Upright_images/Comp_1_RYlRApAXs.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1663957326342",
    ],
    background: "#C1C1DF",
    character: "DAC",
    description: "The first virtual artist from AstroChain",
  },
];

class Cast extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      characterId: 0,
    };
  }

  selectCharacterId = (event) => {
    this.setState({ characterId: event.currentTarget.getAttribute("value") });
  };

  render() {
    const castItems = cast.map((c) => {
      return (
        <a
          class="cast-images"
          href="#character-section"
          value={c.value}
          key={c.value}
          onClick={this.selectCharacterId}
        >
          <img src={c.front} alt={c.value} />
        </a>
      );
    });

    const characterVideoItems = castPagesContent[
      this.state.characterId
    ].images.map((image) => {
      return <video autoPlay loop muted playsInline src={image} key={image} />;
    });

    return (
      <div className="character-container">
        <div className="character-evolution-container">
          <div className="CastPages">
            <section id="cast-section" />
            <h2 className="character-evolution-title">
              Virtual Artists & Concerts{" "}
            </h2>
            <div className="character-evolution-description">
              {"3D Photoreal Virtual Artists"}
            </div>
            <div class="cast-images-container">{castItems}</div>
          </div>
        </div>
        <section id="character-section" />
        <div
          className="cast-pages-character-container"
          style={{
            backgroundColor: `${
              castPagesContent[this.state.characterId].background
            }`,
          }}
        >
          <div>
            <div className="cast-pages-character-text-container">
              <h2 className="cast-pages-character-character-name">
                {castPagesContent[this.state.characterId].character}
              </h2>
              <div className="cast-pages-character-text">
                {castPagesContent[this.state.characterId].description}
              </div>
            </div>
            <div class="cast-videos-container">{characterVideoItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cast;
