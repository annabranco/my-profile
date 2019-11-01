const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config = rewireStyledComponents(config, env);
  return config;
};
