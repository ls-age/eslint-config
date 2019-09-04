'use strict';

var index = require('./index.js');
var helpers = require('./helpers-f9a20425.js');

var svelte = helpers.mergeConfigs([index, {
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['html']
}]);

module.exports = svelte;
