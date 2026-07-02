const {expect, test} = require('@playwright/test');

test.use({ ignoreHTTPSErrors: true });

test('Handle SSL Certificate Error @smoke', async ({ page }) => {
    await page.goto('https://expired.badssl.com/');
    // Pass the locator itself directly into expect()
await expect(page.locator('#content h1')).toContainText('expired.badssl.com');
    
});