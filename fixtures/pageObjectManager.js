const base = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const {InventoryPage} = require('../pages/InventoryPage');
const { DynamicIdPage } = require('../pages/DynamicIdPage');
const {AjaxPage} = require('../pages/AjaxPage.js');
const {MfaLoginPage} = require('../pages/MfaLoginPage.js');
const {UploadPage} = require('../pages/UploadPage.js');
const {DownloadPage} = require('../pages/DownloadPage.js');
const {LoginPage1} = require('../pages/LoginPage1.js');
const userData = require('../test-data/loginData.json');

// Extend the base test to include our page objects automatically

const test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    dynamicIdPage: async ({ page }, use) => {
        await use(new DynamicIdPage(page));
    },

    ajaxPage: async ({page}, use) => {
        await use(new AjaxPage(page));
    },

    mfaLoginPage: async ({page}, use) => {
        await use(new MfaLoginPage(page));
    },

    uploadPage: async ({page}, use) => {
        await use(new UploadPage(page));
    },
    
    downloadPage: async ({page}, use) => {
        await use(new DownloadPage(page));
    },

    loginPage1: async ({page}, use) => {
        await use(new LoginPage1(page));
    },

    testData: async ({}, use) =>{
        await use(userData);
    },

    randomUser: async ({}, use) => {
        const timestamp = Date.now();
        const user = {
            username: `user_${timestamp}`,
            email: `test_${timestamp}@example.com`,
            password: `password_${timestamp}!`
        }
        await use(user);
    },

    envConfig: async ({}, use) => {
        const config = {
            baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com/',
            adminUser: process.env.ADMIN_USER,
            adminPass: process.env.ADMIN_PASS
        }
        await use(config);
    }
});

module.exports = { test, expect: base.expect };