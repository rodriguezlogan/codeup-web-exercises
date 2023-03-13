"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var color = prompt("What's your favorite color?");
alert('Great, ' + color + ' is my favorite color too!');
var movies = prompt("How many movies?");
var days = prompt("How many days are you renting it for?");
var total = (movies * days) * 3;
alert("You will have to pay: $" + total);
var go = 400;
var am = 380;
var fb = 350;
var goHours = prompt("How many hours did you work at Google?");
var amHours = prompt("How many hours did you work at Amazon");
var fbHours = prompt("How many hours did you work at Facebook")
alert("You will be paid $" + (Number((go*goHours)+(fb*amHours)+(am*fbHours))) + " for working this week.");
var emptyClass = true;
var fitSchedule = true;
var canEnroll = emptyClass && fitSchedule;
alert("It is " + canEnroll + " that a student can be enrolled in the class");
var offerAvailable = true;
var items = prompt("How many items do you have?");
var premium = true;
var getOffer = (offerAvailable && items>=2) || premium;
alert(getOffer);

