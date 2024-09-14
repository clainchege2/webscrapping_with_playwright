# 🐺 QA Wolf Take Home Assignment

Welcome to the QA Wolf take home assignment for our [QA Engineer](https://www.notion.so/qawolf/QA-Wolf-QA-Engineer-Remote-156203a1e476459ea5e6ffca972d0efe) role! We appreciate your interest and look forward to seeing what you come up with.

This project is a script that automates the process of validating the sorting of articles on the Hacker News "newest" page using Playwright.

Assignment Description
The goal of this assignment is to verify that exactly the first 100 articles on the Hacker News "newest" page are sorted in descending order, from newest to oldest, based on their post IDs.

Key Objectives:
Navigate to Hacker News "newest" page: The script opens the "newest" section of Hacker News using Playwright.
Extract the first 100 articles: The script selects and captures the post IDs of the first 100 articles displayed on the page.
Validate sorting: The post IDs are checked to ensure they are in descending order (from newest to oldest).
Report the result: The script logs a message confirming whether the articles are sorted correctly.


Install dependencies:
npm install
Run the script:
node index.js


Tools Used
Playwright: For browser automation and extracting the article information.
Node.js: The runtime environment for executing the script.
