const nbprob=["rock","paper","scissors"];
nb=nbprob[Math.floor(Math.random()*nbprob.length)];
nbt="I chose "+nb;

if(query.length==0){
  final='Please specify "r", "p", "s". lycelIdk';
}
else{
  res=0;
  if(/^rock$|^r$/i.test(query)){
    query="rock";
    if(/^scissors$/i.test(nb)){
      res=1;
    }
  }
  else if(/^paper$|^p$/i.test(query)){
    query="paper";
    if(/^rock$/i.test(nb)){
      res=1;
    }
  }
  else if(/^scissors$|^s$/i.test(query)){
    query="scissors";
    if(/^paper$/i.test(nb)){
      res=1;
    }
  }

  ust=", you chose "+query;
  if (res=1){
    end=", you win! elizab34Pog";
  }
  
  else if (nb===query){
    end=", it's a tie! smolYay";
  }
  
  else{
    end=", you lose! lycelChaos";
  }
  final=nbt+ust+end;
}
final
