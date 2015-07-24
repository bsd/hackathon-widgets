$(document).ready(function(){

	$('input').on('keyup', function(){

		var fieldName = $(this).attr('name'),
			fieldVal = $(this).val();

		$('.preview__widget .widget-'+fieldName).text(fieldVal);
		$('.code-snippet .code-'+fieldName).text(fieldVal);

		if($(this).hasClass('style-field')){
			if(fieldName==='bg') {
				$('.preview__widget .widget-wrapper').css('background',fieldVal);
				$('.preview__widget .widget-form input[type="submit"]').css('color',fieldVal);
			} else {
				$('.preview__widget .widget-title').css('color',fieldVal);
				$('.preview__widget .widget-form input[type="submit"]').css('background',fieldVal);
			}
		}

	});

});

//TODO: Replace defaults if a field is empty