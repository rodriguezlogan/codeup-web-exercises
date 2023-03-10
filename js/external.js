"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var color = prompt("What's your favorite color?");
alert('Great, ' + color + ' is my favorite color too!');
var lm = 3;
var bb = 5;
var he = 1;
alert("You will have to pay: $" + (3*(lm+bb+he)));
var go = 400;
var am = 380;
var fb = 350;
alert("You will be paid $" + (Number((go*6)+(fb*10)+(am*4))) + " for working this week.");
var emptyClass = true;
var fitSchedule = true;
var canEnroll = emptyClass && fitSchedule;
alert("It is " + canEnroll + " that a student can be enrolled in the class");
var offerAvailable = true;
var items = prompt("How many items do you have?");
var premium = true;
var getOffer = (offerAvailable && items>=2) || premium;
alert(getOffer);

