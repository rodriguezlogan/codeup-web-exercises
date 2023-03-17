"use strict";

var x = 1;
var y = 1
while (x<=16){
    y*=2
    console.log(y);
    x++
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Starting amount of cones: " + allCones);
do{
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if(allCones-conesBought>=0)
    console.log(conesBought + " cones sold");
    else
        console.log("Cannot sell you " + conesBought + " cones I only have " + allCones)
    allCones-=conesBought;
    if (allCones<=0)
        console.log("Yay! I sold them all!");
}while(allCones>0)