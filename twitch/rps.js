const nbprob=["rock","paper","scissors"];
nb=nbprob[Math.floor(Math.random()*nbprob.length)];

if(query.length==0){
  final='Please specify "r", "p", "s". lycelIdk';
}
else{
  res=0;
  if(/^rock$/i.test(query)){
    query="rock";
    if(/^scissors$/i.test(nb)){
      res=2;
    }
  }
  else if(/^paper$/i.test(query)){
    query="paper";
    if(/^rock$/i.test(nb)){
      res=2;
    }
  }
  else if(/^scissors$/i.test(query)){
    query="scissors";
    if(/^paper$/i.test(nb)){
      res=2;
    }
  }
  
  nbt="I chose "+nb;
  
  if (res=2){
    end=", you won! elizab34Pog";
  }
  
  else if (nb=query){
    end=", it's a tie! smolYay";
  }
  
  else{
    end=", you lose! lycelChaos";
  }
  final=nbt+end;
}
final
