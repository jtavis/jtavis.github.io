// 1. Use document.getElementById() and attach an .onclick event handler to #clickme
// 2. Assign this event handler to a function named tellFortune
// 3. The function ellFortune should:
// - A) store the values from the four inputs (#hometown, #partner, #favNum, #jobTitle) in variables
// - B) concatenate these variables into the sentence:
// - "You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + favNum + " kids."
// - C) output this string to #output

$(document).ready(function() {
	$ ('#clickme').click(tellFortune);
})

function tellFortune () {

	var hometown = $('#hometown').val();
	var partner = $('#partner').val();
	var favNum = $('#favNum').val();
	var jobTitle = $('#jobTitle').val();
	var output = "You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + favNum + " kids."
	$('#output').html(output);
}
