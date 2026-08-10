const { test, expect } = require('../fixtures/pageObjectManager');

test('Login using environment variables', async ({ loginPage1, envConfig }) => {
    // Navigate to the login page
    await loginPage1.navigateTo(envConfig.baseUrl);
    await loginPage1.perfomeLogin(envConfig.username, envConfig.password);
    
})