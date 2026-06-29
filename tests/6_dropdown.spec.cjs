const { test, expect } = require('@playwright/test');

test('Handle Dropdowns in Playwright', async ({page}) => {
    await page.goto('https://www.orangehrm.com/30-day-free-trial');
    await page.getByRole('link', {name: 'Book a Free Demo'}).click();

    await page.locator('#Form_getForm_Country').selectOption({label: 'India'});
    await page.locator('#Form_getForm_NoOfEmployees').selectOption({value: '< 10'});

    // Get all the options from the dropdown and print them
    const countryDropdown = page.locator('#Form_getForm_Country option');
    const allCountryOptions = await countryDropdown.allInnerTexts();
    console.log('All Country Options:', allCountryOptions);
    console.log('Total Country Options:', allCountryOptions.length);

    await expect(countryDropdown).toHaveCount(233);

    await expect(page.locator('#Form_getForm_Country')).toHaveValue('India');
    await expect(page.locator('#Form_getForm_NoOfEmployees')).toHaveValue('< 10');
    // await page.pause(); // Pause the test to see the selected values in the dropdowns

});