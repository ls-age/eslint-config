import base from '../index.js';
import { mergeConfigs } from '../helpers.js';

export default mergeConfigs([base, {
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'html',
  ],
}]);
