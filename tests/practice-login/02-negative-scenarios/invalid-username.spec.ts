import { test, expect } from "@playwright/test";
import { PracticeLoginPage } from "../../pages/practiceLogin/PracticeLoginPage";

test.describe("Negative Scenarios - Invalid Username", () => {
  let loginPage: PracticeLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PracticeLoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test("Test 2.1: Login with incorrect username", {
    tag: ["@negative", "@regression"]
  }, async () => {
    // Enter incorrect username
    await loginPage.enterUsername("incorrectUser");
    
    // Enter correct password
    await loginPage.enterPassword("Password123");
    
    // Click Submit button
    await loginPage.clickSubmit();
    
    // Verify page remains on login page
    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain("practice-test-login");
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 2.2: Login with empty username field", {
    tag: ["@negative", "@regression"]
  }, async () => {
    // Leave username field empty
    
    // Enter password
    await loginPage.enterPassword("Password123");
    
    // Click Submit button
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
    
    // Verify page remains on login page
    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain("practice-test-login");
  });

  test("Test 2.3: Login with completely empty form", {
    tag: ["@negative", "@regression"]
  }, async () => {
    // Both fields are empty by default
    
    // Click Submit button
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 2.4: Username is case-sensitive", {
    tag: ["@negative", "@case-sensitivity"]
  }, async () => {
    // Test with uppercase username
    await loginPage.enterUsername("STUDENT");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    let errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
    
    // Clear fields and test with mixed case
    await loginPage.clearAllFields();
    await loginPage.enterUsername("Student");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 2.5: Username with leading whitespace", {
    tag: ["@negative", "@whitespace"]
  }, async () => {
    // Enter username with leading spaces
    await loginPage.enterUsername("  student");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 2.6: Username with trailing whitespace", {
    tag: ["@negative", "@whitespace"]
  }, async () => {
    // Enter username with trailing spaces
    await loginPage.enterUsername("student  ");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 2.7: Username with special characters", {
    tag: ["@negative", "@special-chars"]
  }, async () => {
    // Enter username with special characters
    await loginPage.enterUsername("student@123");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message text
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });
});
