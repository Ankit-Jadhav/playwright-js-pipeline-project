const { test, expect } = require('@playwright/test');

test('Handle Custom Combo Dropdown Case 2 @regression', async ({page}) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.locator('#justAnInputBox').click();

    //Define a function to select multiple values from the dropdown
    const selectMultipleValues = async (value) => {
        await page.locator('.comboTreeDropDownContainer:visible span.comboTreeItemTitle', {hasText: value}).click();
    };

    //Select multiple values from the dropdown
    await selectMultipleValues('choice 6 2 3');
    await selectMultipleValues('choice 6 1');

    const inputBoxValue = await page.locator('#justAnInputBox').inputValue();
    console.log(`Selected Values in Input: ${inputBoxValue}`);

    expect(inputBoxValue).toContain('choice 6 2 3');
    expect(inputBoxValue).toContain('choice 6 1');
// await page.pause(); // Pause the test to see the selected values in the input box   



//Note : Next time try array format and print all values

});