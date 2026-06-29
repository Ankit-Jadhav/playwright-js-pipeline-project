class UploadPage{
    constructor(page){
        this.page = page;
        this.fileInput = page.locator('#fileInput');
        this.uploadBtn = page.locator('#fileSubmit');
        this.successHeader = page.locator('h1');
        this.uploadedFileName = page.locator('#uploaded-files');
    }

    async navigate(){
        await this.page.goto('https://practice.expandtesting.com/upload');
    }

    /**
   * Directly injects the file path into the HTML input element and submits
   * @param {string} filePath 
   */

    async uploadFile(filePath){
        // Playwright natively intercepts the file explorer dialog box
        await this.fileInput.setInputFiles(filePath);
        await this.uploadBtn.click();
    }
}

module.exports = { UploadPage };