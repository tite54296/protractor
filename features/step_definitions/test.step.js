const LoginPage = require('../../pages/login.js');

module.exports = function() {
  this.Given('I am on YourLogo website', function () {
    LoginPage.get();
    LoginPage.login();
  });
}
