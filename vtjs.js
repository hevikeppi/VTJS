$(document).ready(function() {
	// Open object
	$(open_activator).click(function() {
		if(open_method == 'appear') {
			$(open_id).css('display', 'block');
		}else if(open_method == 'fade') {
			$(open_id).fadeIn(open_animdur);
		}
	});
	
	// Close object 
	$(close_activator).click(function() {
		if(close_method == 'disappear') {
			$(close_id).css('display', 'none');
		}else if(close_method == 'fade') {
			$(close_id).fadeIn(close_animdur);
		}
	});
	
	// Open and close
	$(openclose_activator).click(function() {
		if($(openclose_id).css('display') == 'none') {
			$(openclose_id).css('display', 'block');
		}else if($(openclose_id).css('display') == 'block') {
			$(openclose_id).css('display', 'none');
		}
	});
	
	// Scroll to one position
	$(scrollto_activator).click(function() {
		if(scrollto_method == 'animation') {
			$('html, body').animate({
				scrollTop: $(scrollto_target).offset().top
			}, 300);
		}else if(scrollto_method == 'default') {
			$('html, body').animate({
				scrollTop: $(scrollto_target).offset().top
			}, 0);
		}
	});
	
	// Scroll to with multiple elements
	$(scrollto_multiple_activator).click(function() {
		var object_id = scrollto_multiple_target + '.' + this.id;
		$('html, body').animate({
				scrollTop: $(object_id).offset().top
		}, 300);
	});
});