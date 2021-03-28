if (/^version$|^v$/i.test(query)) {
    " i'm trying so hard - March 27 2021 at 19:44 UTC-5. ";
}
else {
    count=1;
    while (count>0) {
        if (/^ronon$/i.test(query)) {
            count=count-1
            facts=[" He doesn’t care about anything except for food and naps. ",
                   " His name comes from the SciFi series: Stargate Atlantis! ",
                   " He broke his leg being 6 months old falling off from a bed. kaestr1Cry "];
            " Ronon (the red dog) is a cavalier King Charles Spaniel. "+facts[Math.floor(Math.random()*facts.length)];
        }
        else if (/^teyla$/i.test(query)) {
            count=count-1
            facts=[" She once found a toy in a cabinet 5’ above her head just by smell alone. ",
                   " She loves sneezing on people's faces. abibeaHug ",
                   " Her name comes from the SciFi series: Stargate Atlantis! "];
            " Teyla (the white dog) is a cavalier King Charles Spaniel. "+facts[Math.floor(Math.random()*facts.length)];
        }
        else if (/^pippin$/i.test(query)) {
            count=count-1
            facts=[" Despite being free fed and given wet food twice a day he wants you to know he’s still starving. ",
                   " He once activated sub only mode in Kae's chat. pcrowGiggle "];
            " Pippin is a domestic short hair cat. "+facts[Math.floor(Math.random()*facts.length)];
        }
        else {
            query=["ronon",
                   "pippin",
                   "teyla"];
            query[Math.floor(Math.random()*query.length)];
        }
    }   
}
