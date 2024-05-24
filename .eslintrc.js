module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:storybook/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'promise', 'react-refresh', 'simple-import-sort'],
  rules: {
    'import/no-unresolved': 0,
    'react/button-has-type': 0,
    'react/display-name': 0,
    'consistent-return': 1,
    'jsx-a11y/label-has-associated-control': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-misused-promises': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-floating-promises': 0,
    'import/export': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: './**',
            group: 'index',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
