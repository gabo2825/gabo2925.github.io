/*facts retrieved from https://facts.net/lifestyle/entertainment/minecraft-facts/*/
const facts=[" Minecraft is a sandbox game?? ",
             " Minecraft is a game where players can create, transform, or destroy their surroundings?? ",
             " Mojang is a Swedish video game developer founded in the year 2009?? ",
             " Mojang released the game Minecraft in the year 2011?? ",
             " Markus Persson (Swedish video game developer) created Minecraft?? ",
             " The survival mode is one of the main modes in Minecraft?? ",
             " The creative mode gives players freedom?? ",
             " There are 107 Minecraft achievements in the game?? ",
             ' The "blocks" are used to create building structures?? ',
             " The Hostile Mobs of Minecraft are the main antagonist?? ",];

const didntknow=[" Well I didn't!! ",
                 " HUHH?? I DIDN?T KNOW THAT!! ",
                 " REALLY?? ",
                 " You're being serious, right?? ",
                 " Yes?? AND YOU DIDN'T TELL ME?? "];

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
    final=" Last updated March 12 2021 at 22:24 EST. ";
}

final
