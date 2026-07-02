const {test, expect} = require('@playwright/test');

test('Handle Rediff Cookies @sanity', async ({page, context}) => {

    await page.goto('https://www.reddit.com/');

// Get all cookies from the browser context
let cookies = await context.cookies();
console.log(`Total cookies found: ${cookies.length}`);
console.log('Cookies:', cookies);

//Add a new cookie to the browser context
await context.addCookies([{
    name: 'myCookie',
    value: 'myValue',
    domain: 'reddit.com',
    path: '/'
}]);

// Get all cookies again to verify the new cookie has been added

let updatedCookies = await context.cookies();
console.log('\n----looping through cookies----');

for (const cookie of updatedCookies) {
    console.log(`Cookie Name: ${cookie.name}, Cookie Value: ${cookie.value}`);
}

// Verify the custom cookies has been added
const myCookie = updatedCookies.find(cookie => cookie.name === 'myCookie');
expect(myCookie).toBeDefined();
expect(myCookie.value).toBe('myValue');

});