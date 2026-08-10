const { test, expect } = require('../fixtures/pageObjectManager');
// Require JSON data directly for the loop
const loginData = require('../test-data/loginData.json');

test.describe('Negative Login Verification (Parameterized)', () => {

    for (const record of loginData.invalidUsers){
        test(`Should Fail Login User: ${record.username}`, async ({ loginPage1 }) => {
            await loginPage1.navigateTo('https://www.saucedemo.com/');
            await loginPage1.perfomeLogin(record.username, record.password);
            
            // Assert error message matches
            const errorMsg = await loginPage1.getErrorMessage();
            expect(errorMsg).toContain(record.error);
        });
    }

    
});