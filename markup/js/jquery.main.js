jQuery(function(){
	$('html > *').contents().filter(function () { 
		if (this.nodeType === 3 && String(this.nodeValue).indexOf('Register')) {
				$(this).remove();
			}
	});
})