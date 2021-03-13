const facts=[" Minecraft is a sandbox game?? ",
             " Minecraft is a sandbox game?? ",
             " Minecraft is a sandbox game?? "];

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
           ' bbytesWut   ',
           ' abibeaLurk  ',
           ' elizab34Pog '];

start=" Did you know ";
fact=facts[Math.floor(Math.random()*facts.length)];
emote=omg[Math.floor(Math.random()*omg.length)];

final=start+fact+emote;

if (/^version$|^v$/i.test(query)) {
    final=" Last updated March 12 2021 at 22:08 EST. ";
}

final
