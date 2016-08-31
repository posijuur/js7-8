;(function () {
	var hiddenElement = null;
	$('.foms_input').hover(function() {
		var targetParent = null;	
		targetParent = $(this).parent();
		hiddenElement = $('+ div', targetParent).show();
	}, function() {
		$(hiddenElement).hide();
	});
	$('button').on('click', function(event) {
		event.preventDefault();
		var target = event.target;
		$('.hiddenHelp').show();
	});;
	$('label').on('click', function(event) {
		event.preventDefault();
		var target = event.target;
		$('label + div').hide();
		$('+ div', target).show();
	});
})();