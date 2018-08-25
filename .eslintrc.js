module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["import", "flowtype", "jsx-a11y", "react", "redux-saga"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "jsx-a11y/label-has-for": "off",
    "react/no-typos": "off",
    "react/prefer-stateless-function": "off"
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: {
    window: true,
    document: true,
    alert: true,
    fail: true
  },
  overrides: [
    {
      files: ["*registerServiceWorker.js"],
      rules: {
        "no-console": "off",
        "no-param-reassign": "off",
        "no-use-before-define": "off"
      }
    },
    {
      files: ["**/*.{js,jsx}"],
      rules: {
        "redux-saga/yield-effects": "error",
        "redux-saga/no-yield-in-race": "error",
        "redux-saga/no-unhandled-errors": "error"
      }
    }
  ]
};
