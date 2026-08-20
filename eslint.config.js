import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

export default tseslint.config(
  // Narrowed: the previous `*.config.js` entry silently exempted
  // tailwind.config.js, vite.config.js and eslint.config.js itself.
  { ignores: ["dist/**", "node_modules/**", "postcss.config.cjs"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: ["*.config.js", "*.config.cjs"],
    languageOptions: { globals: { module: "writable", process: "readonly" } },
  }
)
