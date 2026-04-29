import { test, expect } from "@playwright/test";
import { PracticeLoginPage } from "../../pages/practiceLogin/PracticeLoginPage";

test.describe("Negative Scenarios - Invalid Password", () => {
  let loginPage: PracticeLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PracticeLoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test("Test 3.1: Login with incorrect password", {
    tag: ["@negative", "@regression"]
  }, async () => {
    // Enter correct username
    await loginPage.enterUsername("student");
    
    // Enter incorrect password
    await loginPage.enterPassword("incorrectPassword");
    
    // Click Submit button
    await loginPage.clickSubmit();
    
    // Verify page remains on login page
    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain("practice-test-login");
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 3.2: Login with empty password field", {
    tag: ["@negative", "@regression"]
  }, async () => {
    // Enter username
    await loginPage.enterUsername("student");
    
    // Leave password field empty
    
    // Click Submit button
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 3.3: Password is case-sensitive", {
    tag: ["@negative", "@case-sensitivity"]
  }, async () => {
    // Test with lowercase password
    await loginPage.enterUsername("student");
    await loginPage.enterPassword("password123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    let errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
    
    // Clear fields and test with uppercase
    await loginPage.clearAllFields();
    await loginPage.enterUsername("student");
    await loginPage.enterPassword("PASSWORD123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 3.4: Password with leading whitespace", {
    tag: ["@negative", "@whitespace"]
  }, async () => {
    // Enter password with leading space
    await loginPage.enterUsername("student");
    await loginPage.enterPassword(" Password123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 3.5: Password with trailing whitespace", {
    tag: ["@negative", "@whitespace"]
  }, async () => {
    // Enter password with trailing space
    await loginPage.enterUsername("student");
    await loginPage.enterPassword("Password123 ");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 3.6: Common incorrect passwords", {
    tag: ["@negative", "@common-mistakes"]
  }, async () => {
    const commonPasswords = ["Password", "123", "password"];
    
    for (const pwd of commonPasswords) {
      await loginPage.navigateToLoginPage();
      await loginPage.enterUsername("student");
      await loginPage.enterPassword(pwd);
      await loginPage.clickSubmit();
      
      // Verify error message is displayed
      expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
      
      // Verify error message text
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Your password is invalid!");
    }
  });
});
