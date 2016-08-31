;(function () {
	var hiddenElement = null;
	$('.foms_input').focus(function(event) {
		event.preventDefault();
		event.stopPropagation();
		var targetParent = null;	
		targetParent = $(this).parent();
		$('label + div').hide();
		$('+ div', targetParent).show();
	});
	$('button').focus(function(event) {
		$('label + div').hide();
	});;
	$('.foms_input').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
	});
	$('.foms_input').hover(function() {
		var targetParent = null;	
		targetParent = $(this).parent();
		hiddenElement = $('+ div', targetParent).show();
	}, function() {
		$(hiddenElement).hide();
	});
	$('button').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		var target = event.target;
		$('.hiddenHelp').show();
	});;
	$('label').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		var target = event.target;
		$('label + div').hide();
		$('+ div', target).show();
	});
	$('input').mouseenter(function(event) {
		event.preventDefault();
		event.stopPropagation();
		var target = event.target;
		var targetParent = null;	
		targetParent = $(this).parent();
		$('+ div', targetParent).show();
	});
})();