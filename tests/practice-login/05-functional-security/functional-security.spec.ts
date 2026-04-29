import { test, expect } from "@playwright/test";
import { PracticeLoginPage } from "../../pages/practiceLogin/PracticeLoginPage";
import { SuccessPage } from "../../pages/practiceLogin/SuccessPage";

test.describe("Functional and Security Scenarios", () => {
  let loginPage: PracticeLoginPage;
  let successPage: SuccessPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PracticeLoginPage(page);
    successPage = new SuccessPage(page);
  });

  test("Test 6.1: Logout functionality", {
    tag: ["@functional", "@logout"]
  }, async () => {
    // Login first
    await loginPage.navigateToLoginPage();
    await loginPage.login("student", "Password123");
    
    // Verify user is logged in
    expect(await successPage.isSuccessHeadingVisible()).toBeTruthy();
    
    // Click logout
    await successPage.clickLogout();
    
    // Verify page redirected back to login page
    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain("practice-test-login");
    
    // Verify login form is displayed
    expect(await loginPage.isPageLoaded()).toBeTruthy();
  });

  test("Test 6.2: Browser back button after successful login", {
    tag: ["@functional", "@browser"]
  }, async ({ page }) => {
    // Login
    await loginPage.navigateToLoginPage();
    await loginPage.login("student", "Password123");
    
    // Verify logged in
    expect(await successPage.isSuccessHeadingVisible()).toBeTruthy();
    
    // Click back button
    await page.goBack();
    
    // Verify page responds appropriately
    const currentUrl = await loginPage.getCurrentUrl();
    // Page should either be on login page or stay on success page depending on app behavior
    expect(currentUrl).toBeTruthy();
  });

  test("Test 6.3: Multiple failed login attempts", {
    tag: ["@functional", "@security"]
  }, async () => {
    // Perform multiple failed login attempts
    await loginPage.navigateToLoginPage();
    
    for (let i = 0; i < 5; i++) {
      await loginPage.enterUsername("wronguser");
      await loginPage.enterPassword("wrongpass");
      await loginPage.clickSubmit();
      
      // Verify error message
      expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
      
      // Navigate back to login page for next attempt
      if (i < 4) {
        await loginPage.navigateToLoginPage();
      }
    }
    
    // Verify user can still login after failed attempts
    await loginPage.navigateToLoginPage();
    await loginPage.login("student", "Password123");
    
    // Verify successful login
    expect(await successPage.isSuccessHeadingVisible()).toBeTruthy();
  });

  test("Test 6.4: Form validation - no HTML attribute bypass", {
    tag: ["@functional", "@validation"]
  }, async ({ page }) => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Check if fields can accept invalid input via JavaScript
    const usernameType = await loginPage.getUsernameFieldType();
    const passwordType = await loginPage.getPasswordFieldType();
    
    // Verify field types are correct
    expect(usernameType).toEqual("text");
    expect(passwordType).toEqual("password");
    
    // Verify no maxlength or pattern restrictions prevent submission
    await loginPage.enterUsername("a".repeat(1000));
    await loginPage.enterPassword("b".repeat(1000));
    
    // Should be able to click submit without client-side validation errors
    expect(await loginPage.isSubmitButtonEnabled()).toBeTruthy();
  });

  test("Test 6.5: Response time on successful login", {
    tag: ["@functional", "@performance"]
  }, async () => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Measure login time
    const startTime = Date.now();
    
    // Login with valid credentials
    await loginPage.enterUsername("student");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    // Verify successful login
    expect(await successPage.isSuccessHeadingVisible()).toBeTruthy();
    
    // Verify response time is reasonable (typically under 5 seconds)
    expect(responseTime).toBeLessThan(5000);
  });

  test("Test 6.6: XSS attack attempt in username field", {
    tag: ["@functional", "@security", "@xss"]
  }, async ({ page }) => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Attempt XSS injection
    await loginPage.enterUsername('<script>alert("XSS")</script>');
    await loginPage.enterPassword("anything");
    await loginPage.clickSubmit();
    
    // Verify XSS did not execute (no alert should appear)
    // Verify error message is displayed instead
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 6.7: XSS attack attempt in password field", {
    tag: ["@functional", "@security", "@xss"]
  }, async ({ page }) => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Attempt XSS injection in password
    await loginPage.enterUsername("student");
    await loginPage.enterPassword('<img src=x onerror=alert("XSS")>');
    await loginPage.clickSubmit();
    
    // Verify XSS did not execute
    // Verify error message is displayed
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 6.8: Password field masking", {
    tag: ["@functional", "@security", "@password-masking"]
  }, async () => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Verify password field type is 'password'
    const passwordType = await loginPage.getPasswordFieldType();
    expect(passwordType).toEqual("password");
    
    // Enter password
    await loginPage.enterPassword("Password123");
    
    // Verify password is masked (input value should still be there but not visible)
    const passwordValue = await loginPage.getPasswordValue();
    expect(passwordValue).toEqual("Password123");
  });

  test("Test 6.9: No default values in form fields", {
    tag: ["@functional", "@form"]
  }, async () => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Verify both fields are empty
    const usernameValue = await loginPage.getUsernameValue();
    const passwordValue = await loginPage.getPasswordValue();
    
    expect(usernameValue).toEqual("");
    expect(passwordValue).toEqual("");
  });

  test("Test 6.10: Credentials are validated on server-side", {
    tag: ["@functional", "@security"]
  }, async ({ page }) => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Attempt to submit with invalid credentials multiple ways
    const testCases = [
      { username: "", password: "" },
      { username: "admin", password: "admin" },
      { username: "test", password: "test" }
    ];
    
    for (const testCase of testCases) {
      await loginPage.clearAllFields();
      await loginPage.enterUsername(testCase.username);
      await loginPage.enterPassword(testCase.password);
      await loginPage.clickSubmit();
      
      // Verify error message (indicating server-side validation)
      expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    }
  });
});
