import { extends as base } from '../';

const extensions = base
  .concat(require.resolve('../envs/ava'));

export { extensions as extends };
