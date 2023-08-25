/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    "@vue/airbnb",
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "plugins": ["simple-import-sort"],
    "rules": {
        "@typescript-eslint/consistent-type-imports": "error",
        "import/prefer-default-export": "off",
        "vuejs-accessibility/anchor-has-content": "off",
        "vuejs-accessibility/click-events-have-key-events": "off",
        "no-spaced-func": "off",
        "func-call-spacing": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "prefer-destructuring": "off",
        "consistent-return": "off",
        "no-console": "off",
        "simple-import-sort/exports": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",
        "function-paren-newline": "off",
        "camelcase": "off",
        "simple-import-sort/imports": [
            "error",
            {
                "groups": [
                    // Node.js builtins. You could also generate this regex if you use a `.js` config.
                    // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                    [
                        "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)"
                    ],
                    // Packages. `react` related packages come first.
                    ["^vue", "^@?\\w"],
                    // Internal packages.
                    ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
                    // Side effect imports.
                    ["^\\u0000"],
                    // Parent imports. Put `..` last.
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    // Style imports.
                    ["^.+\\.s?css$"]
                ]
            }
        ]
    }
}
