const { test, expect } = require('@playwright/test');

test('Handle Internet Herokuapp Alert Popup @smoke @regression', async ({page}) => {
    //Pass credentials cleanly using the HTTP Credentials option

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${Buffer.from('admin:admin').toString('base64')}`
    });

    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    const successMessage = page.locator('p');
    await expect(successMessage).toContainText('Congratulations! You must have the proper credentials.');
});