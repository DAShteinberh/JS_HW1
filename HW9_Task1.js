var poem = "What\'s in the toy box? There\'s a one-eyed ted And a ball that\'s red, Some building bricks And a clock that ticks, A plastic boat And a duck that floats, A wind-up car And a silver star, A doll that cries And a plane that flies. That\'s what\'s in the toy box!";
var reg = /[^Aa ]{6,}/g;
var res = poem.match(reg);
console.log(res);