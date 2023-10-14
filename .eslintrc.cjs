/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "tailwindcss",
    "plugin:vitest-globals/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  Plugins: ["tailwindcss", "prettier"],
  // rules: { "vue/require-default-prop": "off" },
  evn: { "vitest-globals/evn": true },
};
