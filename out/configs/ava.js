'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extends = undefined;

var _ = require('../');

var extensions = _.extends.concat(require.resolve('../envs/ava'));

exports.extends = extensions;