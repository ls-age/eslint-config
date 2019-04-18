import * as bestPractices from './rules/best-practices';
import * as docs from './rules/docs';
import * as errors from './rules/errors';
import * as node from './rules/node';
import * as style from './rules/style';
import * as variables from './rules/variables';
import * as imports from './rules/imports';
import * as es6 from './rules/es6';
import * as browser from './envs/browser';
import * as mocha from './envs/mocha';
import { mergeConfigs } from './helpers';

export default mergeConfigs([
  bestPractices,
  docs,
  errors,
  node,
  style,
  variables,
  imports,
  es6,

  // Special environments
  browser,
  mocha,
]);
