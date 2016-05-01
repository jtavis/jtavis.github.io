$(document).ready(function () {
	$('.grid').masonry({
		//options
		itemSelector: '.grid-item',
		columnWidth: 200
	});
	$('.grid').on( 'click', '.grid-item', function() {
	  // remove clicked element
	  $('.grid').masonry( 'remove', this )
	    // layout remaining item elements
	    .masonry('layout');
	});

})
