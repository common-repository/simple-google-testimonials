jQuery(document).ready(function() {
	jQuery(function () {
		jQuery("#rateYo").rateYo({
			rating: 3.6
		});
	});
	
	jQuery(function () {
		jQuery("#rateYo").rateYo()
	    	.on("rateyo.change", function (e, data) {
			var rating = data.rating;
			jQuery(this).next().text(rating).next().val(rating);
			console.log(rating);
	    });
	});
	
	jQuery('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        }
	    },
	    autoplay:true,
	    autoplayTimeout:2500,
	    autoplayHoverPause:true
	})
});