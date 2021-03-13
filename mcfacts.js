/*facts retrieved from https://facts.net/lifestyle/entertainment/minecraft-facts/*/
const facts=[" Minecraft is a SANDBOX GAME?? ",
             " Minecraft is a game where players can CREATE, TRANSFORM, AND DESTROY their SURROUNDINGS?? ",
             " Mojang is a Swedish video game developer founded in the year 2009?? ",
             " Mojang released the game Minecraft in the year 2011?? ",
             " Markus Persson (Swedish video game developer) CREATED Minecraft?? ",
             " The survival mode is ONE OF THE MAIN MODES IN MINECRAFT?? ",
             " The creative mode GIVES PLAYERS FREEDOM?? ",
             " THERE ARE 107 MINECRAFT ACHIEVEMENTS IN THE GAME?? ",
             ' The "blocks" are used to CREATE BUILDING STRUCTIRES?? ',
             " The Hostile Mobs of Minecraft ARE THE MAIN ANTAGONISTS?? ",];

const didntknow=[" Well I didn't!! ",
                 " HUHH?? I DIDN?T KNOW THAT!! ",
                 " REALLY?? ",
                 " You're being serious, right?? ",
                 " Yes?? AND YOU DIDN'T TELL ME?? ",
                 " OMG YOU SHOULD'VE TOLD ME!! "];

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

end="  ";


if (Math.random() <= 0.5) {
    end=didntknow[Math.floor(Math.random()*didntknow.length)]+omg[Math.floor(Math.random()*omg.length)];
}


final=start+fact+emote+end;

if (/^version$|^v$/i.test(query)) {
    final=" Last updated March 12 2021 at 22:32 EST. ";
}

final
