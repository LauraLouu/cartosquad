# Font Pairings
Following is my collection of font pairings that work well together. As a dummy text I use a variety of excerpts from my favourite book *The 13.5 Lives of Captain Bluebear* by Walter Moers, randomly assigned. 

::: tip Table of Conent
 <ul id="toc" >
 <li v-for="it in items"><a v-bind:href="'#' + it.font">{{it.font}}</a></li>
 </ul>
 :::

<div id="fp">
    <div v-for="i in items">
    <hr />
        <h2 :id="i.font" class="th3" v-bind:style="{fontFamily: i.font}">{{i.font}} </h2>
        <a v-if="i.fontpair !== ''" class="button" target="_blank" v-bind:href="i.fontpair">FontPair</a>
        <a v-if="i.google !== ''" class="button" target="_blank" v-bind:href="i.google">Google Font</a>
        <div class="fpair" v-for="f in i.pairsWith">
            <p class="bothFonts">{{i.font}} with {{f}}</p>
             <div class="title" v-bind:style="{fontFamily: i.font, fontWeight:500}">This is just a random quote: </div>
            <div class="pairW" v-bind:style="{fontFamily: f, fontWeight:500}"> {{ quote() }}</div>  
            <br />
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
<script>
import data from './fonts.json'
export default {
  data() {
      return {
          items: data
      }
  }, 
  methods: {
      quote: function(){
         var quotes = [
        "It felt as if a shaft of lightning had gone in through one ear and out the other...Armies of dead men went marching through my head. I heard a noise like a cosmic scream. My brain turned to ice. Then the ice cracked in all directions and disintegrated into tiny particles like snowflakes, and each snowflake was afflicted by a pain of its very own. In the end, everything went black. I found myself looking out into the universe. Seated on a diminutive planet made of glass was a red dwarf who had twelve important messages for me.",
        "I could hear it from far away, that sound which only very big cities can produce: a sound consisting of all sounds rolled into one: the hum of voices and the cries of animals, bells ringing and the chink of coins, children's laughter and hammers beating metal, knives and forks clattering and a thousand doors slamming - the grandiose sound of life, of birth and death, itself.",
        "“It's quite simple, just follow the dotted line,“ the Planmaker explained. “Don't let any bad idea lead you astray. Don't let them persuade you to take a short cut or take one yourself. Life is a winding path. One sometimes has to make detours. That's my humble opinion, anyway.”",
        "Peoples usually start life by being born. Not me, though. That's to say, I don't know how I came into the world. Purely theoretically, I could have emerged from the foam on the crest of a wave or developed inside a seashell, like a pearl. Then again, I might have fallen from the sky, like a shooting star. The only certainty is that I was a foundling abondened in the middle of the ocean. My earliest memory is of being afloat in rough seas, naked and alone in a walnut shell, for at first I was very, very small.",
        "However, I'd always had a rather glamorous mental picture of the entrance to another dimension. To be honest, I couldn't see a thing. “You can't see it,“ Qwerty explained. “You can only smell it.“ I sniffed. A faint, entirely unfamiliar smell hung in the air. “I's definitely a dimensional hiatus, it smells of genff,“ said Qwerty. I had no idea what genff was, nor did I wish to be enlightened. Having found the hiatus some days earlier, Qwerty had been wondering to jump into it ever since. The odds against his landing in his home dimension were several billions to on."
    ]
    var nr = Math.floor(Math.random() * 5);
    return quotes[nr];
      }
  }
}
var fonts = []
var WebFont = require('webfontloader');
data.forEach(function(d){
    fonts.push(d.font);
    d.pairsWith.forEach(function(f){
        fonts.push(f);
    });
});
WebFont.load({
    google: {
      families: fonts
    }
  });

</script>
<style scoped>
.fpair{
    margin:1em 0 2em 0;
    background-color: #f3f5f7;
    padding: 1em;
}
.button {
  background-color: #247ba0;
  color:#fff;
  margin-right: 10px;
  line-height: 3em;
  padding: 5px 7px;
  text-decoration: none !important;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  vertical-align: 0.2em;
  margin-right:1em
}
.button:hover {
  background-color: #123d50;
  color: #ffffff;
}
.title{
    font-size:16pt;
    margin:1em 0 0.5em 0;
    margin-top: 0.8em;
}
.bothFonts {
  margin-top:0;
  color:#247ba0;
  font-weight:bold;
}
</style>