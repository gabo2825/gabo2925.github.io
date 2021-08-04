/*Map factsthanks to KayOdds*/
/*Used in KayOdds*/

const facts=[" {Map fact #1}? ",
             " {Map fact #2}? ",
             " {Map fact #3}? "];

const didntknow=[" Well I didn't!!                ",
                 " HUHH?? I DIDN'T KNOW THAT!!    ",
                 " REALLY??                       ",
                 " You're being serious, right??  ",
                 " Yes?? AND YOU DIDN'T TELL ME?? ",
                 " OMG YOU SHOULD'VE TOLD ME!!    ",
                 " I am like.. speechless..       ",
                 " I had no idea!                 ",
                 " NO WAY!!                       "];

const omg=[' smolWow     ',
           ' pcrowWow    ',
           ' smolD       ',
           ' bryce4Eyes  ',
           ' lycelW      ',
           ' smolBrain   ',
           ' pcrowBrain  ',
           ' cjyaPog     ',
           ' kaestr1Eyes ',
           ' maizEyes    ',
           ' maizBlush   ',
           ' elizab34Pog '];


end=" ";
num=" ";

if (query.length==0) {
  start=" Did you know ";
  factnum=Math.ceil(Math.random()*facts.length);
  num=factnum+": ";
  fact=facts[factnum-1];
  emote=omg[Math.floor(Math.random()*omg.length)];
  
  if (Math.random() <= 0.5) {
      end=didntknow[Math.floor(Math.random()*didntknow.length)]+omg[Math.floor(Math.random()*omg.length)];
  }
  
  final=num+start+fact+emote+end;
  
}
else {
  if (/^facts$/i.test(query)) {
      final=" Facts thanks to KayOdds! ";
  }
  
  if (/^version$|^v$/i.test(query)) {
      final=" This should work. - Aug 3 2021 at 20:40 UTC-5. ";
  }
  
  if (/^code$/i.test(query)) {
      final=" Here, check it out! https://gabo2825.github.io/twitch/facts/mapfacts.js ";
  }
}


query = parseInt(query.replace(/\D/g, ''));
if (!isNaN(query)) {
  start=" Did you know ";
  
  factnum=(query-1)%facts.length;
  num=(factnum+1)+": ";
  fact=facts[factnum];
  
  emote=omg[Math.floor(Math.random()*omg.length)];
  
  
  if (Math.random() <= 0.5) {
      end=didntknow[Math.floor(Math.random()*didntknow.length)]+omg[Math.floor(Math.random()*omg.length)];
  }
  
  final=num+start+fact+emote+end;
}


final
