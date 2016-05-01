$(document).ready({
	// other event handlers
});

// $(window).resize(function () {
// 		console.log($(window).width())
// 	});

$('#burger').click(function () {
	$('#mobile-nav').slideToggle();
});
//for responsive mobile nav

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

var fullNPAddress = "";
//Initiates fullNPAddress variable so is accessible to codeNPAddress function even thought not populated until searchButton is clicked

var zipCode = "";

//initiates zipCode variable

function codeAddress(addressVar) {
	var geocoder = new google.maps.Geocoder();
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 10
	});

    var address = addressVar;
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


 

// function nonprofitsList (data) {
// 	if (data.organization.zipcode.substr(0,4) = zipCode){
// 		var source = $('#entry-template').html();
// 		var template = Handlebars.compile(source);
// 		$('#post').append(template(data));

// 		//populate the handlebars template with API data from organization object--not sure code above is specific enough
		
// 		data.forEach(function(organization){codeAddress();
// 		});

// 		//Drop a marker onto the Google Map for each org listing
// 	}
//-----------------Commenting out b/c can't connect to API.  Replacing with test data below.

function nonprofitsList (testData) {
	testData = [{organization: [
		{
		name: 'GOODWILL INDUSTRIES HOUSING CO INC',
		address: '421 27TH AVENUE',
		city: 'ASTORIA',
		state: 'NY',
		zipcode: '11102-4175',
		guidestar_url: 'http://www.guidestar.org/profile/11-2224215',
		nccs_url: 'http://nccsweb.urban.org/communityplatform/nccs/organization/profile/id/112224215/',
	}, 
	{
		name: 'FEGS HOME ATTENDANT SERVICES INC',
		address: '424 E 147TH ST',
		city: 'BRONX',
		state: 'NY',
		zipcode: '10455-4104',
		guidestar_url: 'http://www.guidestar.org/profile/13-3161675',
		nccs_url: 'http://nccsweb.urban.org/communityplatform/nccs/organization/profile/id/133161675/',
	}]}]

	console.log(testData);
	
		var source = $('#entry-template').html();
		var template = Handlebars.compile(source);
		$('#post').append(template(testData));

		//populate the handlebars template with API data from organization object--not sure code above is specific enough
		
		testData.forEach(function(organization){
			
			fullNPAddress = organization.address+', '+organization.city+', '+organization.state+' '+organization.zipcode;
			codeAddress(fullNPAddress);
		});
		
		//Drop a marker onto the Google Map for each org listing

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

	//commenting out this code because it's causing an error and plugging in a placeholder address for testing.
	
//Concatenate the full address from the various fields entered by user and puller from API

// 	var url = 'https://projects.propublica.org/nonprofits/api/v1/search.json?page=0&state%5Bid%5D='+stateID+'&ntee%5Bid%5D='+ntee+'&c_code%5Bid%5D=3&order=revenue&sort_order=desc&callback=?';

// //Pass search parameters to the API

// 	$.ajax({
// 		type: 'GET',
// 		url: url,
// 		dataType: "jsonp",
// 		success: function (response) {
// 			console.log(response)
// 		},
// 		error: function (xhr) {
// 			console.log(xhr)
// 		}
// 	})
	
	function clearValues() {
		$('#address1').val('');
		$('#city').val('');
		$('#state_id').val('');
		$('#zip').val('');
		$('#ntee_id').val('');
	}


	if ($('#enterSrch').is(':visible')){
			$('#enterSrch').slideToggle();
			$('#posts').slideToggle();
			$('#sidebar').slideToggle();
			codeAddress(fullAddress);
			nonprofitsList();
			clearValues();

	}
//If on the starting search page, hide the "Enter Search" div and show the search results and map.  Show user enetered address, list nonprofits and show on map.  Clear the search parameters.


	else{
			codeAddress(fullAddress);
			nonprofitsList();
			clearValues();

	}
//Same as above except not toggling visibility, just refreshing results.

});



