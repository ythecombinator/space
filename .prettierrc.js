module.exports = {
  "printWidth": 120,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always",
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^config/(.*)$",
    "^services/(.*)$",
    "^schema/(.*)$",
    "^utils/(.*)$",
    "^content/(.*)$",
    "^components/shared/(.*)$",
    "^components/layouts/(.*)$",
    "^components/pages/(.*)$",
    "^styles/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}