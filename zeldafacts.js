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
             " princess Zelda is a princess?? - jubilantjenna                                          ",
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

start=" Did you know ";
  
query = parseInt(query.replace(/\D/g, ''));
fact=facts[Math.floor*(Math.random()*facts.length)];

if (!isNaN(query)) {
  query=query%facts.length;
  fact=query+": "+facts[query];
}

emote=omg[Math.floor(Math.random()*omg.length)];

end="  ";


if (Math.random() <= 0.5) {
    end=didntknow[Math.floor(Math.random()*didntknow.length)]+omg[Math.floor(Math.random()*omg.length)];
}


final=start+fact+emote+end;

if (/^facts$/i.test(query)) {
    final=" Facts retrieved from the following websites: https://www.thegamer.com/legend-zelda-breath-of-the-wild-things-didnt-know/ https://www.thegamer.com/legend-of-zelda-hilarious-reasons-economy-nonsense/ + chat suggestions. ";
}

if (/^version$|^v$/i.test(query)) {
    final=" Hopefully did something right KEKW (fourth try) . - April 14 2021 at 16:24 UTC-5. ";
}

if (/^code$/i.test(query)) {
    final=" Here, check it out! https://gabo2825.github.io/zeldafacts.js ";
}


final
