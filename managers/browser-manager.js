const Puppeteer = require("puppeteer");

/**
 * Initialisiert den Browser.
 */
async function BrowserManager() {
    BrowserManager.browser = await Puppeteer.launch({
        args: [
            "--window-size=" + BrowserManager.BROWSER_WIDTH + "," + BrowserManager.BROWSER_HEIGHT
        ],
        headless: false
    });
    BrowserManager.page = await BrowserManager.browser.newPage();
    BrowserManager.page.setViewport({
        width: BrowserManager.BROWSER_WIDTH,
        height: BrowserManager.BROWSER_HEIGHT
    });

    return BrowserManager;
}

BrowserManager.BROWSER_WIDTH = 1920;
BrowserManager.BROWSER_HEIGHT = 1080;

BrowserManager.browser = null;
BrowserManager.page = null;

module.exports = BrowserManager;