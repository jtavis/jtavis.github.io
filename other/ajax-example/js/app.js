$(document).ready(function () {

	// OMDB
	// $('#movie-search').submit(function (evt) {
	// 	evt.preventDefault();
	// 	var searchTerm = $('#title').val()
	// 	var url = 'http://www.omdbapi.com/?t=' + searchTerm

	// 	$.ajax({
	// 		type: 'GET',
	// 		url: url,
	// 		success: function (response) {

	// 			console.log(response)

	// 		},
	// 		error: function (xhr) {
	// 			console.log(xhr)
	// 		}
	// 	})
	// })


	// CITIBIKE
	var citiBike = 'http://api.citybik.es/citi-bike-nyc.json'

	$.ajax({
		type: 'GET',
		url: citiBike,
		success: function (response) {
			parseCitiBike(response)
		},
		error: function (xhr) {
			console.log(xhr)
		}
	})



	// CITI BIKE FUNCTION
	function parseCitiBike (data) {
		// log out response from server
		console.log(data)

		// log out first station only
		console.log(data[0])
		console.log(data[0].name)
		console.log(data[0].free)
		console.log(data[0].bikes)

		// loop over each station
		// data.forEach(function (station) {

		// 	// only display stations with more than 5 available bikes
		// 	if (station.bikes > 5) {
		// 		var h3 = '<h3>' + station.name + '</h3>'
		// 		var p1 = '<p> Available bikes: ' + station.bikes + '</p>'
		// 		var p2 = '<p> Open spots: ' + station.free + '</p>'
		// 		var p3 = '<p> Capacity: ' + (station.bikes + station.free) + '</p>'

		// 		$('body').append(h3+p1+p2+p3+'<hr>')
		// 	}
		// })

		// or, use handlears templating
		// 1) find your handlebars template in the HTML
		var source = $('#station-template').html()
		// 2) compile the template using Handlebars.compile
		var template = Handlebars.compile(source)
		// 3) pass the compiled template the data you are trying to loop over and append it to the DOM
		$('#citibike-wrapper').append(template(data))
	}

})










