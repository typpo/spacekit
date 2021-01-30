module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'airbnb-base',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
