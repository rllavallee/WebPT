$(function () {

	var $desc = $('#desc');
	var $compl = $('#compl');
	var $orders = $('#orders');

	$.ajax({
		type: 'GET',
		url: '/todos',
		success: function(orders) {
			$.each(orders, function(i, order) {
				$orders.append('<li class="list-group-item">id: '+order.id 
					           + ', description: ' + order.description 
					           + ', completed: ' + order.completed 
					           + '</li>');
			});
		}
	});

	$('#add-todo').on('click', function() {
		var todo = {
			"description": $desc.val(),
			"completed": $compl.val(),
		};

		var xhrrll = $.ajax({
			type: 'POST',
			url: '/todos',
			data: todo,
			processData:false,
			//contentType: 'application/json',
  			success: function(order) {
				$orders.append('<li class="list-group-item">id: '+order.id 
					           + ', description: ' + order.description 
					           + ', completed: ' + order.completed 
					           + '</li>');

			},
			error: function() {
				alert('error saving todo');
			}
		});
		console.log(xhrrll);
	});
});
