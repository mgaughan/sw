// An example configuration file.
exports.config = {
  // directConnect: true,
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  baseUrl: 'http://127.0.0.1:9000/',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e/**/*_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
