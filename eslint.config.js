const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

// Initialize with the necessary configurations
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  eslintrc: true,
});

module.exports = [
  // ✅ Ignore non-app code / generated outputs
  {
    ignores: [
      "loadtest/**",   // k6 scripts use __ENV globals
      "coverage/**",   // jest coverage output (optional but safe)
      "node_modules/**"
    ],
  },

  js.configs.recommended,

  ...compat.config({
    env: {
      es2021: true,
      node: true,
      jest: true,
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      eqeqeq: ["error", "always"],
    },
  }),
];
