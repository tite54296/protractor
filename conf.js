exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  directConnect: true,
  specs: ['./features/*.feature'],
  cucumberOpts: {
    require: ['./features/step_definitions/*.step.js'],
    tags: ['@all'],
    format: 'pretty',
    profile: false
  },
  capabilities: {
    'browserName': 'chrome',
    'logName': 'Chrome - Test'
  },
  onPrepare: () => {
    const width = 1200;
    const height = 800;
    browser.driver.manage().window().setSize(width, height);
    browser.ignoreSynchronization = true;
  },
}
