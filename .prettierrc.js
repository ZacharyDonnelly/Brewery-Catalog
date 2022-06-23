'use strict'

module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 120,
  endOfLine: 'lf',
  semi: false,
  trailingComma: 'none',
  overrides: [
    {
      files: ['package.json', 'yarn.lock', '*.md'],
      options: {
        printWidth: 80,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    }
  ]
}
