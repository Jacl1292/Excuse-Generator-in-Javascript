let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

var who_random = Math.floor(Math.random()*who.length);
var action_random = Math.floor(Math.random()*action.length);
var what_random = Math.floor(Math.random()*what.length);
var when_random = Math.floor(Math.random()*when.length);

let answer = who[who_random]+""+action[action_random]+""+what[what_random]+""+when[when_random];
document.querySelector("#excuse").innerHTML= answer;
