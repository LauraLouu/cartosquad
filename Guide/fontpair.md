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
             <div class="title" v-bind:style="{fontFamily: i.font, fontWeight:500}">These are just some random Walter Moers' quote: </div>
            <div class="pairW" v-bind:style="{fontFamily: f, fontWeight:500}"> {{ quote() }}</div>  
            <div class="font1" v-bind:style="{fontFamily: i.font}">
            <p>{{i.font}} </p>
            <p>
            Life is too precious to be left to chance. <br />
            <b>Life is too precious to be left to chance.</b><br />
            <i>Life is too precious to be left to chance.</i><br />
            <b><i>Life is too precious to be left to chance.</i></b>
            </p>
            </div>
            <div class="font2" v-bind:style="{fontFamily: f}">
            <p>{{f}}</p>
            <p>I was obviously dealing with a madman.<br />
            <b>I was obviously dealing with a madman.</b><br />
            <i>I was obviously dealing with a madman.</i><br />
            <b><i>I was obviously dealing with a madman.</i></b>
            </p></div>
            <div style="clear:both"></div>
            <br />
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 3 650 247" style="enable-background:new 0 0 960 251.3;" xml:space="preserve">
            <style type="text/css">
              .st0{fill:#8BCAE5;}
              .st1{fill:#9AC398;}
              .st2{fill:#FCFDF8;}
              .st3{fill:none;stroke:#CCCCCC;stroke-width:10;stroke-linejoin:round;stroke-miterlimit:10;}
              .st4{fill:none;stroke:#FFFFFF;stroke-width:8;stroke-linejoin:round;stroke-miterlimit:10;}
              .st5{fill:none;stroke:#9C6D7E;stroke-width:12;stroke-miterlimit:10;}
              .st6{fill:none;stroke:#E8BB73;stroke-width:10;stroke-miterlimit:10;}
              .st7{font-size:12px; font-style: italic;}
              .st8{font-family:Open Sans;font-size:11pt; fill:#000000;}
              .st9{font-size:10px; fill:#000000;}
              .st10{font-size:11px; fill:#553A44;}
            </style>
            <g id="water">
              <rect id="XMLID_6_" y="0.6" class="st0" width="960" height="250.8"/>
            </g>
            <g id="water_label">
                <path id="XMLID_x5F_98_x5F_" fill="none" d="M8.5,125.8c0,0,32,36,56.5,42.3s93.5,24.6,110.5,30.5"/>
              <text id="XMLID_99_">	<textPath  xlink:href="#XMLID_x5F_98_x5F_" startOffset="11.2793%">
            <tspan v-bind:style="{fontFamily: f}" style="font-size:11pt" fill="#247BA0">Hunter River North Arm</tspan>	</textPath>
            </text>
            </g>
            <!--g id="title">
              <rect id="XMLID_15_" y="214.1" fill="#ffffff" width="300" height="37.6"/>
              <text id="XMLID_97_" transform="matrix(1 0 0 1 8.5 239.0738)" class="st8">Section of Port Hunter, Newcastle, Australia</text>
            </g-->
            <g id="green">
              <path id="XMLID_3_" class="st1" d="M222.3,13.1c0,0-60.3,16.7-70.7,42.3c-10.3,25.7-15.3,53,11,74.7s22.3,30,26.7,37.3
                c4.3,7.3,8.3,14.3,15,13.3c6.7-1,24-57.2,27-83.8s0.7-34.9,7.3-48.2c6.7-13.3,9.7-30.7,0-31.7C229,16.1,222.3,13.1,222.3,13.1z"/>
              <path id="XMLID_18_" class="st1" d="M346.4,1.1c0.9,41-2,119.9-16.8,152.5c-17.3,38.3-15.3,53.1-13,65.7
                c2.3,12.7,10.3,32.8,10.3,32.8h632V1.1H346.4z"/>
              <path id="XMLID_19_" class="st1" d="M94.8,1.1C78.7,38.1,72.2,106.9,75,118.2c3.7,14.7,52,16.1,56.7,15.1c4.7-1-11.3-31.1-3-71.1
                C137,22.2,190,10.6,197,7.6c2-0.9,3.4-3.6,4.7-6.6H94.8z"/>
            </g>
            <g id="green_label">
                <text id="XMLID_1_" fill="#355834" transform="matrix(1 0 0 1 156.5 76.4084)"><tspan x="0" y="0" class="st7" v-bind:style="{fontFamily: f}">Mangrove </tspan><tspan x="36" y="14.4" fill="#355834" class="st7" v-bind:style="{fontFamily: f}">Island</tspan></text>
                <text id="XMLID_12_" fill="#355834" transform="matrix(1 0 0 1 96 18.6)" class="st7" v-bind:style="{fontFamily: f}">Sandy Island</text>
            </g>
            <g id="urban">
              <path id="XMLID_17_" class="st2" d="M378.6,1.1c-2.6,4-5.1,9.2-6.6,14.5c-3.7,13.7,10.3,49.1,14,60.7c3.7,11.7-1.3,56.9,0,73.9
                s20.3,101.4,20.3,101.4l108.7-0.1c0,0,8-27.1,11.3-42.1c3.3-15,36.3-66.7,36.3-66.7L960,210.2L959.8,1.1H378.6z"/>
            </g>
            <g id="streets_outline">
              <polyline id="XMLID_93_" class="st3" points="577,56.7 567.3,47.4 459.3,26.4 430.7,27.7 437,251.5 	"/>
              <path id="XMLID_92_" class="st3" d="M472.7,251.3l13.3-59.9v-18.3l17.6-35.7l60.7-66.7l32.7-34v-7.7L483.9,5.7c0,0-5.9,8-7.5,14
                s-3.4,9.8-3.4,9.8"/>
              <line id="XMLID_91_" class="st3" x1="457.3" y1="26.4" x2="460.3" y2="135.4"/>
              <path id="XMLID_90_" class="st3" d="M436.1,226.8c0,0-16.2,4.3-19.5,0c-2.2-2.9-7.5-21.5-9.9-41c-1.3-10.3-1.8-16.8-0.7-25.4
                c3.3-24.7,4.7-23.3,4.7-23.3H463l38.7,3.5"/>
              <polyline id="XMLID_89_" class="st3" points="529.3,185.4 508.7,177.7 406.6,186.5 	"/>
              <path id="XMLID_88_" class="st3" d="M435.8,210.4c0,0,24.8-3,33.8-2s12.8,2.1,12.8,2.1"/>
              <path id="XMLID_87_" class="st3" d="M436.5,234.1c0,0,29.8-2.7,34.2-1.7c4.3,1,6.3,1.9,6.3,1.9"/>
              <path id="XMLID_86_" class="st3" d="M459.6,105.1c0,0,33.9,1.7,46.1,7c12.3,5.3,13.4,8.7,13.4,8.7"/>
              <polyline id="XMLID_85_" class="st3" points="457.3,80.7 532.3,92.4 539.5,99.1 	"/>
              <path id="XMLID_84_" class="st3" d="M455.5,53.7c0,0,30.8,1,46.5,5.3c15.7,4.3,46.3,9,46.3,9l10.8,8.3"/>
            </g>
            <g id="streets_stroke">
                <polyline id="XMLID_95_" class="st4" points="577,56.7 567.3,47.4 459.3,26.4 430.7,27.7 437,251.5 	"/>
              <path id="XMLID_7_" class="st4" d="M472.2,251.3l13.8-59.9v-18.3l17.1-35.7l61-66.7l33-34v-7.7L483.4,5.7c0,0-5.4,8-7,14
                s-3.4,9.8-3.4,9.8"/>
            <line id="XMLID_94_" class="st4" x1="457.3" y1="26.4" x2="460.3" y2="135.4"/>
            <path id="XMLID_13_" class="st4" d="M436.1,226.8c0,0-16.2,4.3-19.5,0c-2.2-2.8-7.5-21.1-9.9-40.3c-1.3-10.1-1.8-17.3-0.7-25.7
                c3.3-24.3,4.7-23.7,4.7-23.7H463l38.5,3.6"/>
            <polyline id="XMLID_8_" class="st4" points="527.8,184.9 508.7,177.7 406.6,186.5 	"/>
            <path id="XMLID_10_" class="st4" d="M435.8,210.4c0,0,24.8-3,33.8-2s12.8,2.1,12.8,2.1"/>
            <path id="XMLID_11_" class="st4" d="M436.5,234.1c0,0,29.8-2.7,34.2-1.7c4.3,1,6.3,1.9,6.3,1.9"/>
            <path id="XMLID_9_" class="st4" d="M459.6,105.1c0,0,33.9,1.7,46.1,7c12.3,5.3,13.4,8.7,13.4,8.7"/>
            <polyline id="XMLID_14_" class="st4" points="457.3,80.7 532.3,92.4 539.5,99.1 	"/>
            <path id="XMLID_16_" class="st4" d="M457.3,54.2c0,0,29,0.5,44.7,4.9c15.7,4.3,46.3,9,46.3,9l10.8,8.3"/>
            </g>
            <g id="highway_outline">
              <path id="XMLID_4_" class="st5" d="M707.3-2.9c0,0-122.3,95.3-143.7,131.5c-21.3,36.2-31.8,44.5-43.6,74.9
                c-11.8,30.3-11.5,47.9-11.5,47.9"/>
            </g>
            <g id="highway_stroke">
              <path id="XMLID_96_" class="st6" d="M707.3-2.9c0,0-122.3,95.3-143.7,131.5c-21.3,36.2-31.8,44.5-43.6,74.9
                c-11.8,30.3-11.5,47.9-11.5,47.9"/>
            </g>
            <g id="streets_label">
                <text id="XMLID_100_" transform="matrix(0.9783 0.2072 -0.2072 0.9783 501.6785 11.6367)" class="st9" v-bind:style="{fontFamily: i.font}">Cascade Ave</text>
              <text id="XMLID_101_" transform="matrix(0.9854 0.1701 -0.1701 0.9854 487.6573 35.036)" class="st9" v-bind:style="{fontFamily: i.font}">Aqua Ave</text>
              <text id="XMLID_102_" transform="matrix(0.9814 0.1918 -0.1918 0.9814 473.8165 56.0929)" class="st9" v-bind:style="{fontFamily: i.font}">Pontoon Ave</text>
              <text id="XMLID_103_" transform="matrix(0.9895 0.1443 -0.1443 0.9895 472.1671 85.1794)" class="st9"v-bind:style="{fontFamily: i.font}">Estuary Way</text>
              <text id="XMLID_104_" transform="matrix(0.6673 -0.7448 0.7448 0.6673 533.5025 108.9447)" class="st9" v-bind:style="{fontFamily: i.font}">Waterfall Dr</text>
              <text id="XMLID_105_" transform="matrix(-5.572253e-003 -1 1 -5.572253e-003 461.2362 102.6934)" class="st9" v-bind:style="{fontFamily: i.font}">Waterlily Way</text>
              <text id="XMLID_106_" transform="matrix(-2.668273e-002 -0.9996 0.9996 -2.668273e-002 435.8367 117.8567)" class="st9" v-bind:style="{fontFamily: i.font}">Sanddune Crescent</text>
              <path id="XMLID_x5F_42_x5F__1_" fill="none" d="M415,140.1h48l38.4,3.8"/>
              <text id="XMLID_39_">	<textPath  xlink:href="#XMLID_x5F_42_x5F__1_" startOffset="1.0742%">
            <tspan  class="st9" v-bind:style="{fontFamily: i.font}">Boat House Parade</tspan>	</textPath>
            </text>
              <text id="XMLID_40_" transform="matrix(0.9973 -7.374790e-002 7.374790e-002 0.9973 417.5821 187.2032)" class="st9" v-bind:style="{fontFamily: i.font}">Sunrise Parade</text>
              <path id="XMLID_x5F_44_x5F_" fill="none" d="M417.6,224.8c0,0-8.1-28.3-8.8-35s-1-34.9,0-37.7s4.1-13.2,4.1-13.2"/>
              <text id="XMLID_41_">	<textPath  xlink:href="#XMLID_x5F_44_x5F_" startOffset="15.4948%">
            <tspan  class="st9" v-bind:style="{fontFamily: i.font}">Serene Way</tspan>	</textPath>
            </text>
              <text id="XMLID_43_" transform="matrix(0.21 -0.9777 0.9777 0.21 475.817 251.338)" class="st9" v-bind:style="{fontFamily: i.font}">Stillwaters Dr</text>
            </g>
            <g id="highway_label">
                <path id="XMLID_x5F_47_x5F_" fill="none" d="M512.3,246.6c0,0,8.3-40.8,13.8-50s24-40.5,24-40.5"/>
              <text id="XMLID_45_">	<textPath  xlink:href="#XMLID_x5F_47_x5F_" startOffset="23.7305%">
            <tspan  class="st10" v-bind:style="{fontFamily: i.font}">Nelson Bay Rd</tspan>	</textPath>
            </text>
            </g>
            </svg>
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
        if (!fonts.includes(f)){
          fonts.push(f);
        }
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
.font1, .font2{
  width:50%;
  float:left;
  margin-top: 10px;
}
</style>