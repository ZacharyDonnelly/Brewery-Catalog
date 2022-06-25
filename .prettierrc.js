module.exports = {
  singleQuote: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 120,
  endOfLine: 'lf',
  semi: false,
  tabWidth: 4,
  trailingComma: 'none',
  proseWrap: 'never',
  quoteProps: 'consistent',
  overrides: [
    {
      files: ['package.json','*.md'],
      options: {
        printWidth: 80,
        singleQuote: false,
      },
    },
  ],
  // excludeFiles: ['**/node_modules/**', '**/*.lock', '**/*.packages.*'],
}
