const { test, expect } = require('../fixtures/pageObjectManager');
const fs = require('fs');

// We keep track of the downloaded file path globally within this file for the teardown
let downloadedFileLocation = '';

test.afterEach(async () => {
    // 🧹 CLEANUP: Delete the downloaded file after the test run finishes

    if(downloadedFileLocation && fs.existsSync(downloadedFileLocation)){
        fs.unlinkSync(downloadedFileLocation);
        console.log(`[Teardown Success] Deleted artifact from: ${downloadedFileLocation}`);
    }
});

test('Verify programmatic browser file download and file system validation @smoke @regression @sanity', async ({downloadPage, page}) => 
{

    // 💡 THE AD SHIELD: Block known advertising scripts from loading completely
  // This completely removes the invisible ad overlays from the DOM!
  await page.route('**/*', async (route) => {
    const url = route.request().url();
    if (
      url.includes('google') || 
      url.includes('doubleclick') || 
      url.includes('adservice') || 
      url.includes('ads')
    ) {
      await route.abort(); // Kill the ad request immediately
    } else {
      await route.continue(); // Allow real website files to pass through
    }
  });

    await downloadPage.navigate();

    //Trigger and intercept the streaming download
    console.log('Initiating download event handler and clicking link...');
    downloadedFileLocation = await downloadPage.downloadFile();


    //ASSERTION: Verify the file physically exists on your operating system
    const fileExistsOnDisk = fs.existsSync(downloadedFileLocation);
    console.log(`Does the file physically exist on disk? ${fileExistsOnDisk}`);
    expect(fileExistsOnDisk).toBe(true);

    const fileStats = fs.statSync(downloadedFileLocation);
    console.log(`Downloaded file size: ${fileStats.size} bytes`);
    expect(fileStats.size).toBeGreaterThan(0);
});

