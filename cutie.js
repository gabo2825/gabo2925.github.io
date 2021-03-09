
const happy=['  kaestr1Cool    ',
             '  kaestr1Hug     ',
             '  maizCool       ',
             '  abbybaCool     ',
             '  smolCool       ',
             '  lycelCool      ',
             '  lycelYes       ',
             '  therea1896Cool ',
             '  smolCheese     ',
             '  abbybaHug      ',
             '  elizab34Uwu    ',
             '  pcrowHug       '];

const cry=[' kaestr1Cry    ',
           ' elizab34Hands ',
           ' lycelHands    ',
           ' smolHands     ',
           ' abbybaCry     ',
           ' archit3Cry    ',
           ' pcrowCry      ',
           ' smolCry       ']

start=" Did y'all know ";
middle=" is a kecking ";
trait=" cutie ";
end=" I bet ya didn't "+emote[Math.floor(Math.random()*emote.length)];


if(/Kae/i.test(query)){
  trait=" cute lil' flower? maizBlush ";
}


if(query.length==0) {
  query+=' no one ';
}

else {
  o+=query;	end=" I bet ya didnt! "+emote[Math.floor(Math.random()*emote.length)];
}


start+query+middle+trait+end;
