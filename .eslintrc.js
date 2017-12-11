module.exports = {
  parser: 'babel-eslint',
  'plugins': [
    'flowtype'
  ],
  extends: [
    'standard',
    'standard-jsx',
    'plugin:flowtype/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'jsx-quotes': ['error', 'prefer-double']
  }
}
