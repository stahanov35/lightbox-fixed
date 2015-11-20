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
		var lightbox = jQuery('.lightbox-overlay'),
			body = jQuery('body');

		jQuery('p').on('click', function() {
			lightbox.show();
			lightbox.css({
				position: 'hidden'
			})
		});

		jQuery('.close').on('click', function() {
			event.preventDefault();
			lightbox.hide();
		});
	}

	// $('html > *').contents().filter(function () { 
	// 	if (this.nodeType === 3 && String(this.nodeValue).indexOf('Register')) {
	// 			$(this).remove();
	// 		}
	// });
})