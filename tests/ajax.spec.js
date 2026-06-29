// Que : How to handle the dyanamic elements

const {test, expect } = require('../fixtures/pageObjectManager');

test('Handle long asynchronous AJAX delays smoothly', async ({ajaxPage})  => {
    //1. Navigate
    await ajaxPage.navigate();
    // 2. Click the button to fire the slow API request
  console.log('Triggering the AJAX request (this will take 15 seconds)...');
  await ajaxPage.triggerAjaxCall();

  // 3. Fetch the message text (the page object will pause and wait here)
  const textOutput = await ajaxPage.getLoadedMessage();

  console.log(`Success! Message loaded from server: "${textOutput}"`);

  //4. Assert that the correct text loaded
  expect(textOutput).toBe('Data loaded with AJAX get request.')
});

