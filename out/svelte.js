'use strict';

var index = require('./index.js');
var __chunk_1 = require('./chunk-a7baaa16.js');

var svelte = __chunk_1.mergeConfigs([index, {
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['html']
}]);

module.exports = svelte;
