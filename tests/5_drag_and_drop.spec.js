const {test, expect} = require('@playwright/test');

test('Handle Drag and Drop in Playwright', async ({page}) => {
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
    const sourceELement = page.locator('#draggable');
    const targetElement = page.locator('#droppable');

    //Approch 1: Using the dragAndDrop method
    // await sourceELement.dragTo(targetElement);

    // await expect(targetElement).toHaveText('Dropped!');

    //Approach 2: Using mouse events
    await sourceELement.hover();
    await page.mouse.down();
    await targetElement.hover();
    await page.mouse.up();
    
await expect(targetElement).toHaveText('Dropped!');

// await page.pause(); 


});