const abi=[" abibeaWave ",
           " abibeaLurk ",
           " abibeaHug "];
const cry=[' kaestr1Cry    ',
           ' elizab34Hands ',
           ' lycelHands    ',
           ' smolHands     ',
           ' tomshi1Cry    ',
           ' abbybaCry     ',
           ' archit3Cry    ',
           ' linkusCry     ',
           ' pcrowCry      ',
           ' smolCry       ',];
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
const sleep=[' pcrowCozy ',
             ' pcrowZ ',
             ' maizNap ',
             ' snazjdComfy ',
             ' cjyaComfy ',
             ' lycelComfy ',
             ' abbybaComfy ',
             ' hammer89Comfy ',
             ' smolNap '];
const nom=[' smolNom ',
           ' abbybaNom ',
           ' maizNom '];
const lul=[' elizab34LUL ',
           ' smolLUL ',
           ' pcrowGiggle '];
if (/^version$|^v$|^ver$/i.test(query)) {
    " Added a comma. - March 27 2021 at 21:26 UTC-5. ";
}
else if (/^code$/i.test(query)) {
    " Here, check it out! https://gabo2825.github.io/abipets.js ";
}
else {
    count=0;
    while (count<1) {
        if (/^ronon$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Ronon (the red dog) is a ";
            }
            else {
                count++
            }
            facts=[" He doesn’t care about anything except for food and naps. "+nom[Math.floor(Math.random()*nom.length)]+sleep[Math.floor(Math.random()*sleep.length)],
                   " His name comes from the SciFi series: Stargate Atlantis! "+omg[Math.floor(Math.random()*omg.length)],
                   " He broke his leg being 6 months old falling off from a bed. "+cry[Math.floor(Math.random()*cry.length)],
                   " His birthday is February 4th, Teyla's is October 4th, and Pippin's is September 4th. "+omg[Math.floor(Math.random()*omg.length)]];
            intro+" cavalier King Charles Spaniel: "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^teyla$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Teyla (the white dog) is a ";
            }
            else {
                count++
            }
            facts=[" She once found a toy in a cabinet 5’ above her head just by smell alone. "+omg[Math.floor(Math.random()*omg.length)],
                   " She loves sneezing on people's faces. "+lul[Math.floor(Math.random()*lul.length)],
                   " Her name comes from the SciFi series: Stargate Atlantis! "+omg[Math.floor(Math.random()*omg.length)],
                   " Her birthday is October 4th, Ronon's is February 4th, and Pippin's is September 4th. "+omg[Math.floor(Math.random()*omg.length)],
                   " She spins to the left (only to the left) when she's excited "+lul[Math.floor(Math.random()*lul.length)]];
            intro+" Teyla (the white dog) is a cavalier King Charles Spaniel: "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^pippin$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Pippin is a ";
            }
            else {
                count++
            }
            facts=[" Despite being free fed and given wet food twice a day he wants you to know he’s still starving. "+nom[Math.floor(Math.random()*nom.length)],
                   " He once activated emote only mode in Kae's chat. "+lul[Math.floor(Math.random()*lul.length)],
                   " His birthday is September 4th, Teyla's is October 4th, and Ronon's is February 4th. "+omg[Math.floor(Math.random()*omg.length)],
                   " Did ya know his name was originally Dr. Pepper?? "+omg[Math.floor(Math.random()*omg.length)]];
            intro+" domestic short hair cat: "+facts[Math.floor(Math.random()*facts.length)];
        }
        else {
            query=["Ronon",
                   "Pippin",
                   "Teyla"];
            query=query[Math.floor(Math.random()*query.length)];
            intro=" Abi has 3 pets: Ronon, Teyla, and Pippin!"+abi[Math.floor(Math.random()*abi.length)]+"Here's a fact about "+query+", Abi's ";
            count--;
        }
    }   
}
