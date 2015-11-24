jQuery(function(){

	initLightbox();

	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
		ps = document.querySelectorAll('p');

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
		var lightboxHolder 	= jQuery('.lightbox-holder'),
			overlay			= jQuery('.lightbox-overlay'),
			lightbox 		= jQuery('.lightbox-wrapper'),
			contentHolder	= jQuery('#wrapper'),
			body 	 		= jQuery('body'),
			fixedClass		= 'lightbox-holder-fixed',
			scrollTopPos;

		contentHolder.on('click', function() {
			scrollTopPos = jQuery(window).scrollTop();

			if (!iOS){
				lightboxHolder.addClass(fixedClass);

				jQuery(this).css({
					position: 'fixed',
					width: 100 + '%',
					top: -scrollTopPos + 'px'
				});
				jQuery(window).scrollTop(0);
			}
			else{
				lightboxHolder.removeClass(fixedClass);
				lightbox.css('top', scrollTopPos + 'px');
			}
			
			overlay.show();
			lightboxHolder.show();
			
		});

		jQuery('.close').on('click', function() {
			event.preventDefault();

			if (!iOS){
				contentHolder.css({
					position: 'relative',
					top: 0 + 'px'
				});
				jQuery(window).scrollTop(scrollTopPos);
			}
			else{
				
			}
			
			overlay.hide();
			lightboxHolder.hide();
			
		});
	}
})