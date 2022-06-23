'use strict'

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['bug', 'build', 'chore', 'ci', 'config', 'docs', 'feat', 'fix', 'perf', 'refactor', 'sec', 'test']
    ]
  }
}
