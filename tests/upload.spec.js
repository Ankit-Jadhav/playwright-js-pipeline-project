const {test, expect} = require('../fixtures/pageObjectManager');
const path = require('path');
const { UploadPage } = require('../pages/UploadPage');

test('Verify programmatic file upload capability', async ({uploadPage, page}) => {
    
    await uploadPage.navigate();

    //Resolve the absolute system path to our dummy text file
    const absoluteFilePath = path.resolve(__dirname, '../test-artifacts/sample.txt');
    console.log(`[Framework File System] Uploading file from: ${absoluteFilePath}`);

    //Execute the upload action
    await uploadPage.uploadFile(absoluteFilePath);

    await expect(uploadPage.successHeader).toHaveText('File Uploaded!');
    await expect(uploadPage.uploadedFileName).toContainText('sample.txt');
    await page.waitForTimeout(2000);

});