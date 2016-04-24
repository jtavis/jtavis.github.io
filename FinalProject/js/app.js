$(document).ready(initMap);


function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 10
	});
};

// 	var geocoder;
//   	var map;
//   	function initialize() {
// 	    geocoder = new google.maps.Geocoder();
// 	    var latlng = new google.maps.LatLng(-34.397, 150.644);
// 	    var mapOptions = {
// 	    zoom: 8,
// 	    center: latlng
//     }
//     map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   }

function codeAddress() {
	var address = document.getElementById("address").value;
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

$('#searchButton').click(function () {
	$('#enterSrch').slideToggle();
	$('#posts').slideToggle();
	$('#sidebar').slideToggle();
})



