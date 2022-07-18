import "./Season1.css";
import { Stack } from "@mui/material";

function Season1() {
  return (
    <div class="season-1-background">
        <section id="season1-section" />
        <Stack 
          direction={{xs:'column', sm:'column', md: 'row', lg:'row'}} 
          spacing={{xs:0, sm:0, md:6, lg:24}} 
          justifyContent="center"
          alignItems="center"
          style={{ padding:'70px 0'}}>
            <div>
              <div class="season-1-title">SEASON 1</div>
              <div class="playlist-text">
                <div>
                  <div>
                    <div class="playlist-title">Meet the cast</div>
                    <div class="playlist-number"><span class="playlist-digit">01 - </span>The Arrival</div>
                    <div class="playlist-number"><span class="playlist-digit">02 - </span>Let's meet Pete</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">03 - </span>Namaste, Journey</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">04 - </span>Soul of Sam</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">05 - </span>The full Monty</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">06 - </span>i'm Claudine, damnit!</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">07 - </span>Claudine's Confessional (Community Written)</div>
                    <div class="playlist-title">first night out</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">08 - </span>"What to Wear"</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">09 - </span>"Doing Lines"</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">10 - </span>"Sit on a Crystal"</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">11 - </span>"I Love You Guys"</div>
                    <div class="playlist-number playlist-number-inactive"><span class="playlist-digit">12 - </span>Monty's Confessional (Community Written)</div>
                  </div>
                </div>
              </div>
            </div>
            <div><img src="/assets/Website 2/04 Episode Guide/IMG_Season_1.png" class="season-1-img" /></div>
      </Stack>
    </div>
  );
}

export default Season1;
