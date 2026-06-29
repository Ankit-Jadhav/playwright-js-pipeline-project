const { BasePage } = require('./BasePage');

// LoginPage class extends the BasePage class to inherit its properties and methods
class LoginPage extends BasePage { // <--- THIS IS INHERITANCE
    /**
     * @param {import('@playwright/test').Page} page 
     */

    // 1. Constructor to initialize the page elements
    constructor(page){
        //super(page); // Call the constructor of the BasePage class to inherit its properties and methods
        super(page);  // <--- THIS IS INHERITANCE

        //  Define properties (locators) for the elements on the login page using "this"
        this.usernameInput = page.locator('#user-name'); // <--- THIS IS ENCAPSULATION
        this.passwordInput = page.locator('#password'); // <--- THIS IS ENCAPSULATION
        this.loginButton = page.locator('#login-button'); // <--- THIS IS ENCAPSULATION
    }

    // 2. Method (Actions) to perform login action
    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };