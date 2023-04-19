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
$('h1').click(function() {
    $('h1').css('background-color', 'green');
});

$('p').dblclick(function() {
    $('p').css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);