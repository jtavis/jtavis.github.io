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

// global map variable
var map;

function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 10
	});
};
//Initiates map

var fullAddress = "";
//Initiates fullAddress variable so is accessible to codeAddress function even thought not populated until searchButton is clicked

var fullNPAddress = [];
//Initiates fullNPAddress array so is accessible to codeAddress function even thought not populated until searchButton is clicked

var zipCode = "";

//initiates zipCode variable

function codeAddress(addressVar) {
	var geocoder = new google.maps.Geocoder();
	// var mapDiv = document.getElementById('map');
	// var map = new google.maps.Map(mapDiv, {
	//   center: {lat: 40.7484444, lng: -73.9878441},
	//   zoom: 10
	// });

    var address = addressVar;
    //setting address variable to fullAddress, which is supposed to be updated when the search button is clicked
    
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // map.setCenter(results[0].geometry.location);
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
	testData = [{'organization': [
		{
		'name': 'GOODWILL INDUSTRIES HOUSING CO INC',
		'address': '9 BOND ST',
		'city': 'BROOKLYN',
		'state': 'NY',
		'zipcode': '11201-5805',
		'guidestar_url': 'http://www.guidestar.org/profile/11-2224215',
		'nccs_url': 'http://nccsweb.urban.org/communityplatform/nccs/organization/profile/id/112224215/',
	}, 
	{
		'name': 'FEGS HOME ATTENDANT SERVICES INC',
		'address': '424 E 147TH ST',
		'city': 'BRONX',
		'state': 'NY',
		'zipcode': '10455-4104',
		'guidestar_url': 'http://www.guidestar.org/profile/13-3161675',
		'nccs_url': 'http://nccsweb.urban.org/communityplatform/nccs/organization/profile/id/133161675/',
	}]}]

	console.log(testData);
	
		var source = $('#entry-template').html();
		var template = Handlebars.compile(source);
		//populate the handlebars template with API data from organization object
		
		testData.forEach(function(org) {  
            org.organization.forEach(function (organization) {

                // if (organization.zipcode.slice(0,5) == zipCode){
                //     console.log(organization.zipcode.slice(0,5));
    			fullNPAddress.push(organization.address+', '+organization.city+', '+organization.state+' '+organization.zipcode);
    			console.log(fullNPAddress);

                $('#post').append(template(organization));
                // }
                // else {}
            })
		});

        var geocoder = new google.maps.Geocoder();

        fullNPAddress.forEach(function(orgAdd){
            geocoder.geocode( { 'address': orgAdd}, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
              } else {
                alert("Geocode was not successful for the following reason: " + status);
              }
            });
        })
		
		//Drop a marker onto the Google Map for each org listing

}
//Set up the nonprofit entries in handlebars template, and code NP address


$('#searchButton').click(function () {
//function that executes when search button clicked.
    initMap()
	// var source   = $("#entry-template").html();
	// var template = Handlebars.compile(source);

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














// //Google Maps coding multiple addresses.
//         var map;
//         var bounds;
//         var locationCount;
//         var infoWindow = null;
//         // The array of locations to mark on the map.
//         // Add as many locations as necessary.
//         var locations = [
//             ['My First Location', '1234 Migh Street, Suite 111', 'Mightown', 'TX', '77777', 'http://www.example.com/path/to/your/marker_icon.png'],
//             ['My Second Location', '4321 Yore Street, Suite 222', 'Yoretown', 'TX', '88888', 'http://www.example.com/path/to/your/marker_icon.png']
//         ];
//         // Init the map
//         function init() {
//             // Customize look of the map.
//             // https://www.mapbuildr.com/
//             var mapOptions = {
//                 zoom: 14,
//                 zoomControl: true,
//                 zoomControlOptions: {
//                     style: google.maps.ZoomControlStyle.SMALL,
//                 },
//                 disableDoubleClickZoom: true,
//                 mapTypeControl: false,
//                 panControl: false,
//                 scaleControl: false,
//                 scrollwheel: false,
//                 streetViewControl: false,
//                 draggable : true,
//                 overviewMapControl: false,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP,
//                 styles: [{
//                     featureType: 'all',
//                     stylers: [
//                         {saturation: -100},
//                         {gamma: 0.50}
//                     ]
//                 }]
//             }
//             var mapElement = document.getElementById('map');
//             map = new google.maps.Map(mapElement, mapOptions);
//             // OPTIONAL: Set listener to tell when map is idle
//             // Can be useful during dev
//             google.maps.event.addListener(map, "idle", function(){
//                 // console.log("map is idle");
//             });
//             var geocoder = new google.maps.Geocoder();
//             bounds = new google.maps.LatLngBounds();
//             locationCount = 0;
//             // Init InfoWindow and leave it
//             // for use when user clicks marker
//             infoWindow = new google.maps.InfoWindow( { content: "Loading content..." } );
//             // Loop through locations and set markers
//             for (i = 0; i < locations.length; i++) {
//                 var address = locations[i][1] + '+' + locations[i][2] + ',' + locations[i][3] + '+' + locations[i][4];
//                 //Get latitude and longitude from address
//                 geocoder.geocode( {'address': address}, onGeocodeComplete(i));
//             }
//             // Re-center map on window resize
//             google.maps.event.addDomListener(window, 'resize', function() {
//                 var center = map.getCenter();
//                 google.maps.event.trigger(map, "resize");
//                 map.setCenter(center);
//             });
//         } // END init()
//         // Triggered as the geocode callback
//         function onGeocodeComplete(i) {
//             // Callback function for geocode on response from Google.
//             // We wrap it in 'onGeocodeComplete' so we can send the
//             // location index through to the marker to establish
//             // content.
//             var geocodeCallBack = function(results, status) {
//                 if (status == google.maps.GeocoderStatus.OK) {
//                     // The HTML content for the InfoWindow.
//                     // Includes a form to allow the user to
//                     // get directions.
//                     var windowContent = '<form id="form-directions" action="http://maps.google.com/maps" method="get" target="_blank">' +
//                         '<p><strong>' + locations[i][0] + '</strong><br>' +
//                         locations[i][1] + '<br>' +
//                         locations[i][2] + ', ' + locations[i][3] + ' ' + locations[i][4] + '</p>' +
//                         '<input type="hidden" name="daddr" value="' + locations[i][1] + ', ' + locations[i][2] + ', ' + locations[i][3] + ' ' + locations[i][4] + '" />' +
//                         '<label for="saddr">Need directions to our place?</label>' +
//                         '<div class="input-group">' +
//                         '<input name="saddr" type="text" class="form-control input-sm" placeholder="Your Address...">' +
//                         '<span class="input-group-btn">' +
//                         '<button class="btn btn-default input-sm" type="submit">Go!</button>' +
//                         '</span>' +
//                         '</div><!-- /input-group -->' +
//                         '</form>';
//                     // Create the marker for the location
//                     // We use 'html' key to attach the
//                     // InfoWindow content to the marker.
//                     var marker = new google.maps.Marker({
//                         icon: locations[i][5],
//                         position: results[0].geometry.location,
//                         map: map,
//                         html: windowContent
//                     });
//                     // Set event to display the InfoWindow anchored
//                     // to the marker when the marker is clicked.
//                     google.maps.event.addListener( marker, 'click', function() {
//                         // Updates the InfoWindow content with
//                         // the HTML held in the marker ('this').
//                         infoWindow.setContent(this.html);
//                         infoWindow.open(map, this);
//                     });
//                     // Add this marker to the map bounds
//                     extendBounds(results[0].geometry.location);
//                 } else {
//                     window.log('Location geocoding has failed: ' + google.maps.GeocoderStatus);
//                 }
//             } // END geocodeCallBack()
//             return geocodeCallBack;
//         } // END onGeocodeComplete()
//         // Establishes the bounds for all the markers
//         // then centers and zooms the map to show all.
//         function extendBounds(latlng) {
//             ++locationCount;
//             bounds.extend(latlng);
//             if (locationCount == locations.length) {
//                 map.fitBounds(bounds);
//             }
//         } // END extendBounds()
//         init();

