if (Math.random() <= 1/5) {
    "pp Peepo ( smolD )";
}
else {
    terms=['comms','ruby','roobify','c'];
    e=terms.indexOf(q);
    
    i=1;
    a='';
    while (i<terms.length) {
        a=a+terms[i];
        if(i<(terms.length-1)){
            a=a+', ';
        }
        i++;
    }
    
    comms=['Try '+a+'. Peepo',
           "Ruby is cool as a cucumber! He can roast me, but he won't hesitate to abbybaBop if you do - one stink to another stink",
           'execute xrby1',
           'execute roobify',
           'DAMN IT RUBY this is all your FOOKING fault smolGrump'];
    
    if(e!=-1) {
        comms[e]+" Peepo";
    }
    else {
        comms[Math.floor((Math.random()*(comms.length-1))+1)];
    }
}
