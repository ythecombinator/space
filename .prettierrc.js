module.exports = {
  printWidth: 120,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^config/(.*)$',
    '^services/(.*)$',
    '^schema/(.*)$',
    '^utils/(.*)$',
    '^content/(.*)$',
    '^components/shared/(.*)$',
    '^components/layouts/(.*)$',
    '^components/pages/(.*)$',
    '^styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: '**/*.{md,mdx}',
      options: {
        printWidth: 80,
      },
    },
  ],
};
