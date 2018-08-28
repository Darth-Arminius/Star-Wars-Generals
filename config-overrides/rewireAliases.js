const { lensPath, over, assoc } = require("ramda");
const path = require("path");

module.exports = {
  rewireWebpackAliases: over(
    lensPath(["resolve", "alias"]),
    assoc("@", path.resolve(__dirname, "../src"))
  ),
  rewireJestAliases: assoc("moduleNameMapper", {
    "^@/(.*)$": "<rootDir>/src/$1"
  })
};
