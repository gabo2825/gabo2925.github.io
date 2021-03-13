const facts=[" test1 ",
             " test2 "];

start=" Did you know ";
middle=facts[Math.floor(Math.random()*facts.length)];

final=start+middle;

if (/^version$|^v$/i.test(query)) {
    final=" Last updated march 12 2021 at 21:54 EST. ";
}

final
