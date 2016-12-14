'use strict';

var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

elixir(function(mix) {
  mix.sass('app.scss', 'public/css', 'src/sass');
  mix.webpack('app.js', 'public/js', 'src/js');
});
