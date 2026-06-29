
// Que : How do you handle dynamic elements?
class DynamicIdPage {
    constructor(page) {
        this.page = page;

        // Fragile (Do NOT use): page.locator('#9z4b21') -> Breaks on refresh
       // Resilient: Locates the element by its functional role and visible text
       this.dynamicIdButton = page.getByRole('button', { name: 'Button with Dynamic ID' });
    }

    async navigateToDynamicIdPage() {
        await this.page.goto('http://uitestingplayground.com/dynamicid');
    }

    async clickDynamicIdButton() {
        await this.dynamicIdButton.click();
    }
  }

module.exports = { DynamicIdPage };
