clips=['Try chair, chair2, light, leg, tail, stinky, split.',
       'https://clips.twitch.tv/ReliableDaintyEndiveOpieOP-_Bmh3xw6eLfEkH1A',
       'back again elizab34Smh https://clips.twitch.tv/SparklingKathishCiderDansGame-4iLBBnoY8U3G2erk',
       'the light!! pcrowNo https://clips.twitch.tv/TenderEndearingAardvarkPanicVis-DeKWyIgL_tA5tmBM',
       'big millie fan. smolYep https://clips.twitch.tv/CrowdedFilthyPlumFunRun-QF05ChDXsVN3ZGZG',
       'Tail. lycelGib https://clips.twitch.tv/TrustworthyAgreeableChoughFutureMan-Zyg0o9PFwEMu5eVL',
       "can't deal with her sh*t pcrowRip https://clips.twitch.tv/InspiringIntelligentRadishTBTacoRight-0p9PA2xhD_ccaRlB",
       'TRUE SABOTAGE ppOverheat https://clips.twitch.tv/AthleticEphemeralToothSmoocherZ-IIpySMv74_thSJSi'];

c=['terms','chair','chair2','light','leg','tail','stinky','split'];
i=c.indexOf(q);
if(i!=-1) {
  clips[i]+" lycelYes";
}
else {
  clips[Math.floor(Math.random()*clips.length)];
}