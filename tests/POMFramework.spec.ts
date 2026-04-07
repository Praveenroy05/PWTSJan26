// Framework - It is a design principle. Set of guidlines.

// POM - Page Object Model - It is a design pattern. It is a class which represents the page of the application. It contains the locators and methods of the page.

// Page object model is a design pattern used in software testing to represent a web page as an object. It is a way to organise and manage the interaction with a web page by creating the properties (variables - locators) and methods (Action - LoginIntoApplication(), launchURL(),...) of that particular page.

// This approach helps in reducing the code duplication, improve the test readibility and maintainability by encapsulating the page-specific properties and methods inside a particular class.

// LoginPage.ts - Locators related to login page, methods related to login page


// POM framework from scratch:

// There are different layers that we have to create:

// 1. PAGE LAYER - Will create a package or folder(pages) - Different class you will be creating it over here - LoginPage.ts, DashbordPage.ts ... . This class will consists of locators and methods related to specific class.
// email, password, loginbtn - loginIntoApplication(), invalidLogin()


// 2. TEST LAYER - Will create a package or folder(tests) - Pure test case and assertion. We will call the locators and methods from the page class tje the test files. LoginPageTest.spec.ts, DashboardPagetest.spec.ts,...


// 3. TEST DATA LAYER -  json/excel - TestData.json, TestData.excel

// 4. CONFIGURATION LAYER - playwright.config.ts - Global configuration file

// 5. UTILS LAYER - We will create utils folder. Custom Function - screenshot(), scrollDown(), get the data from excel, API method - to get the authorization token

// 6. REPORT LAYER - HTML/Allure - we do not have to create it separately

// 0. Data driven testing
// 1. Hooks
// 2. Annotation
// 3. grouping
// 4. allure/Jenkins
// 5. MCP - Playwright Agent


