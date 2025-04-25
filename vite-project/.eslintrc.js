// .eslintrc.js
export default {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest", // Enable modern JavaScript features
    sourceType: "module", // Use ES module syntax
  },
  rules: {
    "no-require-imports": "off",
    "react/react-in-jsx-scope": "off",
  },
};
