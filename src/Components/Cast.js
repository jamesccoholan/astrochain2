import React, { Component } from "react";
import { useScrollSection } from "react-scroll-section";
import { Button } from "@mui/material";
import "./Cast.css";

const cast = [
  {
    front_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/01_Pete2D.png",
    back_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/01_Pete3D.jpg",
    value: "0"
  },
  {
    front_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/02_Monty2D.png",
    back_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/02_Monty3D.jpg",
    value: "1"
  },
  {
    front_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/03_Sam2D.png",
    back_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/03_Sam3D.jpg",
    value: "2"
  },
  {
    front_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/04_Journey2Dpng",
    back_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/04_Journey3D.jpg",
    value: "3"
  },
  {
    front_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/05_Claudine2D.png",
    back_img: "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/05_Claudine3D.jpg",
    value: "4"
  }
];

const castPagesContent = [
  {
    images: [
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Pete/01.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Pete/02.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Pete/03.mp4"
    ],
    background: "#C5BDC5",
    character: "Pete",
    description: "Everyone loves Pete. (It's Pete, by the way. Not Peter. He doesn't know why. Ask his parents.) He's effortlessly cool, surprisingly funny, and the life of the party…. when he wants to be. Pete's a great friend but a terrible boyfriend, mainly because everyone is always throwing themselves at him, and he has a hard time saying no. He'd be pansexual if he knew what that word meant, but school was never really 'his thing' (despite the unexplained 1450 on his SATs). Actually, he doesn't know if anything will ever be 'his thing,' and he's subconsciously terrified about that. He comes from a huge family (mom had 16 kids!), and, being a twin, Pete grew up feeling a little left out and fighting for attention. He auditioned for The R3eal Metaverse after losing a bet that whoever could down a bottle of laxative and not use the bathroom the longest would win. He had to sell his couch the next day. In the end, it's all good because, as Pete likes to say, he's 'here for a good time, not a long time.'"
  },
  {
    images: [
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Monty/01.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Monty/02.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Monty/03.mp4"
    ],
    background: "#D7E2F4",
    character: "Monty",
    description : "Monty is an old soul, not only because we don't really know how old he is (26? 41? We're not sure), but because he's a sage of sorts doling out homespun advice that is as practical as it is prescient. The dude is a legend in his small town.​​ The go-to guy when folks need to figure something out. A cat who always has an answer. That said, his friends have often commented they can never tell what he's thinking (until he speaks) because the look on his face rarely changes. A trait Monty loves about himself and something he practices in the mirror. He tells everyone he auditioned for the TV show out of curiosity. Now, he just hopes it doesn't kill him. If you get the joke, you can be on team Monty. If not, you'll never know."
  },
  {
    images: [
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Sam/01.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Sam/02.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Sam/03.mp4"
    ],
    background: "#B8EAE4",
    character: "Sam",
    description: "Sam is a robot with a virus, or maybe he’s just a hypochondriac; the jury is still out. He definitely has an inferiority complex and trouble figuring out if people are making fun of him or just being nice. If that isn’t challenging enough, the stress of everyone’s expectation that he always knows the correct answer because he’s a ”robot” (whatever that means) has taken its toll on his mental health. It’s a lot and something Sam is working on. At night he stays awake wondering if his programming is “off” or was the programmer who programmed him “off” making his programming “off?” This existential question pretty much sums him up. He auditioned for The R3eal Metaverse, hoping to find other robots like himself on the other side and maybe meet his programmer, who can hopefully get rid of this virus – or at least clear his cache."
  },
  {
    images: [
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Journey/01.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Journey/02.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Journey/03.mp4"
    ],
    background: "#D0F1F6",
    character: "Journey",
    description: "Journey is all of the spiritual buzzwords on Instagram combined. She’s a lightworker, a manifestor, a connector, a healer, and of course, a priestess. There is no crystal too expensive or South American plant medicine ceremony too remote when the end goal is deep soul cleansing. She is the consummate optimist, a cheerleader for the ages, and genuinely believes in the power of affirmation slogan posters, which she collects. Her favorite being “Life is uncertain. Eat dessert first.” Unfortunately, the thing missing in Journey’s big spiritual awakening is that she has no real friends– a realization that occurred when her boyfriend of five years dumped her. She auditioned for the cast of The R3eal Metaverse to shake things up, make new connections and find out firsthand what all the hype about the Real World is all about."
  },
  {
    images: [
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Claudine/01.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Claudine/02.mp4",
      "https://ik.imagekit.io/5ierklngtbt/IU/02_Cast_Page/Characters/Claudine/03.mp4"
    ],
    background: "#C1C1DF",
    character: "Claudine",
    description: "Claudine is direct and doesn’t have time for your shit, no matter the situation. That’s not to say she’s mean because she’s not, but honesty isn’t always the best policy when you have no filter. She doesn’t try to hurt your feelings; it just happens…often. Add the fact she is naturally sarcastic with a resting bitch face, and you get reality TV gold! Claudine is the only cast member who didn’t audition but was offered a slot by a casting director who stood behind her in line at the DMV and watched her bring the window attendant to tears. Claudine is the wild card we can only hope stays for the whole season."
  }
];

class Cast extends Component {

  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      characterId: 0
    };
  }

  componentDidMount() {
    // pre-load all images
    castPagesContent.forEach((cp) => {
      for (var i = 0; i < cp.images.length; i++) {
        const newImage = new Image();
        newImage.src = cp.images[i];
        window[cp.images[i]] = newImage;
      }
    });
  }

  selectCharacterId = event =>  {
    this.setState({ characterId: event.currentTarget.getAttribute('value') });
  };

  render() {
    const castItems = cast.map(c => {
      return (
          <a className="cast-images" href="#character-section" value={c.value} key={c.value} onClick={this.selectCharacterId}>
            <img src={c.front_img} />
          </a>
      );
    });

    const characterVideoItems = castPagesContent[this.state.characterId].images.map(image => {
      return (
        <video 
          autoPlay
          loop
          muted
          playsInline
          class="cast-character-video"
          src={image}
        />
      );
    });

    return (
      <div className="character-container">
        <div className="character-evolution-container">
          <div className="CastPages">
            <section id="cast-section" />
            <h2 className="character-evolution-title">CAST</h2>
            <div className="character-evolution-description">
                  {
                    "We’ve created fully realized 3D animated characters inspired from the original 2D profile pictures. Click on a portrait to read their backstories and see the transformation!"
                  }
              </div>
            <div class="cast-images-container">
              {castItems}
            </div>
          </div>
        </div>
        <section id="character-section" />
        <div className="cast-pages-gif-container" style={{ backgroundColor: `${castPagesContent[this.state.characterId].background}` }}>
          <div className="cast-pages-character-text-container">
            <h2 className="cast-pages-character-character-name">{castPagesContent[this.state.characterId].character}</h2>
            <div className="cast-pages-character-text">{castPagesContent[this.state.characterId].description}</div>
          </div>
          <div class="cast-videos-container">
            {characterVideoItems}          
          </div>
      </div>
      </div>
    );
  };
}

export default Cast;
