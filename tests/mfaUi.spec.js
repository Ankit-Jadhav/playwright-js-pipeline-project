const {test, expect } = require('../fixtures/pageObjectManager');
const { MfaLoginPage } = require('../pages/MfaLoginPage');

test('E2E Challenge: Handle Secure OTP Generation and Entry', async({mfaLoginPage, page}) =>
{
    await mfaLoginPage.navigate();
    console.log('Entering profile credentials to trigger MFA text challenge...');
    await mfaLoginPage.triggerOtpRequest('practice@expandtesting.com');

    //// 3. THE BACKDOOR INTERCEPTION: 
  // The practice site outputs a simulated SMS text block on screen.
  // We grab that dynamic text message block and extract the numbers!
//   const textContainer = await page.locator('.badge-info').innerText();
//   const extractedOtp = textContainer.match(/\d+/)[0]; // Pulls only the digits out using Regex
// console.log(`[Framework API Intercept Success] Intercepted dynamic OTP token: ${extractedOtp}`);
// await mfaLoginPage.submitOtpCode(extractedOtp);

// THE ENVIRONMENT TRAP DOOR APPROACH:
  // Instead of scraping a fragile element, we supply the static sandbox token
  // designated for our automated QA test profiles.
  const staticSandboxOtp = '214365';
  console.log(`[Framework Config] Using environment static test OTP: ${staticSandboxOtp}`);

  // 4. Input the token directly into the input field
  await mfaLoginPage.submitOtpCode(staticSandboxOtp);

//assert
await expect(mfaLoginPage.successAlert).toBeVisible();
await expect(mfaLoginPage.successAlert).toContainText('You logged into a secure area!');
// Pause briefly so you can watch your success log play out in the browser
  await page.waitForTimeout(2000);

});