'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = exports.env = {
  browser: true
};

var plugins = exports.plugins = ['compat'];

var globals = exports.globals = {
  asdf: false
};

var settings = exports.settings = {
  browsers: ['> 1%']
};

var rules = exports.rules = {
  'compat/compat': 'error'
};