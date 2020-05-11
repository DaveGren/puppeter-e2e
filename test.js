const puppeteer = require('puppeteer');

const URL = 'https://tantis.pl';
const SEARCH_PHRASE = 'Blanka Lipińska';
const browserParameter = {
  headless: false,
};

// DOM elements
INPUT_SEARCH = '#search';
AUTOCOMPLETE_ITEM_O = "#autocomplete-result-list-1";

void (async () => {
  try {
    const browser = await puppeteer.launch(browserParameter);
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 650});

    await page.goto(URL);
    await page.focus(INPUT_SEARCH);
    await page.keyboard.type(SEARCH_PHRASE);
    // await page.waitFor(2500);
    await page.focus(AUTOCOMPLETE_ITEM_O);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
  }
  catch (error) {
    console.error('Puppeteer error:', error);
  }

})();