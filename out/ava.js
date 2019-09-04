'use strict';

var index = require('./index.js');
var helpers = require('./helpers-f9a20425.js');

const env = {
  es6: true
};
const parserOptions = {
  ecmaVersion: 2017,
  sourceType: 'module'
};
const plugins = ['ava'];
const rules = {
  'ava/assertion-arguments': 'error',
  'ava/max-asserts': ['off', 5],
  'ava/no-async-fn-without-await': 'error',
  'ava/no-cb-test': 'off',
  'ava/no-duplicate-modifiers': 'error',
  'ava/no-identical-title': 'error',
  'ava/no-ignored-test-files': 'error',
  'ava/no-invalid-end': 'error',
  'ava/no-nested-tests': 'error',
  'ava/no-only-test': 'error',
  'ava/no-skip-assert': 'error',
  'ava/no-skip-test': 'error',
  'ava/no-statement-after-end': 'error',
  'ava/no-todo-implementation': 'error',
  'ava/no-todo-test': 'warn',
  'ava/no-unknown-modifiers': 'error',
  'ava/prefer-async-await': 'error',
  'ava/prefer-power-assert': 'off',
  'ava/test-ended': 'error',
  'ava/test-title': ['error', 'if-multiple'],
  'ava/use-t-well': 'error',
  'ava/use-t': 'error',
  'ava/use-test': 'error',
  'ava/use-true-false': 'error'
};

var ava = /*#__PURE__*/Object.freeze({
  env: env,
  parserOptions: parserOptions,
  plugins: plugins,
  rules: rules
});

var ava$1 = helpers.mergeConfigs([index, ava]);

module.exports = ava$1;
