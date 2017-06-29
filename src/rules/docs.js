export const env = {
  es6: true,
};

export const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
};

export const plugins = [
  'jsdoc',
];

export const settings = {
  jsdoc: {
    tagNamePreference: {
      returns: 'return',
      fires: 'emits',
    },
  },
};

export const rules = {
  'jsdoc/check-param-names': 'error',
  'jsdoc/check-tag-names': 'warn',
  'jsdoc/check-types': 'error',
  'jsdoc/require-description-complete-sentence': 'error',
  'jsdoc/require-param': 'error',
  'jsdoc/require-param-description': 'error',
  'jsdoc/require-param-type': 'error',
  'jsdoc/require-returns-description': 'error',
  'jsdoc/require-returns-type': 'error',
};
