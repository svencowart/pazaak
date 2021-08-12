module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    BoxShape: true,
    engine: true,
    Entity: true,
    GLTFShape: true,
    Transform: true,
    Vector3: true,
  },
  extends: ['xo', 'xo-space', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {},
};
