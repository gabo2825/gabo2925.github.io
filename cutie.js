
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


if (/^chat$/i.test(query)){
  middle=" is full of ";
  trait=" cuties? ";
}

if (/^EnC$/i.test(query)){
  middle=" are hecking ";
  trait=" cuties? ";
}

if (/^Kae$/i.test(query)){
      
  kaerandom1 = Math.random();
       
  if (kaerandom1 <= 0.60) {
  end=" kaestr1Cool hell yeah! "+cool[Math.floor(Math.random()*cool.length)];
  }
            
            
  kaerandom2 = Math.random();
            
  if (kaerandom2 <= 0.33) {
  trait=" cute lil' flower? maizBlush ";
  }
            
  else if (kaerandom2 <= 0.66) {
  trait=" PRO ZELDA PLAYER??!! ";
  }
  
}

if (/^Gabo$/i.test(query)){
   
  gaborandom = Math.random();
            
  if (gaborandom <= 0.3) {
  trait=" sleep deprived child? maizCoffee ";
  }
  
  else if (gaborandom <= 0.6) {
  trait=" typo generator? smolLUL ";
  }
            
  else if (gaborandom <= 0.7) {
  trait=" Unexpected Identifier. pcrowDerp ";
  end=" uhh.. wha-? ";
  }
            
}

if (/^Bryce$/i.test(query)){
            
  brycerandom = Math.random();
            
  if (brycerandom <= 0.6) {
  end=" lycelW Remember, you're invincible and you can kill everything you touch lycelChaos "+cool[Math.floor(Math.random()*cool.length)];
  }
  
}

if (/^Kat$|^robin$/i.test(query)){
            
  katrandom1 = Math.random();
            
  if (katrandom1 <= 0.35) {
  middle=" is a ";
  trait=" KART RACER??!! smolWow ";
  }
            
  else if (katrandom1 <= 0.7) {
  middle=" plays ";
  trait=" rugby?! cjyaPog ";
  }
  
  
  if (katrandom1 <= 0.7) {
              
    katrandom2 = Math.random();
       
    if (katrandom2 <= 0.8) {
    end=" That's so freaking cool! "+cool[Math.floor(Math.random()*cool.length)];
    }
              
  }
  
}


            
if (query.length==0) {
  query=' no one ';
  end=cry[Math.floor(Math.random()*cry.length)]+" whyyyy? "+cry[Math.floor(Math.random()*cry.length)];
}


final=start+query+middle+trait+end;
final;

            
