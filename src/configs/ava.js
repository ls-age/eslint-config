import base from '../index.js';
import * as ava from '../envs/ava';
import { mergeConfigs } from '../helpers.js';

export default mergeConfigs([base, ava]);
