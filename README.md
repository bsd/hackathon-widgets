# hackathon-widgets

## Setup

Middleman is built on Ruby and uses the RubyGems package manager for installation. These are usually pre-installed on Mac OS X and Linux. Windows users can install both using [RubyInstaller].

```
gem install middleman
```

## Getting Started

Once Middleman is installed, you will have access to the `middleman` command. Start the preview server:

```
middleman server
```

The preview server allows you to build your site, by modifying the contents of the `source` directory, and see your changes reflected in the browser at: `http://localhost:4567/`

To get started, simply develop as you normally would by building HTML, CSS, and Javascript in the `source` directory. When you're ready to use more complex templates, simply add the templating engine's extension to the file and start writing in that format.

For example, say I am working on a stylesheet at `source/stylesheets/site.css` and I'd like to start using Compass and Sass. I would rename the file to `source/stylesheets/site.css.scss` and Middleman will automatically begin processing that file as Sass. The same would apply to CoffeeScript (`.js.coffee`), Haml (`.html.haml`) and any other templating engine you might want to use.

Finally, you will want to build your project into a stand-alone site. From the project directory:

```
middleman build
```

This will compile your templates and output a stand-alone site which can be easily hosted or delivered to your client. The build step can also compress images, employ Javascript & CSS dependency management, minify Javascript & CSS and run additional code of your choice. Take a look at the `config.rb` file to see some of the most common extensions which can be activated.

## Basic requirements

1. Styled to match organization's site
2. Embedded (not using an iframe) into any site or CMS

## Varieties

### Simple Form

Can be used for signup, petition, etc.

1. Processing via signup API
3. Localized language support
4. Display signup count
5. Custom ordering of form fields

### Advocacy (Speakout)

### Simple Form + Advocacy

1. Submit form information via signup API
2. Redirect to second step of advocacy campaign
3. Prefill email and zip on advocacy campaign form