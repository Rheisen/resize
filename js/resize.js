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
	
	/* setWidth Function */
	$.fn.setWidth = function(element, width) {
	
	$windowWidth = $(window).width();
	
	$( window ).resize(function() {
		$windowWidth = $(window).width();
	});
	$elementWidth = $windowWidth * (width);
	
	if(element == 'width') {
		return $(this).css('width', $elementWidth);
	} else if(element == 'min-width') {
		return $(this).css('min-width', $elementWidth);
	} else if(element == 'max-width') {
		return $(this).css('max-width', $elementWidth);
	} else if(element == 'padding-left') {
		return $(this).css('padding-left', $elementWidth);
	} else if(element == 'padding-right') {
		return $(this).css('padding-right', $elementWidth);
	} else if(element == 'margin-left') {
		return $(this).css('margin-left', $elementWidth);
	} else if(element == 'margin-right') {
		return $(this).css('margin-right', $elementWidth);
	} else {
		//empty else
	}
	
	}
	
	/* setWidthRelative Function */
	$.fn.setWidthRelative = function(relative, element, width) {
	
	$relativeWidth = $(relative).width();
	$elementWidth = $relativeWidth * width;
	
	if(element == 'width') {
		return $(this).css('width', $elementWidth);
	} else if(element == 'min-width') {
		return $(this).css('min-width', $elementWidth);
	} else if(element == 'max-width') {
		return $(this).css('max-width', $elementWidth);
	} else if(element == 'padding-left') {
		return $(this).css('padding-left', $elementWidth);
	} else if(element == 'padding-right') {
		return $(this).css('padding-right', $elementWidth);
	} else if(element == 'margin-left') {
		return $(this).css('margin-left', $elementWidth);
	} else if(element == 'margin-right') {
		return $(this).css('margin-right', $elementWidth);
	} else {
		//empty else
	}
	
	}
	
	/* setFontSize Function */
	$.fn.setFontSize = function(size) {
	
	$windowHeight = $(window).height();
	$( window ).resize(function() {
		$windowHeight = $(window).height();
	});
	
	$elementSize = ((($windowHeight * size)*size)*size);
	
	return $(this).css('font-size', $elementSize);
	
    }

}(jQuery));