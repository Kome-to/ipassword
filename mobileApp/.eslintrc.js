module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      alias: [
        ['@scenes', './src/scenes'],
        ['@components', './src/components'],
        ['@containers', './src/containers'],
        ['@services', './src/services'],
        ['@common', './src/common'],
        ['@pages', './src/pages'],
      ],
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Us  es the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    curly: 'error', // enforce consistent brace style for all control statements
    'default-case': 'error', // require `default` cases in `switch` statements
    'dot-notation': 'error', // enforce dot notation whenever possible
    eqeqeq: ['error', 'smart'], // require the use of `===` and `!==`
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
      {usePrettierrc: true},
    ],
  },
};
