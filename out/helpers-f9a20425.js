'use strict';

function mergeObjects(a, b) {
  return Object.assign(a || {}, b || {});
}
function mergeConfigs(configs) {
  return configs.reduce((merged, current) => ({
    env: mergeObjects(merged.env, current.env),
    parserOptions: mergeObjects(merged.parserOptions, current.parserOptions),
    plugins: (merged.plugins || []).concat(current.plugins || []),
    settings: mergeObjects(merged.settings, current.settings),
    rules: mergeObjects(merged.rules, current.rules)
  }), {});
}

exports.mergeConfigs = mergeConfigs;
