//
// Advocacy
//

//Include CSS to style widgets on the page
$('head').append('<link rel="stylesheet" href="/stylesheets/widgets.css" type="text/css" />');

//TODO: Include style options

//Create markup for first step of form
var widgetDest = $('.bsd-widget-speakout'),
	widgetAction = widgetDest.attr('href');

widgetDest.replaceWith('<form action="" method="get" id="speakout" class="widget-form"><input type="text" name="zip" id="zip"><input type="hidden" name="js" id="js" value="false"><input type="submit" value="Participate"></form>');

//TODO: onsubmit="return validate_participate(this)"

//TODO: Add above form content
