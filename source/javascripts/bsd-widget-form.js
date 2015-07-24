//
// General (Signup) Form
//

//Include CSS to style widgets on the page
$('head').append('<link rel="stylesheet" href="/stylesheets/widgets.css" type="text/css" />');

//TODO: Incorporate parameters for style options

//TODO: Include JS to post to signup API and handle submit via signup API

// Here's an imaginary list of form fields, as if we had a JSON endpoint
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

// Create form markup based on form fields
var widgetDest = $('.bsd-widget-form'),
	widgetAction = widgetDest.attr('href');

widgetForm = document.createElement('FORM');
widgetForm.method = 'post';
widgetForm.action = widgetAction;
widgetForm.setAttribute('name', 'signup');
widgetForm.setAttribute('class', 'widget-form');
widgetForm.id = 'signup';

for(var i=0; i < fields.length; i++){
	widgetForm.innerHTML = widgetForm.innerHTML + '<input type="' + fields[i].type + '" name="' + fields[i].name + '" placeholder="' + fields[i].label + '" required="' + fields[i].required + '" />';
}
widgetForm.innerHTML = widgetForm.innerHTML + '<input type="submit" value="Count Me In" />';
$('.bsd-widget-form').replaceWith(widgetForm);
