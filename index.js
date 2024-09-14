// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");

  // Wait for the articles to load 
  await page.waitForSelector('.athing');

  // Extract the first 100 articles
  const articles = await page.$$eval('.athing', rows => {
    return rows.slice(0, 100).map(row => row.getAttribute('id'));
  });

  // Validate that the articles are sorted from newest to oldest 
  const isSorted = articles.every((article, i) => {
    if (i === 0) return true; // Skip the first article
    return parseInt(articles[i - 1]) > parseInt(article);
  });

  // Log the result of the sorting check
  if (isSorted) {
    console.log('The articles are correctly sorted from newest to oldest.');
  } else {
    console.log('The articles are NOT sorted correctly.');
  }

  // Close the browser
  await browser.close();
}

(async () => {
  await sortHackerNewsArticles();
})();
