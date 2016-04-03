// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

var count = 0;

$(document).ready(function () {
	$('#a10').click(a10);
})

function a10 () {
	count = count+10;
	$('#out').html(count);
}


$(document).ready(function () {
	$('#a20').click(a20);
})

function a20 () {
	count = count+20;
	$('#out').html(count);
}

$(document).ready(function () {
	$('#a30').click(a30);
})

function a30 () {
	count = count+30;
	$('#out').html(count);
}

$(document).ready(function () {
	$('#n10').click(n10);
})

function n10 () {
	count = count-10;
	$('#out').html(count);
}

$(document).ready(function () {
	$('#n20').click(n20);
})

function n20 () {
	count = count-20;
	$('#out').html(count);
}

$(document).ready(function () {
	$('#n30').click(n30);
})

function n30 () {
	count = count-30;
	$('#out').html(count);
}

$(document).ready(function () {
	$('#red').click(red);
})

function red () {
	$('#out').css('background-color','red');
}

$(document).ready(function () {
	$('#blue').click(blue);
})

function blue () {
	$('#out').css('background-color','blue');
}

$(document).ready(function () {
	$('#out').click(out);
})

function out () {
	$('#out').css('background-color','white');
	count=0;
}