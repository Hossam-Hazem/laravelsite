var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.version(['public/css/home.css','public/js/home.js','public/js/cmdwriter.js','public/js/starsSystem.js','public/js/scrollingDiv.js','public/js/slider.js','public/css/slider.css'])
});
