//
// BSD Tools Widgets
//

//Include CSS to style widgets on the page
$('head').append('<link rel="stylesheet" href="/stylesheets/widgets.css" type="text/css" />'); 

$(document).ready(function(){

	var scriptEls = document.getElementsByTagName( 'script' );
	var thisScriptEl = scriptEls[scriptEls.length - 1];
	var scriptPath = thisScriptEl.src;
	var scriptFolder = scriptPath.substr(0, scriptPath.lastIndexOf( '/' )+1 );

	var params = new Array();
	var self = scriptPath;
	var querystring = self.split("?");
	if (querystring.length > 1) {
	    var pairs = querystring[1].split("&");
	    for (i in pairs) {
	        var keyval = pairs[i].split("=");
	        params[keyval[0]] = keyval[1];
	    }
	}

	$('.bsd-widget').each(function(){

		var widget = $(this),
			widgetType = widget.data('type'),
			widgetAction = widget.attr('href'),
			widgetTitle = widget.text(),
			widgetBg = params['bg'],
			widgetColor = params['color'];

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
			widgetMarkup.prepend('<div class="widget-form-above"><p class="widget-title">' + widgetTitle + '</p></div>');
			//widgetMarkup.find('.widget-form-above').append('<p class="widget-description">We want to stamp out late, lost and damaged deliveries. We’re calling on retailers to keep you better informed about your delivery. We need your support to ensure your deliveries are first class, first time.</p>');
			for(var i=0; i < fields.length; i++){
				widgetMarkup.find('.widget-form')
							.append('<input type="' + fields[i].type + '" name="' + fields[i].name + '" placeholder="' + fields[i].label + '" required="' + fields[i].required + '" />');
			}
			widgetMarkup.find('.widget-form')
						.append('<input type="submit" value="Submit" />')
						//.after('<p class="widget-form-below"><strong>Disclaimer</strong>: By completing this form, I agree to receive email updates about this and related issues per the terms of the Which? privacy policy.</p>')
			widgetMarkup.css('background',widgetBg).find('.widget-title').css('color',widgetColor);
			widgetMarkup.find('.widget-form input[type="submit"]').css('background',widgetColor).css('color',widgetBg);
			widget.replaceWith(widgetMarkup);

		}

		if(widgetType === 'advocacy'){

			//Create form markup
			widget.replaceWith('<div class="widget-wrapper"><div class="widget-form-above"><p class="widget-title">' + widgetTitle + '</p></div><form action="" method="get" id="speakout" class="widget-form"><input type="text" name="zip" id="zip" placeholder="Postal Code"><input type="hidden" name="js" id="js" value="false"><input type="submit" value="Go"></form></div>');

			$('#speakout').submit(function(e){
				e.preventDefault();
				$(this).closest('.widget-wrapper').prepend("<p class='widget-error'>Oops, looks like something's missing. We just need a bit more here:</p>");
			});
		}

	});

});