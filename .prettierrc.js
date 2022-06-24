'use strict'

module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 120,
  endOfLine: 'lf',
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: ['package.json', 'yarn.lock', '*.md'],
      options: {
        printWidth: 80,
        singleQuote: false
      }
    }
  ]
}
