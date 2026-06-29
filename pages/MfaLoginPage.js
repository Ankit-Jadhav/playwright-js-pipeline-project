// Step one to use TOTP library to verify otp or MFA -  run -- npm install otplib

const {authenticator } = require('otplib');

class MfaLoginPage {
    constructor(page){
        this.page = page;
        this.emailInput = page.locator('#email');
        this.sendCodeBtn = page.locator('#btn-send-otp');

        this.otpInput = page.locator('#otp');
        this.verifyBtn = page.locator('#btn-send-verify');

        this.successAlert = page.locator('#flash');
    };

    async navigate() {
        await this.page.goto('https://practice.expandtesting.com/otp-login');
    };

    async triggerOtpRequest(email){
        await this.emailInput.fill(email);
        await this.sendCodeBtn.click();
    };

    async submitOtpCode(otpCode){
        await this.otpInput.fill(otpCode);
        await this.verifyBtn.click();
    }  
}

module.exports = {MfaLoginPage};
