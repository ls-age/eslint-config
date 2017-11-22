'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = exports.env = {
  es6: true
};

var parserOptions = exports.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};

var plugins = exports.plugins = ['jsdoc'];

var settings = exports.settings = {
  jsdoc: {
    tagNamePreference: {
      returns: 'return',
      fires: 'emits'
    }
  }
};

var rules = exports.rules = {
  'jsdoc/check-param-names': 'error',
  'jsdoc/check-tag-names': 'warn',
  'jsdoc/check-types': 'error',
  'jsdoc/require-description-complete-sentence': 'error',
  'jsdoc/require-param': 'error',
  'jsdoc/require-param-description': 'error',
  'jsdoc/require-param-type': 'error',
  'jsdoc/require-returns-description': 'error',
  'jsdoc/require-returns-type': 'error'
};