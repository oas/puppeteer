const BrowserManager = require("./managers/browser-manager");

// https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md
(async function() {
    const browserManager = await BrowserManager();
    await browserManager.page.goto("https://www.reddit.com/r/place");
    await browserManager.page.screenshot({path: "./kek.png"});
    await browserManager.browser.close();
})();