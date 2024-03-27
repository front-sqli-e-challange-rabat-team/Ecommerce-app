const reactConfig = require('@repo/eslint-config/react');

module.exports = {
  ...reactConfig,
  ignorePatterns: ['dist', '.eslintrc.cjs'],
};
