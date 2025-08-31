module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // для TS
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // щоб ESLint розумів JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // автоматично визначає версію React
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // інтеграція Prettier
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    // приклад кастомних правил
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // для React 17+
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off', // бо ми використовуємо TS
  },
};
