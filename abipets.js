if (/^version$|^v$/i.test(query)) {
    " Made the change from !ronon, !teyla, !pippin to !pets. - March 27 2021 at 19:27 UTC-5. ";
}
else {
    if (/^ronon$/i.test(query)) {
        facts=[" He doesn’t care about anything except for food and naps. ",
               " His name comes from the SciFi series: Stargate Atlantis! ",
               " He broke his leg being 6 months old falling off from a bed. kaestr1Cry "];
        " Ronon (the red dog) is a cavalier King Charles Spaniel. "+facts[Math.floor(Math.random()*facts.length)];
    }
    else if (/^teyla$/i.test(query)) {
        facts=[" She once found a toy in a cabinet 5’ above her head just by smell alone. ",
               " She loves sneezing on people's faces. abibeaHug ",
               " Her name comes from the SciFi series: Stargate Atlantis! "];
        " Teyla (the white dog) is a cavalier King Charles Spaniel. "+facts[Math.floor(Math.random()*facts.length)];
    }
    else if (/^pippin$/i.test(query)) {
        facts=[" Despite being free fed and given wet food twice a day he wants you to know he’s still starving. ",
               " He once activated sub only mode in Kae's chat. pcrowGiggle "];
        " Pippin is a domestic short hair cat. "+facts[Math.floor(Math.random()*facts.length)];
    }
}