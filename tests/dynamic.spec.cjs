const {test } = require('../fixtures/pageObjectManager');

test('Handle completely dynamic IDs using resilient locators', async ({dynamicIdPage, page }) => {

    await dynamicIdPage.navigateToDynamicIdPage();
    console.log('Clicking the button with its initial dynamic ID...');
    await dynamicIdPage.clickDynamicIdButton();
    console.log('Reloading page to change the element ID...');
    await page.reload();
    console.log('Clicking the button again with a completely different ID...');
    await dynamicIdPage.clickDynamicIdButton();
    console.log('Success! Dynamic ID bypassed.');
});