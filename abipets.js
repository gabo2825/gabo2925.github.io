if (/^version$|^v$/i.test(query)) {
    " Fixed sth about the randomizer, also changed 'sub' to 'emote'. - March 27 2021 at 20:22 UTC-5. ";
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
            facts=[" He doesn’t care about anything except for food and naps. ",
                   " His name comes from the SciFi series: Stargate Atlantis! ",
                   " He broke his leg being 6 months old falling off from a bed. kaestr1Cry "];
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
            facts=[" Despite being free fed and given wet food twice a day he wants you to know he’s still starving. ",
                   " He once activated emote only mode in Kae's chat. pcrowGiggle "];
            intro+" domestic short hair cat: "+facts[Math.floor(Math.random()*facts.length)];
        }
        else {
            query=["Ronon",
                   "Pippin",
                   "Teyla"];
            query=query[Math.floor(Math.random()*query.length)];
            intro=" Here's a fact about "+query+", Abi's ";
            count--;
        }
    }   
}
