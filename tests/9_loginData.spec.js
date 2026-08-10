const { test, expect } = require('../fixtures/pageObjectManager');

test('Register with dynamic fixture user', async ({ loginPage1, randomUser }) => {
    // Navigate to the login page
    await loginPage1.navigateTo('https://www.saucedemo.com/');
    console.log(`Running test with user: ${randomUser.username}`);

    await loginPage1.perfomeLogin(randomUser.username, randomUser.password);
})