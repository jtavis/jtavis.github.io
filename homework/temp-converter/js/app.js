$(document).ready(function () {
	$('#degF').keyup(presto);
	$('#degC').keyup(presto);

	function presto () {
	var degF = parseFloat($('#degF').val());
	var degC = parseFloat($('#degC').val());


		if (degF!=null) {
			$('#output').text((degF* 1.8) + 32);
		}
		else if (degC!=null){
			$('#output').text((degC - 32) / 1.8);
		}
		else{
			alert('This is not a number');
		}

	}
});