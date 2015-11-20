jQuery(function(){
	initLightbox();

	var ps = document.querySelectorAll('p');

	Array.prototype.slice.call(ps).forEach(function(element, index) {
		addElement(element, index);
	});

	function addElement(target, text) {
		var newElem = document.createElement("span");
		var newContent = document.createTextNode(text + '');
		var curTarget = newElem.appendChild(newContent);
  
		target.appendChild(newElem); 
	}

	function initLightbox() {
		var lightbox 		= jQuery('.lightbox-holder, .lightbox-overlay'),
			contentHolder	= jQuery('#wrapper'),
			body 	 		= jQuery('body'),
			scrollTop;

		jQuery('p').on('click', function() {
			scrollTop = jQuery(window).scrollTop();
			contentHolder.css({
				position: 'fixed',
				width: 100 + '%',
				top: -scrollTop + 'px'
			});
			lightbox.show();
			jQuery(window).scrollTop(0);
		});

		jQuery('.close').add(lightbox).on('click', function() {
			event.preventDefault();
			contentHolder.removeAttr('style');
			lightbox.hide();
			jQuery(window).scrollTop(scrollTop);
		});
	}
})