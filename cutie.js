
const cool=['  kaestr1Cool    ',
            '  kaestr1Hug     ',
            '  maizCool       ',
            '  abbybaCool     ',
            '  smolCool       ',
            '  lycelCool      ',
            '  lycelYes       ',
            '  smolCheese     ',
            '  abbybaHug      ',
            '  elizab34Uwu    ',
            '  pcrowHug       ',
            '  lycelLuvSign   ',
            '  abibeaHug      '];

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



if (query.length==0) {
    query=' no one ';
    end=cry[Math.floor(Math.random()*cry.length)]+" whyyyy? "+cry[Math.floor(Math.random()*cry.length)]+" (please provide a name) ";
}

else {

    if (/\bpoop\b|feces|fecal|shit|testbadword/i.test(query)) {
        start=" No, ";
        query=user;
        middle=" that's not "; 
        trait=" cute ";
        end=cry[Math.floor(Math.random()*cry.length)];
    }

    else {

        if (/^chat$|gang$|team$/i.test(query)) {
            middle=" is full of ";
            trait=" cuties? ";
        }         
    
        if (/^EnC$|\sand\s|mods$/i.test(query)) {
            middle=" are hecking ";
            trait=" cuties? ";
        }

        if (/^Kae$/i.test(query)){
      
            kaerandom1 = Math.random();
       
            if (kaerandom1 <= 0.60) {
                end=" hell yeah! "+cool[Math.floor(Math.random()*cool.length)];
            }
            
            
            kaerandom2 = Math.random();
            
            if (kaerandom2 <= 0.10) {
                trait=" cute lil' flower? maizBlush ";
            }
            
            else if (kaerandom2 <= 0.40) {
                trait=" PRO ZELDA PLAYER??!! "+omg[Math.floor(Math.random()*omg.length)];
            }
                
            else if (kaerandom2 <= 0.70) {
                middle=" is hecking ";
                trait=" cool? "+omg[Math.floor(Math.random()*omg.length)];
            }
                    
            else if (kaerandom2 <= 0.80) {
                trait=" princess? maizBlush "+omg[Math.floor(Math.random()*omg.length)];
            }
  
        }
                
        if (/^Millie$/i.test(query)){
   
            millierandom1 = Math.random();
            
            if (millierandom1 <= 0.30) {
                trait=" fluff ball? maizBlush ";
            }
  
            else if (millierandom1 <= 0.45) {
                trait=" floof ball? lycelAAA ";
            }
            
            else if (millierandom1 <= 0.7) {
                trait=" mood? "+omg[Math.floor(Math.random()*omg.length)];
            }
                    
            millierandom2 = Math.random();
            
            if (millierandom1 <= 0.15) {
                trait=" Millie go meep! "+cool[Math.floor(Math.random()*cool.length)];
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
                
        if (/^matt$/i.test(query)){
            
            mattrandom1 = Math.random();
            
            if (mattrandom1 <= 0.6) {
                middle=" carried a Smant raid ";
                trait=" ON HIS OWN?? "+omg[Math.floor(Math.random()*omg.length)];
                  
                        
                mattrandom2 = Math.random();
       
                if (mattrandom2 <= 0.75) {
                    end=" That's so freaking cool! "+cool[Math.floor(Math.random()*cool.length)];
                }
                        
            }
  
        }
                
        if (/^Gem$|^Gemhunter$/i.test(query)){
            
            gemrandom1 = Math.random();
            
            if (gemrandom1 <= 0.6) {
                middle=" makes ";
                trait=" ART?? "+omg[Math.floor(Math.random()*omg.length)];
                  
                        
                gemrandom2 = Math.random();
       
                if (gemrandom2 <= 0.75) {
                    end=" That's so freaking cool! "+cool[Math.floor(Math.random()*cool.length)];
                }
                        
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

    }

}       


final=start+query+middle+trait+end;

if (/^version$|^v$/i.test(query)){
    final=" Fixed lycelLuvsign to lycelLuvSign . - June 17th 2021 at 19:15 UTC-5. "
}
else if (/^code$/i.test(query)){
    final=" Here's the code! https://gabo2825.github.io/cutie.js smolCheese "
}

final

            
