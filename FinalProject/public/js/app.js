$(document).ready({
	// other event handlers
});


$('#burger').click(function () {
	$('#mobile-nav').slideToggle();
});
//for responsive mobile nav

// global map variable
var map;

function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 12
	});
};
//Initiates map

var fullAddress;
//Initiates fullAddress variable so is accessible to codeAddress function even thought not populated until searchButton is clicked

var fullNPAddress = [];
//Initiates fullNPAddress array so is accessible to codeAddress function even thought not populated until searchButton is clicked

var zipCode;

//initiates zipCode variable for zip code from user


function codeAddress(addressVar) {
	var geocoder = new google.maps.Geocoder();

    var address = addressVar;
    //setting address variable to fullAddress, which is supposed to be updated when the search button is clicked
    
    var pinImage = new google.maps.MarkerImage("http://maps.google.com/mapfiles/arrow.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));

    //code for green arrow icon

    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: pinImage,
            shadow: pinShadow,
            zIndex: 1000
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  //Google Maps API function setting the address on the map to the fullAddress passed from the search bar


function test (data) {
    console.log('testing!')
    console.log(data)
}


$('#searchButton').click(function () {
//function that executes when search button clicked.
    initMap()

	var state = $('#state_id option:selected').text();
	var stateID = $('#state_id').val();
	var ntee = $('#ntee_id').val();
	var city = $('#city').val();
    zipCode = $('#zip').val();
//Set up variables that pull in the search data

	fullAddress = $('#address1').val()+", "+$('#city').val()+", "+state+" "+$('#zip').val();

//Concatenate the full address from the various fields entered by user and puller from API


	$.ajax({
		type: 'GET',
		url: '/search/'+stateID+'/'+ntee+'/'+city,

		success: function (response) {
			parseData(response)
		},
		error: function (xhr) {
			console.log(xhr)
		}
	})

	function parseData (data) {
		console.log(typeof data)
		var source = $('#entry-template').html();
		var template = Handlebars.compile(source);

		data.filings.forEach(function(org) {  
          console.log(org)
            if (org.organization.city == city.toUpperCase()){
            	console.log(city)
				fullNPAddress.push(org.organization.address+', '+org.organization.city+', '+org.organization.state+' '+org.organization.zipcode);
				console.log(fullNPAddress);

            	$('#post').append(template(org.organization));
            } else {

            }
		});

		        var geocoder = new google.maps.Geocoder();

        var delay = 1000

        fullNPAddress.forEach(function(orgAdd){

        	setTimeout(function () {
	            geocoder.geocode( { 'address': orgAdd}, function(results, status) {
	            	console.log(results)
	              if (status == google.maps.GeocoderStatus.OK) {
	                var marker = new google.maps.Marker({
	                    map: map,
	                    position: results[0].geometry.location
	                });
	              } else {
	                alert("Geocode was not successful for the following reason: " + status);
	              }
            	});
        	}, delay)

        	delay += 700
        })

	}
	
	function clearValues() {
		$('#address1').val('');
		$('#city').val('');
		$('#state_id').val('');
		$('#zip').val('');
		$('#ntee_id').val('');
        fullNPAddress=[];
	}


	if ($('#enterSrch').is(':visible')){
			$('#enterSrch').slideToggle();
			$('#posts').slideToggle();
			$('#sidebar').slideToggle();
			codeAddress(fullAddress);
			clearValues();

	}
//If on the starting search page, hide the "Enter Search" div and show the search results and map.  Show user enetered address, list nonprofits and show on map.  Clear the search parameters.


	else{
			codeAddress(fullAddress);
			clearValues();

	}
//Same as above except not toggling visibility, just refreshing results.

});

