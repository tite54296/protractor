const LoginPage = require('./pages/login.js');

describe('test sin cucumber', function() {
  it('deberia funcionar', function() {
    LoginPage.get();
    LoginPage.login();
  })
})
