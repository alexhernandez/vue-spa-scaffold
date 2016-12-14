'use strict';

var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

elixir(function(mix) {
  mix.sass('app.scss', 'dist/css', 'src/sass');
  mix.webpack('app.js', 'dist/js', 'src/js');
});
