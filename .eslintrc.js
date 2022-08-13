module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/extensions': ['off'],
    'import/prefer-default-export': ['off'],
    'no-restricted-exports': ['off'],
    'no-console': ['warn'],
    'arrow-body-style': ['off'],
    'react/function-component-definition': ['off'],
    'react/prop-types': ['off '],
  },
};
