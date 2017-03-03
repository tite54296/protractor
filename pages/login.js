module.exports = {
  loginPage: {
    signInLink: element(by.css('.login')),
    emailInput: element(by.id('email')),
    passwordInput: element(by.id('passwd')),
    signInBtn: element(by.id('SubmitLogin'))
  },

  get: function() {
    const loginPage = this.loginPage;
    browser.get('http://automationpractice.com/index.php');
    loginPage.signInLink.click();
  },

  login: function() {
    const loginPage = this.loginPage;
    loginPage.emailInput.sendKeys('test4665@test.com');
    loginPage.passwordInput.sendKeys('testpassword');
    loginPage.signInBtn.click();
  }
}
