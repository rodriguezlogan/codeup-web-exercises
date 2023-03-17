"use strict";

function showMultiplicationTable(x){
    for(var i = 1; i <= 10; i++){
        console.log(x + " x " + i + " = " + (x*i));
    }
}

var num = prompt("enter a number");
showMultiplicationTable(num);

for(var i = 1; i <= 10; i++){
    var random = Math.floor(Math.random()*180)+20;
    if (random % 2 === 0) {
        console.log(random + ' is even');
    }
    else
    console.log(random + ' is odd')
}

// leaving room for exercise 4

for(var i = 100; i>0; i-=5){
    console.log(i);
}