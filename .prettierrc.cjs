/** @type {import("prettier").Config} */

const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: ["prettier-plugin-organize-imports"],
  organizeImportsSkipDestructiveCodeActions: true,
};

module.exports = config;
