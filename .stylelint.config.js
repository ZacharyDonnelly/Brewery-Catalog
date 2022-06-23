module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  customSyntax: 'postcss-scss',
  rules: {
    'prettier/prettier': true,
    'color-no-invalid-hex': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'selector-max-universal': 0,
    'max-nesting-depth': 4,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else']
      }
    ],
    //
    // Selectors
    //
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ],
    'function-no-unknown': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'unit-allowed-list': ['rem', 'vh', 'vw', '%', 'px', 's'],
    'no-descending-specificity': true,
    // fixes for Vue single file components:
    'no-empty-source': null,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    'comment-no-empty': true,
    // ===
    // SCSS
    // ===
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '/^[a-z-]+$/',
    'scss/no-global-function-names': null,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true
  }
}
