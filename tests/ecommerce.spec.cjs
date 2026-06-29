// const { test, expect } = require('@playwright/test');
//above line is commented because we are using the fixtures/pageObjectManager.js file to create the instances of the page classes and use them in the test

//Import the test and expect from the fixtures/pageObjectManager.js file
const { test, expect } = require('../fixtures/pageObjectManager');

//Import the both classes
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test('End to End Test: Login and Add to Cart', async ({ loginPage, inventoryPage }) => {


    //Note: instead of below we used the fixtures/pageObjectManager.js file to create the instances of the page classes and use them in the test
    // // Create instances of the page classes -- objects of the classes
    // const loginPage = new LoginPage(page);
    // const inventoryPage = new InventoryPage(page);


    // Navigate to the login page - Execute encapsulated action
    await loginPage.navigateToLoginPage();  // <--- THIS IS ABSTRACTION
    await loginPage.login('standard_user', 'secret_sauce'); // <--- THIS IS ABSTRACTION

    // Use an Inherited method from BasePage (Even though it's not written in LoginPage!)
    const title = await loginPage.getPageTitle();
    console.log('Page Title:', title);
    expect(title).toBe('Swag Labs'); // Verify that the page title is correct after login

    //Inventory page actions
    await inventoryPage.addBackpackToCart();
    const cartCount = await inventoryPage.getCartBadgeCount();
    expect(cartCount).toBe('1'); // Verify that the cart badge count is 1 after adding the backpack to the cart
// await page.pause(); // Pause the test to see the result in the browser
}); 