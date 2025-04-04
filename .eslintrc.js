module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error", // Isso acusa quando você escreve `.vlaue` por exemplo
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/multi-word-component-names": "off",
  },
};
