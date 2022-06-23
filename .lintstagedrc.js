'use strict'

module.exports = {
  'src/**/*.{jsx,js}': ['yarn lint:prettier', 'yarn lint:eslint'],
  'src/*.{css,scss}': ['yarn lint:stylelint']
}
