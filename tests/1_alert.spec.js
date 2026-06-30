const { test, expect } = require('@playwright/test');

test('Handle Rediff Mail Alert Popup', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //Setup a listener for the Dialog BEFORE clicking the button
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am a JS Alert');
        await dialog.accept();
    });
    //Click the button to trigger the alert
    await page.getByRole('button', {name: 'Click for JS Alert'}).click();

    // Verify the result text on screen to confirm it worked
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    // await page.pause(); // Wait for 5 seconds to see the alert handling in action
});