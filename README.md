# eslint-config-lsage

> This package provides ls-age's ESLint configuration.

Heavily inspired by [Airbnb's ESLint config](https://github.com/airbnb/javascript).

## Main differences to `eslint-config-airbnb`:

### `ava` sub-config

> A special config for linting [AVA](https://github.com/avajs/ava) test files.

**Usage via .eslintrc**

```json
{
  "extends": "lsage/ava"
}
```

### The *mocha* environment:

> This config contains an advanced mocha environment.
> **The following code is assumed to be in a mocha ESLint environment.**

**Non-arrow-callbacks are allowed**

```javascript
describe('This is valid', function() { ... })
```

**Importing devDependencies is allowed**

In other environments importing devDependencies is not allowed.

**Anonymous functions don't need a space before parenthesis:**

```javascript
// This is valid
doAync(function() { ... })

// while this is not
doAync(function () { ... })
```

### Dangling underscores in identifiers are allowed

This allows documentation generators to assume members are private.

### API docs are linted

API docs are linted using [eslint-plugin-jsdoc](https://github.com/LukasHechenberger/eslint-plugin-jsdoc).
