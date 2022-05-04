module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': [0],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/no-empty-interface': 'off',
    'comma-dangle': 0,
    semi: 0,
    'object-curly-newline': 0,
    'no-prototype-builtins': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'use-isnan': 'off',
    'no-restricted-globals': ['off', 'isNaN'],
    'implicit-arrow-linebreak': [0, 'below'],
    quotes: [2, 'single', 'avoid-escape'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        arrowParens: 'always',
        trailingComma: 'all',
        useTabs: false,
        tabWidth: 2,
        semi: true,
        printWidth: 100,
      },
    ],
  },
  globals: {
    __base: true,
    global: true,
    isNaN: true,
  },
};