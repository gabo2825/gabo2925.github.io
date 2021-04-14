/*BOTW facts retrieved from 
https://www.thegamer.com/legend-zelda-breath-of-the-wild-things-didnt-know/ 
https://www.thegamer.com/legend-of-zelda-hilarious-reasons-economy-nonsense/ 
*/

const facts=[" BOTW is the first Zelda game without composer Koji Kondo??                     ",
             " BOTW's map is about DOUBLE the size of skyrim?? - ryk3ld                       ",
             " BOTW's Zelda's voice actor was not actually British??                          ",
             " BOTW was Originally Just For The Wii U??                                       ",
             " in BOTW, Satori Mountain Is Named After Late Nintendo President??              ",
             " in BOTW, the Great Plateau Was The First Area Built For The Game??             ",
             " in BOTW, The Game Started With A Small Team??                                  ",
             " BOTW's Guardians Are Based On The Jomon Period Of Japanese History??           ",
             " in BOTW, Zelda's Character Was The Most Difficult To Design??                  ",
             " Breath Of The Wild’s Hyrule Is About 12 Times As Large As Twilight Princess'?? ",
             " BOTW Is The Best-Selling Zelda Game Of All Time??                              ",
             " The Size Of Rupees Is Ridiculous in Zelda games??                              ",
             " Money Is An Endless Resource in Zelda games??                                  ",
             " in some games, Robbery Is Part Of The legend of Zelda's Economy??              ",
             " you gotta pay Money To Hold More Money in some Zelda games??                   ",
             " you can EAT ROCKS in BOTW?? - Kae                                              ",
             " Prices are really weird in Zelda games??                                       ",
             " in BOTW, cryonis' little guardian pisses Kae off??                             ",
             " princess Zelda is a princess?? - jubilantjenna                                 ",
             " Zelda is multilingual?? - Kae                                                  ",
             " the oracle games were supposed to be 3? and not 2??                            "];

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
           ' lycelAAA    ',
           ' smolBrain   ',
           ' pcrowBrain  ',
           ' cjyaPog     ',
           ' kaestr1Eyes ',
           ' maizEyes    ',
           ' maizBlush   ',
           ' abibeaLurk  ',
           ' elizab34Pog '];


  end=num="";

if (query.length==0) {
  start=" Did you know ";
  factnum=Math.ceil*(Math.random()*facts.length)
  num=factnum+": "
  fact=facts[factnum-1];
  emote=omg[Math.floor(Math.random()*omg.length)];
  
  if (Math.random() <= 0.5) {
      end=didntknow[Math.floor(Math.random()*didntknow.length)]+omg[Math.floor(Math.random()*omg.length)];
  }
  
  final=start+fact+emote+end;
  
}
else {
  if (/^facts$/i.test(query)) {
      final=" Facts retrieved from the following websites: https://www.thegamer.com/legend-zelda-breath-of-the-wild-things-didnt-know/ https://www.thegamer.com/legend-of-zelda-hilarious-reasons-economy-nonsense/ + chat suggestions. ";
  }
  
  if (/^version$|^v$/i.test(query)) {
      final=" Hopefully did something right KEKW (sixth try). - April 14 2021 at 16:57 UTC-5. ";
  }
  
  if (/^code$/i.test(query)) {
      final=" Here, check it out! https://gabo2825.github.io/zeldafacts.js ";
  }
}


query = parseInt(query.replace(/\D/g, ''));
if (!isNaN(query)) {
  start=" Did you know ";
  
  factnum=query%facts.length;
  num=factnum+": ";
  fact=facts[factnum-1];
  
  emote=omg[Math.floor(Math.random()*omg.length)];
  
  
  if (Math.random() <= 0.5) {
      end=didntknow[Math.floor(Math.random()*didntknow.length)]+omg[Math.floor(Math.random()*omg.length)];
  }
  
  final=num+start+fact+emote+end;
}


final
