class BasePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor (page) {
        //saves the browser tab instance from your test filee
        this.page = page; //All child will inherit this page instance from the test file automatically
    }
    // A common method that can be used by all child pages
    async getPageTitle() {
        return await this.page.title();
    }
}

module.exports = { BasePage };