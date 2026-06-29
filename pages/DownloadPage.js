const path = require('path');
class DownloadPage{
    constructor(page){
        this.page = page

        this.downloadLink = page.getByTestId('cdct.jpg');
    }

    async navigate() {
        await this.page.goto('https://practice.expandtesting.com/download');
    }

    /**
   * Captures the asynchronous download event stream and saves the file locally
   */

    async downloadFile(){
        const downloadPromise = this.page.waitForEvent('download');

        // Clicks the specific cdct.jpg link
        await this.downloadLink.click({ force: true });

        const download = await downloadPromise;

        // Save the file into your local test-artifacts directory
        const targetPath = path.resolve(__dirname, '../test-artifacts', download.suggestedFilename());
        await download.saveAs(targetPath);

        console.log(`[Framework File System] File downloaded and saved to: ${targetPath}`);
        return targetPath;
    }
}
module.exports = { DownloadPage };