$(document).ready(function () {
	$('#search').click(getClothes);

	function getClothes() {
		var zip = parseInt($('#zip').val());
		//write code to get current temp for zip code
		var degF = 10;

		$('#temp').html(degF+"&deg;F");
			if (degF<32) {
				$('#hat').text("Winter hat");
				$('#top').text("Warm coat");
				$('#bottom').text("Warm pants");
				$('#shoes').text("Snow boots");
			}
			else if (degF>=32 && degF<70) {
				$('#hat').text("Light hat");
				$('#top').text("Jacket");
				$('#bottom').text("Pants");
				$('#shoes').text("Sneakers");
			}
			else {
				$('#hat').text("Sun hat");
				$('#top').text("Tshirt");
				$('#bottom').text("Shorts");
				$('#shoes').text("Flip-flops");
			}
	}


	$('#clear').click(function(){
		$('#degF').val("");
		$('#degC').val("");
		$('#output').text("");
		$('#output2').text("");
	})
});