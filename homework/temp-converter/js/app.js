$(document).ready(function () {
	$('#degF').keyup(convertF);
	$('#degC').keyup(convertC);

	function convertF () {
	var degF = parseInt($('#degF').val());
	$('#output').html(Math.round((degF-32)/1.8)+"&deg;C");
		if (degF<32) {
			$('#output2').text("Wear a coat!");
		}
		else if (degF>=32 && degF<70) {
			$('#output2').text("Wear a sweater!");
		}
		else {
			$('#output2').text("Wear shorts!");
		}
	}

	function convertC () {
	var degC = parseInt($('#degC').val());
	$('#output').html(Math.round((degC* 1.8) + 32)+"&deg;F");
		if (degF<0) {
			$('#output2').text("Wear a coat!");
		}
		else if (degF>=0 && degF<21) {
			$('#output2').text("Wear a sweater!");
		}
		else {
			$('#output2').text("Wear shorts!");
		}
	}
});