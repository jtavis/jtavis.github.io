$(document).ready(initMap);


function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.7484444, lng: -73.9878441},
	  zoom: 10
	});
}

