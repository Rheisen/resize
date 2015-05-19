(function($) {
	
	/* setHeight Function */
    	$.fn.setHeight = function(element, height) {
		$windowHeight = $(window).height();
		$( window ).resize(function() {
			$windowHeight = $(window).height();
		});
		$elementHeight = $windowHeight * (height);
		
		if(element == 'min-height') {
			return $(this).css('min-height', $elementHeight);
		} else if(element == 'height') {
			return $(this).css('height', $elementHeight);
		} else if(element == 'padding-top') {
			return $(this).css('padding-top', $elementHeight);	
		} else if(element == 'padding-bottom') {
			return $(this).css('padding-bottom', $elementHeight);	
		} else if(element == 'margin-top') {
			return $(this).css('margin-top', $elementHeight);	
		} else if(element == 'margin-bottom') {
			return $(this).css('margin-bottom', $elementHeight);
		} else {
			//empty else
		}
    	}
	
	/* setHeightRelative Function */
	$.fn.setHeightRelative = function(relative, element, height) {
		$relativeHeight = $(element).height;
	
		$( window ).resize(function() {
			$windowHeight = $(window).height();
		});
		$elementHeight = $relativeHeight * (height);
		
		if(element == 'min-height') {
			return $(this).css('min-height', $elementHeight);
		} else if(element == 'height') {
			return $(this).css('height', $elementHeight);
		} else if(element == 'padding-top') {
			return $(this).css('padding-top', $elementHeight);	
		} else if(element == 'padding-bottom') {
			return $(this).css('padding-bottom', $elementHeight);	
		} else if(element == 'margin-top') {
			return $(this).css('margin-top', $elementHeight);	
		} else if(element == 'margin-bottom') {
			return $(this).css('margin-bottom', $elementHeight);
		} else {
			//empty else
		}
    	}
	
	/* setFontSize Function */
	/* use flowtype.js */

}(jQuery));
