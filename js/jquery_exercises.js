"use strict";

// $(function() {
//
//     alert("the DOM has finished loading");
//
// });

// $('#first').css('background-color', 'yellow');

// $('.codeup').css('border', 'solid 1px red');

// $('li').css('font-size', '20px');
// $('h1, p, li').css('background-color', 'yellow');
// var contents = $('h1').html();
// alert(contents);

var tfh1 = true;
var tfp = true;
function toggle(x){
    if (x==true)
        x = false;
    else
        x = true;
    return x;
}
$('h1').click(function() {
    if (tfh1)
        $('h1').css('background-color', 'green');
    else
        $('h1').css('background-color', 'white');
    tfh1 = toggle(tfh1);
});

$('p').dblclick(function() {
    if(tfp)
        $('p').css('font-size', '18px');
    else
        $('p').css('font-size', '16px');
    tfp = toggle(tfp);
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);