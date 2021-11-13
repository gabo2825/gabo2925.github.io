if (Math.random() <= 1/1000) {
    "pp Peepo ( smolD )";
}
else {
    terms=['commands','ruby','xrby1','blameruby','roobify','query'];
    
    qsplit=q.split(' ');
    comm=qsplit[0];
    e=terms.indexOf(comm);
    
    i=1;
    query='';
    while (i<qsplit.length) {
        query=query+qsplit[i];
        i++;
        if (i<qsplit.length) {
            query=query+" ";
        }
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
    
// xrby1 command
    xrby1ruby = ['Red guy',
                 'Frisbee ',
                 'Uwuby widepeepoHappy',
                 'W:ohjby',
                 'Best friends with cicadas',
                 '6 feet tall at best NODDERS',
                 'Mamn',
                 'Roobs',
                 'Nerd',
                 'Fitzerby or something idk smolShrug',
                 'Mod that has been here the longest, for some reason',
                 'Horse Girl',
                 'Wtf red guy please eat Smadge'];
    
    
    
    comms=['Try '+a+'.',
           "Ruby is cool as a cucumber! He can roast me, but he won't hesitate to abbybaBop if you do - one stink to another stink",
           xrby1ruby[Math.floor(Math.random() * xrby1ruby.length)],
           'DAMN IT RUBY this is all your FOOKING fault smolGrump',
           'execute roobify',
           'current query is: "'+query+'".'];
    
    if(e!=-1) {
        comms[e]+" Peepo";
    }
    else {
        comms[Math.floor((Math.random()*(comms.length-3))+1)];
    }
}
