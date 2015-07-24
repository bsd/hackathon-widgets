//
// BSD Tools Widgets
//

//Include CSS to style widgets on the page
$('head').append('<link rel="stylesheet" href="/stylesheets/widgets.css" type="text/css" />');

//TODO: Incorporate parameters for style options including above/below form content

$(document).ready(function(){

	$('.bsd-widget').each(function(){

		var widget = $(this),
			widgetType = widget.data('type'),
			widgetAction = widget.attr('href');

		if(widgetType === 'form'){

			//Here's an imaginary list of form fields, as if we had a JSON endpoint
			var fields = [ 
			    {   
			        'name': 'email',
			        'label': 'Email',
			        'type': 'text',
			        'required': 'required'
			    },
			    {   
			        'name': 'firstname',
			        'label': 'First Name',
			        'type': 'text',
			        'required': ''
			    },
			    {   
			        'name': 'lastname',
			        'label': 'Last Name',
			        'type': 'text',
			        'required': ''
			    },
			    {   
			        'name': 'zip',
			        'label': 'Postal Code',
			        'type': 'text',
			        'required': 'required'
			    }   
			];

			//TODO: Include JS to post to signup API and handle submit via signup API

			//TODO: Add petition counter

			//Create form markup based on form fields
			var widgetMarkup = $('<div/>', {
				    class: 'widget-wrapper',
				    html: '<form action="' + widgetAction + '" name="signup" id="signup" class="widget-form" method="post"></form>'
				});
			widgetMarkup.prepend('<div class="widget-form-above"><p class="widget-title">Help stamp out dodgy deliveries</p><p>We want to stamp out late, lost and damaged deliveries. We’re calling on retailers to keep you better informed about your delivery. We need your support to ensure your deliveries are first class, first time.</p></div>');
			for(var i=0; i < fields.length; i++){
				widgetMarkup.find('.widget-form')
							.append('<input type="' + fields[i].type + '" name="' + fields[i].name + '" placeholder="' + fields[i].label + '" required="' + fields[i].required + '" />');
			}
			widgetMarkup.find('.widget-form')
						.append('<input type="submit" value="Submit" />')
						.after('<p class="widget-form-below"><strong>Disclaimer</strong>: By completing this form, I agree to receive email updates about this and related issues per the terms of the Which? privacy policy.</p>')
			widget.replaceWith(widgetMarkup);

		}

		if(widgetType === 'advocacy'){

			//Create form markup
			widget.replaceWith('<div class="widget-wrapper"><div class="widget-form-above"><p class="widget-title">Help stamp out dodgy deliveries</p><p>We want to stamp out late, lost and damaged deliveries. We’re calling on retailers to keep you better informed about your delivery. We need your support to ensure your deliveries are first class, first time.</p></div><form action="" method="get" id="speakout" class="widget-form"><input type="text" name="zip" id="zip" placeholder="Postal Code"><input type="hidden" name="js" id="js" value="false"><input type="submit" value="Go"></form></div>');

			$('#speakout').submit(function(e){
				e.preventDefault();
				$(this).closest('.widget-wrapper').prepend("<p class='widget-error'>Oops, looks like something's missing. We just need a bit more here:</p>");
			});
		}

	});

});