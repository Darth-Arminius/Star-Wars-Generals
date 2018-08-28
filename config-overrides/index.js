const { compose } = require("react-app-rewired");
const rewireEslint = require("./rewireEslint");
const rewireScss = require("./rewireScss");
const rewireHotLoader = require("./rewireHotLoader");
const { rewireWebpackAliases, rewireJestAliases } = require("./rewireAliases");

module.exports = {
  webpack: compose(
    rewireWebpackAliases,
    rewireHotLoader,
    rewireEslint,
    rewireScss
  ),
  jest: compose(rewireJestAliases)
};
