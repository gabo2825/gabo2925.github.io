if (/^version$|^v$/i.test(query)) {
    " Corrected some gramatical errors. - March 27 2021 at 19:18 UTC-5. ";
}
else {
    if (/ronon/i.test(pet)) {
        facts=[" He doesn’t care about anything except for food and naps. ",
               " His name comes from the SciFi series: Stargate Atlantis! "];
        " Ronon (the red dog) is a cavalier King Charles Spaniel. "+facts[Math.floor(Math.random()*facts.length)];
    }
    else if (/teyla/i.test(pet)) {
        facts=[" She once found a toy in a cabinet 5’ above her head just by smell alone. ",
               " She loves sneezing on people's faces. abibeaHug ",
               " Her name comes from the SciFi series: Stargate Atlantis! "];
        " Teyla (the white dog) is a cavalier King Charles Spaniel. "+facts[Math.floor(Math.random()*facts.length)];
    }
    else if (/pippin/i.test(pet)) {
        facts=[" Despite being free fed and given wet food twice a day he wants you to know he’s still starving. ",
               " He once activated sub only mode in Kae's chat. pcrowGiggle "];
        " Pippin is a domestic short hair cat. "+facts[Math.floor(Math.random()*facts.length)];
    }
}
