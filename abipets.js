if (/^version$|^v$/i.test(query)) {
    " It's random, not randomizer elizab34Smh - March 27 2021 at 19:03 UTC-5. ";
}
else {
    if (/ronon/i.test(pet)) {
        " Ronon (the red dog) is a cavalier King Charles Spaniel. He doesn’t care about anything except for food and naps. ";
    }
    else if (/teyla/i.test(pet)) {
        " Teyla (the white dog) is a cavalier King Charles Spaniel. She once found a toy in a cabinet 5’ above her head just by smell alone. ";
    }
    else if (/pippin/i.test(pet)) {
        facts=[" Despite being free fed and given wet food twice a day he wants you to know he’s still starving. ",
               " He once activated sub only mode in Kae's chat. pcrowGiggle "];
        " Pippin is a domestic short hair cat. "+facts[Math.floor(Math.random()*pippinfacts.length)];
    }
}
