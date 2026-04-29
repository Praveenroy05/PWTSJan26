import { test, expect } from "@playwright/test";
import { PracticeLoginPage } from "../../pages/practiceLogin/PracticeLoginPage";

test.describe("Edge Cases and Boundary Testing", () => {
  let loginPage: PracticeLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PracticeLoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test("Test 4.1: Very long username string", {
    tag: ["@edge-case", "@boundary"]
  }, async () => {
    // Create a very long username (255+ characters)
    const longUsername = "a".repeat(255);
    
    // Enter long username
    await loginPage.enterUsername(longUsername);
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Application should handle gracefully
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 4.2: Very long password string", {
    tag: ["@edge-case", "@boundary"]
  }, async () => {
    // Create a very long password (255+ characters)
    const longPassword = "a".repeat(255);
    
    // Enter long password
    await loginPage.enterUsername("student");
    await loginPage.enterPassword(longPassword);
    await loginPage.clickSubmit();
    
    // Application should handle gracefully
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    
    // Verify error message
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 4.3: SQL injection attempt in username", {
    tag: ["@edge-case", "@security", "@sql-injection"]
  }, async () => {
    // Attempt SQL injection in username
    const sqlPayloads = ["admin' --", "admin' /*", "' or '1'='1"];
    
    for (const payload of sqlPayloads) {
      await loginPage.navigateToLoginPage();
      await loginPage.enterUsername(payload);
      await loginPage.enterPassword("anything");
      await loginPage.clickSubmit();
      
      // Verify SQL injection is blocked
      expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Your username is invalid!");
    }
  });

  test("Test 4.4: SQL injection attempt in password", {
    tag: ["@edge-case", "@security", "@sql-injection"]
  }, async () => {
    // Attempt SQL injection in password
    const sqlPayloads = ["anything' OR '1'='1", "anything'; DROP TABLE users; --", "anything' /*"];
    
    for (const payload of sqlPayloads) {
      await loginPage.navigateToLoginPage();
      await loginPage.enterUsername("student");
      await loginPage.enterPassword(payload);
      await loginPage.clickSubmit();
      
      // Verify SQL injection is blocked
      expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Your password is invalid!");
    }
  });

  test("Test 4.5: Numbers only in username field", {
    tag: ["@edge-case", "@boundary"]
  }, async () => {
    // Enter only numbers as username
    await loginPage.enterUsername("12345");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 4.6: Special characters in password", {
    tag: ["@edge-case", "@special-chars"]
  }, async () => {
    // Enter special characters in password
    const specialChars = "Password@!#$%^&*()";
    
    await loginPage.enterUsername("student");
    await loginPage.enterPassword(specialChars);
    await loginPage.clickSubmit();
    
    // Verify error message
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 4.7: Unicode and emoji characters", {
    tag: ["@edge-case", "@unicode"]
  }, async () => {
    // Test with Cyrillic character
    await loginPage.enterUsername("студент");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    let errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
    
    // Test with emoji
    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername("student😀");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 4.8: Only whitespace in username field", {
    tag: ["@edge-case", "@whitespace"]
  }, async () => {
    // Enter only spaces in username
    await loginPage.enterUsername("     ");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 4.9: Only whitespace in password field", {
    tag: ["@edge-case", "@whitespace"]
  }, async () => {
    // Enter only spaces in password
    await loginPage.enterUsername("student");
    await loginPage.enterPassword("     ");
    await loginPage.clickSubmit();
    
    // Verify error message
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Test 4.10: Tab character in username", {
    tag: ["@edge-case", "@special-chars"]
  }, async () => {
    // Enter username with tab character
    await loginPage.enterUsername("stu\tdent");
    await loginPage.enterPassword("Password123");
    await loginPage.clickSubmit();
    
    // Verify error message
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Test 4.11: XSS attempt in username field", {
    tag: ["@edge-case", "@security", "@xss"]
  }, async () => {
    // Attempt XSS injection
    const xssPayloads = [
      '<script>alert("XSS")</script>',
      '<img src=x onerror=alert("XSS")>',
      '<svg onload=alert("XSS")>'
    ];
    
    for (const payload of xssPayloads) {
      await loginPage.navigateToLoginPage();
      await loginPage.enterUsername(payload);
      await loginPage.enterPassword("Password123");
      await loginPage.clickSubmit();
      
      // Verify XSS is blocked
      expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain("Your username is invalid!");
    }
  });
});
