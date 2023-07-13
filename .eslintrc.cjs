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
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
