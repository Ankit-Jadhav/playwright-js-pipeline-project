class AjaxPage {
    constructor(page){
        this.page = page;
        //locators
        this.triggerBtn = page.locator('#ajaxButton');
        //The success message box appears with a green background class '.bg-success'
        this.successMessage = page.locator('.bg-success');

    }
    async navigate() {
        await this.page.goto('http://uitestingplayground.com/ajax');
    }

    async triggerAjaxCall() {
        await this.triggerBtn.click();
    }

    async getLoadedMessage() {
        // THE SOLVE: Tell Playwright to wait explicitly for this element to become visible.
       // Playwright's default timeout is 30,000ms (30s), so it will poll until the 15s delay finishes!
       await this.successMessage.waitFor({state : 'visible'});
       return await this.successMessage.innerText();
    }
}

module.exports = {AjaxPage}