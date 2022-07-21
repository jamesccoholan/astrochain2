import React, { Component } from "react";
import { useScrollSection } from "react-scroll-section";
import { Button } from "@mui/material";
import "./CharacterEvolution.css";

const castPagesContent = [
  {
    img: "https://ik.imagekit.io/5ierklngtbt/IU/CastPage_01_Pete_lVkyKlshU.mp4",
    background: "#C5BDC5",
    character: "PETE",
    description: "Everyone loves Pete. (It's Pete, by the way. Not Peter. He doesn't know why. Ask his parents.) He's effortlessly cool, surprisingly funny, and the life of the party…. when he wants to be. Pete's a great friend but a terrible boyfriend, mainly because everyone is always throwing themselves at him, and he has a hard time saying no. He'd be pansexual if he knew what that word meant, but school was never really 'his thing' (despite the unexplained 1450 on his SATs). Actually, he doesn't know if anything will ever be 'his thing,' and he's subconsciously terrified about that. He comes from a huge family (mom had 16 kids!), and, being a twin, Pete grew up feeling a little left out and fighting for attention. He auditioned for The R3eal Metaverse after losing a bet that whoever could down a bottle of laxative and not use the bathroom the longest would win. He had to sell his couch the next day. In the end, it's all good because, as Pete likes to say, he's 'here for a good time, not a long time.'"
  },
  {
    img: "https://ik.imagekit.io/5ierklngtbt/IU/CastPage_02_Monty_ON-NqzixZ.mp4",
    background: "#D7E2F4",
    character: "MONTY",
    description : "Monty is an old soul, not only because we don't really know how old he is (26? 41? We're not sure), but because he's a sage of sorts doling out homespun advice that is as practical as it is prescient. The dude is a legend in his small town.​​ The go-to guy when folks need to figure something out. A cat who always has an answer. That said, his friends have often commented they can never tell what he's thinking (until he speaks) because the look on his face rarely changes. A trait Monty loves about himself and something he practices in the mirror. He tells everyone he auditioned for the TV show out of curiosity. Now, he just hopes it doesn't kill him. If you get the joke, you can be on team Monty. If not, you'll never know."
  },
  {
    img: "https://ik.imagekit.io/5ierklngtbt/IU/CastPage_03_Sam_wObw6baTz.mp4",
    background: "#B8EAE4",
    character: "SAM",
    description: "Sam is a robot with a virus, or maybe he’s just a hypochondriac; the jury is still out. He definitely has an inferiority complex and trouble figuring out if people are making fun of him or just being nice. If that isn’t challenging enough, the stress of everyone’s expectation that he always knows the correct answer because he’s a ”robot” (whatever that means) has taken its toll on his mental health. It’s a lot and something Sam is working on. At night he stays awake wondering if his programming is “off” or was the programmer who programmed him “off” making his programming “off?” This existential question pretty much sums him up. He auditioned for The R3eal Metaverse, hoping to find other robots like himself on the other side and maybe meet his programmer, who can hopefully get rid of this virus – or at least clear his cache."
  },
  {
    img: "https://ik.imagekit.io/5ierklngtbt/IU/CastPage_04_Journey_9REGlqgQa.mp4",
    background: "#D0F1F6",
    character: "JOURNEY",
    description: "Journey is all of the spiritual buzzwords on Instagram combined. She’s a lightworker, a manifestor, a connector, a healer, and of course, a priestess. There is no crystal too expensive or South American plant medicine ceremony too remote when the end goal is deep soul cleansing. She is the consummate optimist, a cheerleader for the ages, and genuinely believes in the power of affirmation slogan posters, which she collects. Her favorite being “Life is uncertain. Eat dessert first.” Unfortunately, the thing missing in Journey’s big spiritual awakening is that she has no real friends– a realization that occurred when her boyfriend of five years dumped her. She auditioned for the cast of The R3eal Metaverse to shake things up, make new connections and find out firsthand what all the hype about the Real World is all about."
  },
  {
    img: "https://ik.imagekit.io/5ierklngtbt/IU/CastPage_05_Claudine_efj4eNPM3.mp4",
    background: "#C1C1DF",
    character: "CLAUDINE",
    description: "Claudine is direct and doesn’t have time for your shit, no matter the situation. That’s not to say she’s mean because she’s not, but honesty isn’t always the best policy when you have no filter. She doesn’t try to hurt your feelings; it just happens…often. Add the fact she is naturally sarcastic with a resting bitch face, and you get reality TV gold! Claudine is the only cast member who didn’t audition but was offered a slot by a casting director who stood behind her in line at the DMV and watched her bring the window attendant to tears. Claudine is the wild card we can only hope stays for the whole season."
  }
];

class CharacterEvolution extends Component {

  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      characterId: 1
    };
  }

  componentDidMount() {
    // pre-load all images
    castPagesContent.forEach((image) => {
      const newImage = new Image();
      newImage.src = image.img;
      window[image.img] = newImage;
  });
  }

  selectCharacterId = event =>  {
    this.setState({ characterId: event.currentTarget.getAttribute('value') });
  };

  render() {
    console.log(this.state.characterId);
    return (
      <div className="character-container">
        <div className="character-evolution-container">
          <div className="CastPages">
            <section id="character-evolution-section" />
            <h2 className="character-evolution-title">Character Evolution</h2>
            <div className="videos">
              <a href="#character-section" value="0" onClick={this.selectCharacterId}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="220"
                  height="220"
                  onClick={this.selectCharacterId}
                  value="0"
                  className="videos"
                >
                  <source
                    src={"assets/mp4/01_Pete_2dTo3d (Stitched Clip).mp4"}
                    type="video/mp4"
                  />
                </video>
              </a>
              <a href="#character-section" value="1" onClick={this.selectCharacterId}>
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="220"
                  height="220"
                  value="1"
                  className="videos"
                >
                  <source
                    src={"assets/mp4/02_Monty_2dTo3d (Stitched Clip).mp4"}
                    type="video/mp4"
                  />
                </video>
              </a>
              <a href="#character-section" value="2" onClick={this.selectCharacterId}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="220"
                  height="220"
                  value="2"
                  className="videos"
                >
                  <source src={"assets/mp4/SAMS.mp4"} type="video/mp4" />
                </video>
              </a>
              <a href="#character-section" value="3" onClick={this.selectCharacterId}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="220"
                  height="220"
                  value="3"
                  className="videos"
                >
                  <source
                    src={"assets/mp4/04_Journey_2dTo3d (Stitched Clip).mp4"}
                    type="video/mp4"
                  />
                </video>
              </a>
              <a href="#character-section" value="4" onClick={this.selectCharacterId}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="videos"
                  value="4"
                >
                  <source
                    src={"assets/mp4/05_Claudine_2dTo3d (Stitched Clip).mp4"}
                    type="video/mp4"
                  />
                </video>
              </a>
              <div />
              <div className="character-evolution-description">
                  {
                    "Inspired by the incredible art that brought communities like Bored Ape and Doodles to life, we’ve created fully realized 3D animated characters from their 2D profile pictures. Click on a portrait to read their backstories and see the transformation!"
                  }
              </div>
            </div>
          </div>
        </div>
        <section id="character-section" />
        <div className="cast-pages-gif-container" style={{ backgroundColor: `${castPagesContent[this.state.characterId].background}` }}>
          <div className="cast-pages-character-text-container">
            <h2 className="cast-pages-character-character-name">{castPagesContent[this.state.characterId].character}</h2>
            <div className="cast-pages-character-text">{castPagesContent[this.state.characterId].description}</div>
          </div>
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="cast-pages-background-img" 
            src={castPagesContent[this.state.characterId].img} 
          />
      </div>
      </div>
    );
  };
}

export default CharacterEvolution;
