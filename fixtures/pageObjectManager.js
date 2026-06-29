const base = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const {InventoryPage} = require('../pages/InventoryPage');
const { DynamicIdPage } = require('../pages/DynamicIdPage');
const {AjaxPage} = require('../pages/AjaxPage.js');
const {MfaLoginPage} = require('../pages/MfaLoginPage.js');
const {UploadPage} = require('../pages/UploadPage.js');
const {DownloadPage} = require('../pages/DownloadPage.js');

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
});

module.exports = { test, expect: base.expect };