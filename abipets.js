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
if (/^version$|^v$/i.test(query)) {
    " Added emotes that will 100% fail and i won't know how to fix. - March 27 2021 at 20:47 UTC-5. ";
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
                   " He broke his leg being 6 months old falling off from a bed. "+cry[Math.floor(Math.random()*cry.length)]];
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
            facts=[" She once found a toy in a cabinet 5’ above her head just by smell alone. ",
                   " She loves sneezing on people's faces. abibeaHug ",
                   " Her name comes from the SciFi series: Stargate Atlantis! "];
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
                   " He once activated emote only mode in Kae's chat. "+lul[Math.floor(Math.random()*lul.length)]];
            intro+" domestic short hair cat: "+facts[Math.floor(Math.random()*facts.length)];
        }
        else {
            query=["Ronon",
                   "Pippin",
                   "Teyla"];
            query=query[Math.floor(Math.random()*query.length)];
            intro=" Abi has 3 pets: Ronon, Teyla, and Pippin!+abi[Math.floor(Math.random()*abi.length)]+Here's a fact about "+query+", Abi's ";
            count--;
        }
    }   
}
