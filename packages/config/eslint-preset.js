module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['next', 'plugin:prettier/recommended'],
  settings: {
    next: {
      rootDir: [
        'apps/docs/',
        'apps/web/',
        'packages/ui/',
        'packages/config/',
        'packages/tsconfig/',
      ],
    },
  },
}
