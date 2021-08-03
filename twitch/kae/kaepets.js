/*kaepets.js by Gabo2825. Code for Nightbot.*/
/*Used in kaestrain.*/
const introemote=[" kaestr1Hug ",
                  " kaestr1Cool ",
                  " kaestr1Eyes "];

const love=[' elizab34Uwu ',
            ' kaestr1Hug ',
            ' abibeaHug ',
            ' abbybaHug ',
            ' therea1896Hug ',
            ' smolHug ',
            ' lycelHug ',
            ' pcrowHug ',
            ' archit3Hug ',
            ' paintbUwU ',
            ' octopa3Love ',
            ' bbytesLove ',
            ' archit3Love ',
            ' smolLove ',
            ' lycelLove ',
            ' pcrowLove ',
	    ' lycelGib ',
            ' matt38Love '];

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
    " This thing is working. - August 4 2021 at 18:23 UTC-5. ";
}
else if (/^code$/i.test(query)) {
    " Here, check it out! https://gabo2825.github.io/twitch/kae/kaepets.js ";
}

else {
    count=0;
    while (count<1) {
        if (/^Millie$|^m$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Ronon is a ";
            }
            else {
                count++
            }
            facts=["a"];
            intro+" red cavalier King Charles Spaniel: "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^Fitz$|^f$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Teyla is a ";
            }
            else {
                count++
            }
		
	    hoursfunny=Math.floor(Math.random()*6)+25;
		
            facts=["b"];
            intro+" white cavalier King Charles Spaniel: "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^Nym$|^n$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Pippin is a ";
            }
            else {
                count++
            }
            facts=["c"];
            intro+" domestic short hair cat: "+facts[Math.floor(Math.random()*facts.length)];
        }
	    
	else if (/^Gwen$|^g$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Pippin is a ";
            }
            else {
                count++
            }
            facts=["c"];
            intro+" domestic short hair cat: "+facts[Math.floor(Math.random()*facts.length)];
        }
	    
        else {
            query=["Millie",
                   "Fitz",
                   "Nym",
		   "Gwen"];
            query=query[Math.floor(Math.random()*query.length)];
            intro=" Kae's got 4 cuties: Millie, Fitz, Nym, and Gwen!"+introemote[Math.floor(Math.random()*introemote.length)]+"Here's a fact about "+query+", Abi's ";
            count--;
        }
    }   
}
