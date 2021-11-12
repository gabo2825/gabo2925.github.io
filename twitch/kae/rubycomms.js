if (Math.random() <= 1/100) {
    "pp peepoHappy";
}
else {
    terms=['comms','a','b','c'];
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
           'yes ruby',
           'b',
           'yes'];
    
    if(e!=-1) {
        comms[e]+" lycelYes";
    }
    else {
        comms[Math.floor((Math.random()*(comms.length-1))+1)];
    }
}
