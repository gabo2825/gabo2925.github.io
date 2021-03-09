
const emote=['  kaestr1Cool    ',
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

start=" Did y'all know ";
middle=" is a kecking ";
trait=" cutie ";
end=" I bed ya didn't "+emote[Math.floor(Math.random()*emote.length)];


if(query.length==0) {
  o+='no one';
}

else {
  o+=query;	end=" I bet ya didnt! "+emote[Math.floor(Math.random()*emote.length)];
}


o+=" is a hecking "; 

if(/Kae/i.test(query)){
  trait=" cute lil' flower? maizBlush ";
}

else{
  o+='cutie??';
}

o+=end;
o;
