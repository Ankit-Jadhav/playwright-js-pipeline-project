class InventoryPage {
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    
    constructor(page){
        this.page = page; //saves the browser tab instance from your test file

        // Define properties (locators) for the elements on the inventory page using "this"
        this.backpackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    // 2. Method (Actions) to perform actions on the inventory page
    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }
    async getCartBadgeCount() {
        return await this.cartBadge.innerText();
    }

}

module.exports = { InventoryPage };