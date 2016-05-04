$(document).ready(function() {
 		var map;
     	function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.754126, lng: -73.973570},
          zoom: 12
        });
        var marker = new google.maps.Marker({
			position: {lat: 40.754126, lng: -73.973570},
			map: map,
			title: 'New York, NY'
		});
      };
      initMap();


});


