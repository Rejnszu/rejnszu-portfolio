module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.run": "onSave",
  "eslint.validate": ["javascript"],
  "eslint.workingDirectories": [
    {
      mode: "auto",
    },
  ],
};
