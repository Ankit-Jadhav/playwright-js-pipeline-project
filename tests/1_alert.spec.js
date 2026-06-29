const { test, expect } = require('@playwright/test');

test('Handle Rediff Mail Alert Popup', async ({page}) => {
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi', { waitUntil: 'commit' });

    //Setup a listener for the Dialog BEFORE clicking the button
    page.on('dialog', async dialog => {
        console.log(`Alert message found: ${dialog.message()}`);
        await page.waitForTimeout(5000); 
        await dialog.accept();
    });
    //Click the button to trigger the alert
    await page.click('button[type="submit"]');
    // await page.pause(); // Wait for 5 seconds to see the alert handling in action
   

});