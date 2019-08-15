var lyrics = [ "Next time you see a brother down Stop and pick him up,Cause you might be the next one stuck. – Grand Puba",
"Life without knowledge is death in disguise Knowledge Of Self – Talib Kweli",
"Super Nintendo, Sega Genesis/When I was dead broke, man I couldn't picture this - The Notorious B.I.G.",
"Time is illmatic, keep static like wool fabric. Pack a 4-matic to crack your whole cabbage - Nas",
"God squad that's mad hard to serve Come frontin hard, then Bernhard Goetz what he deserves - GZA",
"This is the number one rule for your set In order to survive, gotta learn to live with regrets - Jay-Z"

             
];

function newLyric() {
var randomNumber = Math.floor(Math.random() * (lyrics.length));
document.getElementById("lyricDisplay").innerHTML = lyrics[randomNumber];
}