const authentication = require('./authentication');
const runAction = require('./creates/run_action');

// Automatically attach Bearer token to every request
const addAuth = (request, z, bundle) => {
  request.headers = request.headers || {};
  request.headers.Authorization = `Bearer ${bundle.authData.zyto_token}`;
  return request;
};

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,
  beforeRequest: [addAuth],

  // Only a single Create for now; add more as needed
  creates: {
    [runAction.key]: runAction
  }
};
