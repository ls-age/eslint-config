const rules = [
  './rules/best-practices',
  './rules/errors',
  './rules/node',
  './rules/style',
  './rules/variables',
  './rules/imports',
  './rules/es6',

  // Special Environments
  './envs/mocha',
].map(require.resolve);

export {
  rules as extends,
};
