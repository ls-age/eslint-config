'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = exports.env = {
  mocha: true
};

var globals = exports.globals = {
  expect: false
};

var rules = exports.rules = {
  // Allow devDependencies
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: true
  }],

  // Allow non-arrow callbacks
  'prefer-arrow-callback': 'off',

  // Allow anonymous callbacks
  'func-names': 'off'
};