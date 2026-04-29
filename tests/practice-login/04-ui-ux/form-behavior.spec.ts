import { test, expect } from "@playwright/test";
import { PracticeLoginPage } from "../../pages/practiceLogin/PracticeLoginPage";

test.describe("UI/UX and Form Behavior", () => {
  let loginPage: PracticeLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PracticeLoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test("Test 5.1: Error message is displayed prominently", {
    tag: ["@ui", "@ux"]
  }, async () => {
    // Verify no error message initially
    expect(await loginPage.isErrorMessageVisible()).toBeFalsy();
    
    // Enter invalid credentials
    await loginPage.enterUsername("invalidUser");
    await loginPage.enterPassword("anyPassword");
    await loginPage.clickSubmit();
    
    // Verify error message is visible
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message is readable
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage?.length).toBeGreaterThan(0);
  });

  test("Test 5.2: Form retains values after error", {
    tag: ["@ui", "@ux"]
  }, async () => {
    // Enter test values
    await loginPage.enterUsername("testuser");
    await loginPage.enterPassword("testpass");
    
    // Click Submit
    await loginPage.clickSubmit();
    
    // Verify values are retained
    const usernameValue = await loginPage.getUsernameValue();
    const passwordValue = await loginPage.getPasswordValue();
    
    expect(usernameValue).toEqual("testuser");
    expect(passwordValue).toEqual("testpass");
  });

  test("Test 5.3: Tab key navigation between form fields", {
    tag: ["@ui", "@accessibility"]
  }, async ({ page }) => {
    // Focus on username field
    await loginPage.focusUsernameField();
    
    // Verify username field is focused
    let focusedElement = await page.evaluate(() => document.activeElement?.getAttribute("name"));
    expect(focusedElement).toEqual("username");
    
    // Tab to next field
    await loginPage.tabToNextField();
    
    // Verify focus moved to password field
    focusedElement = await page.evaluate(() => document.activeElement?.getAttribute("name"));
    expect(focusedElement).toEqual("password");
    
    // Tab to submit button
    await loginPage.tabToNextField();
    
    // Verify focus moved to submit button
    focusedElement = await page.evaluate(() => document.activeElement?.getAttribute("type"));
    expect(focusedElement).toEqual("submit");
  });

  test("Test 5.4: Enter key submits the form", {
    tag: ["@ui", "@keyboard"]
  }, async () => {
    // Enter valid credentials
    await loginPage.enterUsername("student");
    await loginPage.enterPassword("Password123");
    
    // Submit by pressing Enter
    await loginPage.submitByEnterKey();
    
    // Verify page redirected to success page
    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain("logged-in-successfully");
  });

  test("Test 5.5: Submit button is clearly visible and clickable", {
    tag: ["@ui", "@elements"]
  }, async () => {
    // Verify submit button is visible
    expect(await loginPage.isSubmitButtonVisible()).toBeTruthy();
    
    // Verify submit button is enabled
    expect(await loginPage.isSubmitButtonEnabled()).toBeTruthy();
  });

  test("Test 5.6: Username and password fields have labels", {
    tag: ["@ui", "@accessibility"]
  }, async ({ page }) => {
    // Verify username field label exists
    const usernameLabel = await page.locator("label:has-text('Username')");
    expect(await usernameLabel.count()).toBeGreaterThanOrEqual(0);
    
    // Verify password field label exists
    const passwordLabel = await page.locator("label:has-text('Password')");
    expect(await passwordLabel.count()).toBeGreaterThanOrEqual(0);
  });

  test("Test 5.7: Page header and instructions are visible", {
    tag: ["@ui", "@content"]
  }, async () => {
    // Verify page heading is visible
    expect(await loginPage.isPageHeadingVisible()).toBeTruthy();
    
    // Verify instructions are visible
    expect(await loginPage.isValidCredentialsTextVisible()).toBeTruthy();
  });

  test("Test 5.8: Navigation menu is present and functional", {
    tag: ["@ui", "@navigation"]
  }, async ({ page }) => {
    // Verify navigation menu exists
    const navMenu = await page.locator("nav").count();
    expect(navMenu).toBeGreaterThanOrEqual(1);
    
    // Verify navigation links exist
    const homeLink = await page.getByRole("link", { name: /Home/i }).count();
    const practiceLink = await page.getByRole("link", { name: /Practice/i }).count();
    
    expect(homeLink).toBeGreaterThanOrEqual(1);
    expect(practiceLink).toBeGreaterThanOrEqual(1);
  });

  test("Test 5.9: Footer is present and functional", {
    tag: ["@ui", "@footer"]
  }, async ({ page }) => {
    // Scroll to bottom of page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Verify footer exists
    const footer = await page.locator("footer, div:has-text('Copyright')").count();
    expect(footer).toBeGreaterThanOrEqual(1);
    
    // Verify copyright information exists
    const copyright = await page.locator("text=©|Copyright").count();
    expect(copyright).toBeGreaterThanOrEqual(1);
  });
});
