;(function () {
	$('.nav-tabs').on('click', function(event) {
		event.preventDefault();
		var target = event.target;	
		var findItem = null;	
		var findP = null;
		var findParentTarget = null;	
		var findDataTab = null;	
		var findDataP = null;
		if (!$(target).hasClass('tabs_link')) return;
		$('.lead').hide();
		// $('.tabs_item').forEach( function(element, index) {
		// 	findItem = document.querySelectorAll('.js-goods_item')[i];
		// 	$(findItem).removeClass('active');
		// });
		for (var i = 0; i < $('.tabs_item').length; i++) {
			findItem = document.querySelectorAll('.tabs_item')[i];
			$(findItem).removeClass('active');
		}
		outer: for (var i = 0; i < $('.tabs_item').length; i++) {
			findItem = document.querySelectorAll('.tabs_item')[i];
			$(findItem).removeClass('active');
			findDataTab = $(target).attr('data-action');
			for (var i = 0; i < $('.lead').length; i++) {
				findP = document.querySelectorAll('.lead')[i];
				findDataP = $(findP).attr('data-action');
				if (findDataTab == findDataP) {
					$(findP).show();
					break outer;
				}
			}
			
		}

		$(target).parent().addClass('active');

	});
})();

