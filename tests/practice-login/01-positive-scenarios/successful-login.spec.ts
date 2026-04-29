import { test, expect } from "@playwright/test";
import { PracticeLoginPage } from "../../pages/practiceLogin/PracticeLoginPage";
import { SuccessPage } from "../../pages/practiceLogin/SuccessPage";

test.describe("Positive Login Scenarios", () => {
  let loginPage: PracticeLoginPage;
  let successPage: SuccessPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PracticeLoginPage(page);
    successPage = new SuccessPage(page);
    await loginPage.navigateToLoginPage();
  });

  test("Test 1.1: Successful login with valid credentials", {
    tag: ["@positive", "@smoke"]
  }, async () => {
    // Enter valid username
    await loginPage.enterUsername("student");
    
    // Enter valid password
    await loginPage.enterPassword("Password123");
    
    // Click Submit button
    await loginPage.clickSubmit();
    
    // Verify page redirects to success page
    await successPage.waitForUrl(/logged-in-successfully/);
    
    // Verify success heading is displayed
    expect(await successPage.isSuccessHeadingVisible()).toBeTruthy();
    
    // Verify success message contains "Congratulations"
    const messageText = await successPage.getSuccessMessageText();
    expect(messageText).toContain("Congratulations");
    expect(messageText).toContain("student");
    
    // Verify logout link is visible
    expect(await successPage.isLogoutLinkVisible()).toBeTruthy();
  });

  test("Test 1.2: Page loads with correct title and heading", {
    tag: ["@positive", "@smoke"]
  }, async ({ page }) => {
    // Verify page URL is correct
    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain("practice-test-login");
    
    // Verify page title
    const pageTitle = await loginPage.getPageTitle();
    expect(pageTitle).toContain("Test Login");
    
    // Verify page heading is visible
    expect(await loginPage.isPageHeadingVisible()).toBeTruthy();
    
    // Verify heading text
    const headingText = await loginPage.getPageHeadingText();
    expect(headingText?.trim()).toEqual("Test login");
    
    // Verify valid credentials text is visible
    expect(await loginPage.isValidCredentialsTextVisible()).toBeTruthy();
  });

  test("Test 1.3: Form elements are properly labeled and positioned", {
    tag: ["@positive", "@ui"]
  }, async () => {
    // Verify username field is visible
    expect(await loginPage.isUsernameFieldVisible()).toBeTruthy();
    
    // Verify username field type
    const usernameType = await loginPage.getUsernameFieldType();
    expect(usernameType).toEqual("text");
    
    // Verify username field name
    const usernameName = await loginPage.getUsernameFieldName();
    expect(usernameName).toEqual("username");
    
    // Verify password field is visible
    expect(await loginPage.isPasswordFieldVisible()).toBeTruthy();
    
    // Verify password field type
    const passwordType = await loginPage.getPasswordFieldType();
    expect(passwordType).toEqual("password");
    
    // Verify password field name
    const passwordName = await loginPage.getPasswordFieldName();
    expect(passwordName).toEqual("password");
    
    // Verify submit button is visible and enabled
    expect(await loginPage.isSubmitButtonVisible()).toBeTruthy();
    expect(await loginPage.isSubmitButtonEnabled()).toBeTruthy();
  });
});
