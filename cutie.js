
const cool=['  kaestr1Cool    ',
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
           ' smolCry       '];

start=" Did y'all know ";
middle=" is a hecking ";
trait=" cutie? ";
end=" I bet ya didn't! "+cool[Math.floor(Math.random()*cool.length)];


if (/Kae/i.test(query)){
            
  kaerandom = Math.random();
            
  if (kaerandom <= 0.5) {
  trait=" cute lil' flower? maizBlush ";
  }
  
}

if (/Gabo/i.test(query)){
   
  gaborandom = Math.random();
            
  if (gaborandom <= 0.3) {
  trait=" sleep deprived child? maizCoffee ";
  }
  
  else if (gaborandom <= 0.6) {
  trait=" typo generator? smolLUL ";
  }
            
  else if (gaborandom <= 0.7) {
  trait=" Unexpected Identifier. pcrowDerp ";
  }
            
}

if (/Bryce/i.test(query)){
            
  brycerandom = Math.random();
            
  if (brycerandom <= 0.5) {
  end=" Remember, you're invincible and you can kill everything you touch lycelChaos "+cool[Math.floor(Math.random()*cool.length)];
  }
  
}


            
if (query.length==0) {
  query=' no one ';
  end=cry[Math.floor(Math.random()*cry.length)]+" whyyyy? "+cry[Math.floor(Math.random()*cry.length)];
}


final=start+query+middle+trait+end;
final;

            
