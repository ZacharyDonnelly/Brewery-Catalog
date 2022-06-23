'use strict'

const prettierConfig = require('./.prettierrc.js')

module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'react-app', 'prettier', 'plugin:prettier/recommended'],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-uses-react': 1,
    'react/react-in-jsx-scope': 1
  },
  overrides: [
    // node files
    {
      files: ['./.eslintrc.js', './.prettierrc.js'],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      }
    }
  ]
}
