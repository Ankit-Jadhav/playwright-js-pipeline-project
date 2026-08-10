const { BasePage } = require('./BasePage');

class LoginPage1 extends BasePage {
    constructor(page) {
        super(page);

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    
    async navigateTo(url){
    await this.page.goto(url);
}

async perfomeLogin(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

async getErrorMessage() {
    return await this.errorMessage.textContent();           
}

}

module.exports = { LoginPage1 };

