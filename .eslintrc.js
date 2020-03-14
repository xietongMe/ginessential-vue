module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:vue/recommended'
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'max-len': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
};
