const { getLoader, loaderNameMatches } = require("react-app-rewired");

module.exports = config => {
  const sassExtension = /(\.scss|\.sass)$/;

  const fileLoader = getLoader(config.module.rules, rule =>
    loaderNameMatches(rule, "file-loader")
  );

  fileLoader.exclude.push(sassExtension);

  const cssRules = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.css$/)
  );

  let sassRules;

  if (cssRules.use) {
    sassRules = {
      test: sassExtension,
      use: [...cssRules.use, { loader: "sass-loader", options: {} }]
    };
  } else {
    sassRules = {
      test: sassExtension,
      use: [...cssRules.loader, { loader: "sass-loader", options: {} }]
    };
  }

  const oneOfRule = config.module.rules.find(rule => rule.oneOf !== undefined);

  if (oneOfRule) {
    oneOfRule.oneOf.unshift(sassRules);
  } else {
    // Fallback to previous behaviour of adding to the end of the rules list
    config.module.rules.push(sassRules);
  }

  return config;
};
