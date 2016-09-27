$(function () {
	var $orders = $('#orders');
	$.ajax({
		type: 'GET',
		url: '/todos',
		success: function(orders) {
			$.each(orders, function(i, order) {
				$orders.append('<li>id: '+order.id 
					           + ', description: ' + order.description 
					           + ', completed: ' + order.completed 
					           + '</li>');
			});
		}
	});
});
