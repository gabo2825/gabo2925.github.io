
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
            '  pcrowHug       ',
            '  lycelLuvsign   '];

const cry=[' kaestr1Cry    ',
           ' elizab34Hands ',
           ' lycelHands    ',
           ' smolHands     ',
           ' abbybaCry     ',
           ' archit3Cry    ',
           ' pcrowCry      ',
           ' smolCry       '];

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
           ' bbytesWut   ',
           ' abibeaLurk  ',
           ' elizab34Pog '];

start=" Did y'all know ";
middle=" is a hecking ";
trait=" cutie? ";
end=" I bet ya didn't! "+cool[Math.floor(Math.random()*cool.length)];


if (/^chat$/i.test(query)) {
  middle=" is full of ";
  trait=" cuties? ";
}

if (/^gang$/i.test(query)) {
            
  if (/^poop$/i.test(query)) {
  start=" No, ";
  query=user;
  middle=" that's not "; 
  trait=" cute ";
  end=cry[Math.floor(Math.random()*cry.length)];
  }
            
  else {
  middle=" is full of ";
  trait=" cuties? ";
  }     
            
}

if (/^EnC$|and/i.test(query)) {
  middle=" are hecking ";
  trait=" cuties? ";
}

if (/^Kae$/i.test(query)){
      
  kaerandom1 = Math.random();
       
  if (kaerandom1 <= 0.60) {
  end=" hell yeah! "+cool[Math.floor(Math.random()*cool.length)];
  }
            
            
  kaerandom2 = Math.random();
            
  if (kaerandom2 <= 0.30) {
  trait=" cute lil' flower? maizBlush ";
  }
            
  else if (kaerandom2 <= 0.60) {
  trait=" PRO ZELDA PLAYER??!! "+omg[Math.floor(Math.random()*omg.length)];
  }
            
  else if (kaerandom2 <= 0.80) {
  middle=" is hecking ";
  trait=" cool? "+omg[Math.floor(Math.random()*omg.length)];
  }
  
}

if (/^Gabo$/i.test(query)){
   
  gaborandom = Math.random();
            
  if (gaborandom <= 0.3) {
  trait=" sleep deprived child? maizCoffee ";
  end=" Go to sleep, Gabo!! "+cool[Math.floor(Math.random()*cool.length)];
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
  end=omg[Math.floor(Math.random()*omg.length)]+" Remember, you're invincible and you can kill everything you touch lycelChaos "+cool[Math.floor(Math.random()*cool.length)];
  }
  
}

if (/^Kat$|^robin$/i.test(query)){
            
  katrandom1 = Math.random();
            
  if (katrandom1 <= 0.35) {
  middle=" is a ";
  trait=" KART RACER??!! smolWow "+omg[Math.floor(Math.random()*omg.length)];
  }
            
  else if (katrandom1 <= 0.7) {
  middle=" plays ";
  trait=" rugby?! "+omg[Math.floor(Math.random()*omg.length)];
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

            
