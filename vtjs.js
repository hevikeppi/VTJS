$(document).ready(function() {
	// Open object
	if(typeof open_activator != 'undefined') {
		var open_activator_array = open_activator.join(", "); // Make array work as selector in click-function
		$(open_activator_array).click(function() {
			var open_clicked_id = '#' + this.id; // Store clicked objects id in variable
			var clicked_open_activator = $.inArray(open_clicked_id, open_activator); // Get clicked object's position in array
			if(clicked_open_activator == -1) { // Check if object was not found (will return -1 instead of 0 or more)
				open_clicked_id = '.' + this.className; // Store clicked objects class in variable
				clicked_open_activator = $.inArray(open_clicked_id, open_activator); // Now check if object with class instead of id was found in array
				var target_open_id = open_id[clicked_open_activator]; // Store target object class to variable
				
			}else { // ID was found, no need to check if class was found
				var target_open_id = open_id[clicked_open_activator]; // Store target objects id to variable
				var target_open_method = open_method[clicked_open_activator]; // Store target objects opening method to variable
				var target_open_animdur = open_animdur[clicked_open_activator]; // Store target objects animation duration to variable
				if(target_open_method == 'appear') { // Check if opening method is set to appear
					$(target_open_id).css('display', 'block'); // Change objects display to block
				}else if(target_open_method == 'fade') { // Check if opening method is set to fade
					$(target_open_id).fadeIn(target_open_animdur); // Fade object in by chosen duration
				}
			}
		});
	}
	
	// Close object
	if(typeof close_activator != 'undefined') {
		var close_activator_array = close_activator.join(", ");
		$(close_activator_array).click(function() {
			var close_clicked_id = '#' + this.id;
			var clicked_close_activator = $.inArray(close_clicked_id, close_activator);
			if(clicked_close_activator <= -1) {
				close_clicked_id = '.' + thid.id;
				var target_close_id = close_id[clicked_close_activator];
				var target_close_method = close_method[clicked_close_activator];
				var target_close_animdur = close_animdur[clicked_close_activator];
				if(target_close_method == 'disappear') {
					$(target_close_id).css('display', 'none');
				}else if(target_close_method == 'fade') {
					$(target_close_id).fadeOut(target_close_animdur);
				}
			}else {
				var target_close_id = close_id[clicked_close_activator];
				var target_close_method = close_method[clicked_close_activator];
				var target_close_animdur = close_animdur[clicked_close_activator];
				if(target_close_method == 'disappear') {
					$(target_close_id).css('display', 'none');
				}else if(target_close_method == 'fade') {
					$(target_close_id).fadeOut(target_close_animdur);
				}
			}
		});
	}

	// Open and close
	if(typeof openclose_activator != 'undefined') {
		var openclose_activator_array = openclose_activator.join(", ");
		$(openclose_activator_array).click(function() {
			var openclose_clicked_id = '#' + this.id;
			var clicked_openclose_activator = $.inArray(openclose_clicked_id, openclose_activator);
			if(clicked_openclose_activator <= -1) {
				openclose_clicked_id = '.' + this.id;
				var clicked_openclose_activator = $.inArray(openclose_clicked_id, openclose_activator);
				var target_openclose_id = openclose_id[clicked_openclose_activator];
				var target_openclose_method = openclose_method[clicked_openclose_activator];
				var target_openclose_outmethod = openclose_outmethod[clicked_openclose_activator];
				var target_openclose_animdur = openclose_animdur[clicked_openclose_activator];
				if($(target_openclose_id).css('display') == 'none') {
					if(target_openclose_method == 'appear') {
						$(target_openclose_id).css('display', 'block');
					}else if(target_openclose_method == 'fade') {
						$(target_openclose_id).fadeIn(target_openclose_animdur);
					}
				}else if($(target_openclose_id).css('display') == 'block') {
					if(target_openclose_outmethod == 'disappear') {
						$(target_openclose_id).css('display', 'none');
					}else if(target_openclose_method == 'fade') {
						$(target_openclose_id).fadeOut(target_openclose_animdur);
					}
				}
			}else {
				var target_openclose_id = openclose_id[clicked_openclose_activator];
				var target_openclose_method = openclose_method[clicked_openclose_activator];
				var target_openclose_outmethod = openclose_outmethod[clicked_openclose_activator];
				var target_openclose_animdur = openclose_animdur[clicked_openclose_activator];
				if($(target_openclose_id).css('display') == 'none') {
					if(target_openclose_method == 'appear') {
						$(target_openclose_id).css('display', 'block');
					}else if(target_openclose_method == 'fade') {
						$(target_openclose_id).fadeIn(target_openclose_animdur);
					}
				}else if($(target_openclose_id).css('display') == 'block') {
					if(target_openclose_outmethod == 'disappear') {
						$(target_openclose_id).css('display', 'none');
					}else if(target_openclose_method == 'fade') {
						$(target_openclose_id).fadeOut(target_openclose_animdur);
					}
				}
			}
		});
	}
});

