$(document).ready({
	// other event handlers
});

$(window).resize(function () {
		console.log($(window).width())
	});

$('#burger').click(function () {
	$('#mobile-nav').slideToggle();
});

function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 10
	});
};
//Initiates map

var fullAddress = "";
//Initiates fullAddress variable so is accessible to codeAddress function even thought not populated until searchButton is clicked

var zipCode = "";

//initiates zipCode variable

function codeAddress() {
	var geocoder = new google.maps.Geocoder();
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 10
	});

    var address = fullAddress;
    //setting address variable to fullAddress, which is supposed to be updated when the search button is clicked
    
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  //Google Maps API function setting the address on the map to the fullAddress passed from the search bar

function codeNPAddress() {
	var geocoder = new google.maps.Geocoder();
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 10
	});

    var address = "25 West 45th Street, New York, NY 10036";
    //Need to figure out how to send API addresses to get geocoded.
    
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  //Google Maps API function setting the markers on the map for all nonprofit addresses passed

function nonprofitsList (data) {
	if (data.organization.zipcode.substr(0,4) = zipCode){
		var source = $('#entry-template').html();
		var template = Handlebars.compile(source);
		$('#post').append(template(data));
		codeNPAddress();
	}
	//How do I take the data from the API and format it as an address Google Maps will accept?

	else{}
}
//Set up the nonprofit entries in handlebars template, and code NP address


$('#searchButton').click(function () {
//function that executes when search button clicked.

	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);

	var state = $('#state_id option:selected').text();
	var stateID = $('#state_id').val();
	var ntee = $('#ntee_id').val();
//Set up variables that pull in the search data

	fullAddress = $('#address1').val()+", "+$('#city').val()+", "+state+" "+$('#zip').val();
//Concatenate the full address from the various fields entered

	var url = 'https://projects.propublica.org/nonprofits/api/v1/search.json?page=0&state%5Bid%5D='+stateID+'&ntee%5Bid%5D='+ntee+'&c_code%5Bid%5D=3&order=revenue&sort_order=desc&callback=?';

//Pass search parameters to the API

	$.ajax({
		type: 'GET',
		url: url,
		dataType: "jsonp",
		success: function (response) {
			console.log(response)
		},
		error: function (xhr) {
			console.log(xhr)
		}
	})
	


	if ($('#enterSrch').is(':visible')){
			$('#enterSrch').slideToggle();
			$('#posts').slideToggle();
			$('#sidebar').slideToggle();
			codeAddress();
			nonprofitsList();
			$('#address').val('');

	}
//If on the starting search page, hide the "Enter Search" div and show the search results and map.  Show user enetered address, list nonprofits and show on map.  Clear the search parameters.


	else{
			codeAddress();
			nonprofitsList();
			$('#address').val('');

	}
//Same as above except not toggling visibility, just refreshing results.

});



