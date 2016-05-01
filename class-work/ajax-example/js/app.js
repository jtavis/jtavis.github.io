$(document).ready(function () {

	// var citiBike = 'http://api.citybik.es/citi-bike-nyc.json'
	

	$('#movie-search').submit(function(evt){
		evt.preventDefault();
		var searchTerm = $('#title').val();
		var url = 'http://www.omdbapi.com/?t='+searchTerm;

		$.ajax({
			type: 'GET',
			url: url,
			success: function (response) {
				console.log(response)
			},
			error: function (xhr) {
				console.log(xhr)
			}
		})
	})

	// $.ajax({
	// 	type: 'GET',
	// 	url: omdb,
	// 	success: function (response) {
	// 		parseCitiBike(response)
	// 	},
	// 	error: function (xhr) {
	// 		console.log(xhr)
	// 	}
	// })



	// function parseCitiBike (data) {
	// 	console.log(data)
	// 	data.forEach(function(station){

	// 		if (station.bikes>5) {
	// 			var h3 = '<h3>Station: '+station.name+'</h3>';
	// 			var p1 = '<p>Available: '+station.bikes+'</p>';
	// 			var p2 = '<p>Open spots:'+station.free+'</p>';
	// 			var p3 = '<p>Total spots:'+(station.free+station.bikes)+'</p>';
	// 			$('body').append(h3+p1+p2+p3+'<hr>');
	// 		}
	// 		else{

	// 		}

	// 		// console.log(station.name);
	// 		// console.log('bikes: '+station.bikes);
	// 		// console.log('free: '+station.free);
	// 	});
	// }

});
