$(function() {
	var animateTime = 2000;
	var modal = $('#modaldiv');
	var olddiv = null;

	$('#fade').click(function() {
		$('#div1').fadeToggle(1000);
	});

	$('.somediv').click(function(e) {
		var jthis = $(this);

		if (olddiv) {
			olddiv.css('opacity',1);
		}
		modal.css({	'top':jthis.offset().top,
					'left':jthis.offset().left,
					'width':jthis.width(),
					'height':jthis.height(),
					'background':jthis.css('background'),
					'opacity':1,
					'display': 'block',
				});


//Скрывает видимость выбранного обьекта
		jthis.css('opacity',0);

		n = 0;
		modal
			.animate({'height':400,'width':600}, {
				duration: 1000,
				queue: false, //очередь
				specialEasing: {
					height: 'linear',
					width: 'swing'
				},
				complete: function() {
					console.log("Animation complete!");
				},
				step: function() {

			// Чтоб Анимация не тормозила убрать console.log(n++);
			// Для отслеживания кадров, на котором хочу остановиться, прописываем console.log(n++);

			// на 110 кадре остановка

					if(n == 120) {
						modal.stop();
					}
				}
			})
			.animate({'top':(window.innerHeight - 400)/ 2,
						'left':(window.innerWidth - 600)/ 2}, {
							duration: 1000,
							queue: false, //очередь
							specialEasing: {
								height: 'linear',
								width: 'swing'
							}
					});



/*		modal.css('top', (window.innerHeight - modal.height()) / 2);
		modal.css('left', (window.innerWidth - modal.width()) / 2);
		modal.css('background', $(e.target).css('background'));
		modal.show();*/
		olddiv = jthis;
	});

/*	$('#hide').click(function() {
		$('#modaldiv').fadeToggle(animateTime);
	});
*/	$('#modaldiv').click(function() {
		$(this).hide(animateTime);
	});
});
