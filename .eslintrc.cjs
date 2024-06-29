module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "perfectionist",
    "styled-components-a11y",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "perfectionist/sort-jsx-props": [
      "error",
      {
        type: "natural",
        order: "asc",
        groups: ["multiline", "unknown", "shorthand"],
      },
    ],
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
};
