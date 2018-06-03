module.exports = {
  extends: ['yoctol', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['prettier'],
  "globals": {
    "graphql": true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
    'react/no-multi-comp': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'array-callback-return': 'off',
  },
}
