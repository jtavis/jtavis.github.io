$(document).ready(function () {
	$('#degF').keypress(presto);
	$('#degC').keypress(presto);

	function presto () {
	var degF = $('#degF').val();
	var degFNum = parseInt(degF);
	var degC = $('#degC').val();
	var degCNum = parseInt(degC);

		if (degFNum!=NaN) {
			var convertC = (degFNum* 1.8) + 32;
			$('#degC').val(convertC);
		}
		else if (degCNum!=NaN){
			var convertF = (degCNum- 32) / 1.8;
			$('#degF').val(convertF);
		}
		else{
			alert ("This is not a number");
		}

	}
});