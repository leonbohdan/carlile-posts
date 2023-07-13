/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    // 0 - "off"
    // 1 - "warn"
    // 2 - "error"
    'quotes': [2, 'single'],
    'object-curly-spacing': [2, 'always'],
    'semi': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'MemberExpression': 1,
      'flatTernaryExpressions': false,
    }],
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
