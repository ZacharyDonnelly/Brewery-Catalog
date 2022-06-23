'use strict'

const prettierConfig = require('./.prettierrc.js')

module.exports = {
  root: true,
  extends: ['prettier', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y', 'prettier', 'react', 'import', 'react-hooks'],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  rules: {
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-onchange': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-uses-react': 1,
    'react/require-default-props': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prefer-const': 'error'
  },
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.lintstagedrc.js',
        './.stylelint.config.js',
        './commitlint.config.js'
      ],
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
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': ['.js', '.jsx']
  }
}
