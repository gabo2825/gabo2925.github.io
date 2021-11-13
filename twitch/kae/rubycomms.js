if (Math.random() <= 1/1000) {
    "pp Peepo ( smolD )";
}
else {
    terms=['commands','ruby','xrby1','roobify','blameruby','query'];
    
    qsplit=q.split(' ');
    comm=qsplit[0];
    e=terms.indexOf(comm);
    
    i=1;
    query='';
    while (i<qsplit.length) {
        query=query+terms[i];
        i++;
    }
    
    i=1;
    a='';
    while (i<terms.length) {
        a=a+terms[i];
        if(i<(terms.length-1)){
            a=a+', ';
        }
        i++;
    }
    
    comms=['Try '+a+'.',
           "Ruby is cool as a cucumber! He can roast me, but he won't hesitate to abbybaBop if you do - one stink to another stink",
           'execute xrby1',
           'execute roobify',
           'DAMN IT RUBY this is all your FOOKING fault smolGrump',
           'current query is: "'+query+'".'];
    
    if(e!=-1) {
        comms[e]+" Peepo";
    }
    else {
        comms[Math.floor((Math.random()*(comms.length-1))+1)];
    }
}
