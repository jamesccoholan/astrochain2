import "./ValueProp.css";
import CharacterLogos from "./CharacterLogos";
import NFTLogos from "./NFTLogos";

function ValueProp() {
  return (
    <div class="value-prop-section">
      <section id="animated-section" />
      <div class="value-prop-1">
        <h2 class="value-prop-title">VIRTUAL ARTISTS & CONCERTS</h2>
        <div class="value-prop-to-life">Virtualized Music Experience</div>
        <div class="value-prop-description">
          <b>THIS SEASON:</b> If you are a holder of an NFT from one of the five
          OG communities our cast comes from, and you{"’"}re in the top 500 on
          our leaderboard (more on that in a minute) you could win a spot to
          have your character make a cameo appearance this season. You might
          even be able to voice your character yourself! The holders who meet
          the criteria will be asked to write in why they should be animated,
          describing their character's personality. The community will choose
          one character from each of the five original projects who will be
          animated and come to life on the show.
        </div>
        <NFTLogos />
      </div>
      <div class="transition-1 transition-frame" />
      <div class="value-prop-2">
        <h2 class="value-prop-title">ORIGINAL MUSIC</h2>
        <div class="value-prop-description">
          The other cool way to get animated is placing in the top 500 on the
          leaderboard and submitting your character to be on Season 2. It can be
          from any licensable community. That{"’"}s right, we{"’"}re casting
          next season{"’"}s cast from Pass Holders at the end of Season 1! And
          Pass Holders decide on the city where Season 2 takes place. Is it New
          York, Nashville, Miami or Nantucket? The country is wide open, and the
          location with the most votes will be home to the new cast.
        </div>
        <CharacterLogos />
      </div>
      <div class="transition-2 transition-frame" />
      <div class="value-prop-3">
        <h2 class="value-prop-title">METAVERSE CONCERTS</h2>
        <div class="value-prop-description">
          * All Pass Holders can contribute to Mad Lib style confessionals where
          you control the character and decide what they say in certain
          episodes. With our quick-turn animation studio, the most popular
          choices will be brought to life and animated in days.
          <br />
          <br />* Pass holders will also submit ideas in the producer{"’"}s room
          for special episodes like <i>“Where Are They Now?”</i> The submissions
          will be voted on and the winners animated. If your entry is selected
          for this special episode you will be credited. It can be your wallet
          #, Discord ID, Twitter name, or ENS name!
          <br />
          <br />* Producers get exclusive early access to episodes of TRM and
          may receive Airdrops from the series. These could include
          behind-the-scenes content like production storyboards, gifs, audition
          submission forms, and never-before-seen production stills. We want you
          to see the added value that holding this NFT will give you, but most
          importantly we want you to create the story with us!
        </div>
        <section id="leaderboard-section" />
        {/* <h2 class="value-prop-title">THE LEADERBOARD</h2>
        <div class="value-prop-description">
          Points are awarded by being engaged on Discord, Twitter and in the
          Producer{"’"}s Portal. Producers earn points for filling out the Mad
          Libs (speed counts) and matching the most popular answers. Updates and
          pop-up contests will ensure everyone has a chance to place and
          potentially be a cast member for Season 2. More details in FAQ.
        </div> */}
      </div>
    </div>
  );
}

export default ValueProp;
