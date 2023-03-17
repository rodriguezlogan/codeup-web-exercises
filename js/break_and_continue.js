"use strict";

var oddNum = 0;
while (true) {
    if (1 <= oddNum < 50 && oddNum % 2 !== 0) {
    break;
    }
    oddNum = +prompt("enter an odd number between 1 and 50");
}
for(var i = 1; i<50; i+=2){
    if(i === oddNum){
        console.log("Yikes! Skipping number: " + oddNum);
        continue;
    }
    console.log("Here is an odd number: " + i);
}