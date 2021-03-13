const facts=[" test1 ",
             " test2 "];

start=" Did you know ";
middle=facts[Math.floor(Math.random()*facts.length)];

final=start+middle;

if (/^version$|^v$/i.test(query)) {
    final=" Last updated March 12 2021 at 22:01 EST. ";
}

final
