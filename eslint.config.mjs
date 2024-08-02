import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { 
      globals: globals.browser,
      parser: tsParser,
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
      ]
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: { 
      "no-console": "warn",
      "no-unused-vars": "warn",
      "quotes": ["error", "double"],
    },
  },
];