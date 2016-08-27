export const env = {
  mocha: true,
};

export const globals = {
  expect: false,
};

export const rules = {
  // Allow devDependencies
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: true,
  }],

  // Allow non-arrow callbacks
  'prefer-arrow-callback': 'off',

  // Allow anonymous callbacks
  'func-names': 'off',
};
