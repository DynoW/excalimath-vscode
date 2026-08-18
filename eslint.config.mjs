import tsPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  { ignores: ["dist", "node_modules", "webview/dist", "webview/node_modules"] },
  ...tsPlugin.configs["flat/recommended"],
  {
    files: ["src/**/*.ts"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      curly: "warn",
      "dot-notation": "warn",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-else-return": "warn",
      "no-lonely-if": "warn",
      "no-restricted-globals": "off",
      "no-unneeded-ternary": "warn",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "no-useless-return": "warn",
      "no-var": "warn",
      "object-shorthand": "warn",
      "one-var": ["warn", "never"],
      "prefer-arrow-callback": "warn",
      "prefer-const": ["warn", { destructuring: "all" }],
      "prefer-template": "warn",
      "prettier/prettier": "warn",
    },
  },
  {
    name: eslintConfigPrettier.name,
    rules: eslintConfigPrettier.rules,
  },
];
