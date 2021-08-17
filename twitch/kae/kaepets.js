/*kaepets.js by Gabo2825. Code for Nightbot.*/
/*Used in kaestrain.*/
const introemote=[" kaestr1Hug ",
                  " kaestr1Cool ",
                  " kaestr1Eyes "];

const love=[' elizab34Uwu ',
            ' kaestr1Hug ',
            ' abibeaHug ',
            ' abbybaHug ',
            ' smolHug ',
            ' lycelHug ',
            ' pcrowHug ',
            ' archit3Hug ',
            ' bbytesLove ',
            ' archit3Love ',
            ' smolLove ',
            ' lycelLove ',
            ' pcrowL ',
	    ' lycelGib ',
            ' matt38Love ',
	    ' lycelAAA ',
	    ' SWOONER '];

const cool=["kaestr1Cool",
            "smolCool",
            "abbybaCool",
            "lycelCool",
            "pcrowCool",
            "archit3Cool",
            "CoolCat",
            "maizCool"];

const sad=[' kaestr1Cry    ',
           ' elizab34Hands ',
           ' lycelHands    ',
           ' smolHands     ',
           ' abbybaCry     ',
           ' archit3Cry    ',
           ' pcrowCry      ',
           ' smolCry       ',];

const omg=[' smolWow     ',
           ' pcrowWow    ',
           ' smolD       ',
           ' bryce4Eyes  ',
           ' lycelW      ',
           ' lycelAAA    ',
           ' kaestr1Eyes ',
           ' maizEyes    ',
           ' maizBlush   ',
	   ' bbytesS '];

const sleep=[' pcrowCozy ',
             ' pcrowZ ',
             ' maizNap ',
             ' cjyaComfy ',
             ' lycelComfy ',
             ' abbybaComfy ',
             ' smolNap '];

const nom=[' smolNom ',
           ' abbybaNom ',
           ' maizNom '];

const lul=[' elizab34LUL ',
           ' smolLUL ',
           ' pcrowGiggle '];

const pout=[' smolPout ',
	    ' pcrowCute '];

const evil=[' pcrowPanic ',
	    ' smolPanic ',
	    ' lycelChaos ',
	    ' lycelStab ',
	    ' lycelEvil ',
            ' smolEvil ',
            ' pcrowEvil '];

if (/^version$|^v$|^ver$/i.test(query)) {
    " New message for !millie. - August 3 2021 at 21:56 UTC-5. ";
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
                intro=" Millie is the ";
            }
            else {
                count++
            }
            facts=[" She has a bad attitude problem. "+omg[Math.floor(Math.random()*omg.length)],
		   " She has a seizure disorder, so she has to take medicine twice a day. "+pout[Math.floor(Math.random()*pout.length)],
		   " She is very VERY soft. "+love[Math.floor(Math.random()*love.length)],
		   " She really loves humans, but she despises animals. "+omg[Math.floor(Math.random()*omg.length)],
		   " She doesn't really like hugs, but we still love her. "+love[Math.floor(Math.random()*love.length)],
		   " She zooms like she's possessed. smolZoom "+omg[Math.floor(Math.random()*omg.length)]];
            intro+" demon cat lycelChaos : "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^Fitz$|^f$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Fitz is the ";
            }
            else {
                count++
            }
            facts=[" NOT MILLIE! smolFlushed ",
		   " He is incredibly big. "+omg[Math.floor(Math.random()*omg.length)]+love[Math.floor(Math.random()*love.length)],
		   " He loves to cuddle. "+love[Math.floor(Math.random()*love.length)],
		   " He, for some reason, loves sleeping on top of Kae's dresser. "+lul[Math.floor(Math.random()*lul.length)]+sleep[Math.floor(Math.random()*sleep.length)],
		   " Millie absolutely despises him. "+evil[Math.floor(Math.random()*evil.length)],
		   " He doesn't like kisses... but we love himb anyway. "+love[Math.floor(Math.random()*love.length)]];
            intro+" big cat widepeepoHappy : "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^Nym$|^n$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Nym is the smol cat, a ";
            }
            else {
                count++
            }
            facts=[" She had an accident long ago, so she lost a leg. "+pout[Math.floor(Math.random()*pout.length)],
		   " Don't let her cuteness fool you, she's the devil in cat form. "+evil[Math.floor(Math.random()*evil.length)],
		   " She is small, but she does not care. "+cool[Math.floor(Math.random()*cool.length)],
		   " Millie could absolutely woop her ass. "+evil[Math.floor(Math.random()*evil.length)],
		   " She hates a little bit of everything, but we love her anyway. "+love[Math.floor(Math.random()*love.length)]];
            intro+" 3 legged cutie SWOONER : "+facts[Math.floor(Math.random()*facts.length)];
        }
	    
	else if (/^Gwen$|^g$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Gwen is the dog, an ";
            }
            else {
                count++
            }
            facts=[" One of her eyes is half brown half blue. "+love[Math.floor(Math.random()*love.length)],
		   " She tries herding the cats. "+lul[Math.floor(Math.random()*lul.length)],
		   " She always turns off Kae's computer whenever she lies under the desk. "+omg[Math.floor(Math.random()*omg.length)]];
            intro+" Australian Shepherd SWOONER : "+facts[Math.floor(Math.random()*facts.length)];
        }
	    
        else {
            query=["Millie",
                   "Fitz",
                   "Nym",
		   "Gwen"];
            query=query[Math.floor(Math.random()*query.length)];
            intro=" Kae's got 4 cuties: Millie, Fitz, Nym, and Gwen!"+introemote[Math.floor(Math.random()*introemote.length)]+"Here's a fact about "+query+", the ";
            count--;
        }
    }   
}
