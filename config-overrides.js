const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env); // eslint-disable-line no-param-reassign
  return config;
};
