Feature('My First Test');

Scenario('login', (I, loginPage) => {
  I.amOnPage("https://shimo.im/login")
  loginPage.waitForPageToLoad()
  loginPage.signIn('autotest1@shimo.im','123456')
  dashboardPage.waitForPageToLoad()
});