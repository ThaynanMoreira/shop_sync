module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: false,
    commonjs: true,
    jest: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".ts"]
      }
    }
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended"
  ],
  plugins: ["@typescript-eslint", "jest", "sonarjs"],
  rules: {
    "consistent-return": "off",
    "no-empty-pattern": "off",
    "no-promise-executor-return": "off",
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/no-identical-expressions": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "no-useless-constructor": 0,
    "no-empty-function": 0,
    "no-underscore-dangle": 0,
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "multiline-ternary": 0,
    "no-template-curly-in-string": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "import/no-unresolved": "error",
    "import/export": 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "no-redeclare": 0,
    "lines-between-class-members": 0,
    "max-classes-per-file": 0,
    "class-methods-use-this": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never"
      }
    ]
  }
};
