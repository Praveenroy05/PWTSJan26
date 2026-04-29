import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * PracticeLoginPage - Page Object for Practice Test Automation Login Page
 * URL: https://practicetestautomation.com/practice-test-login/
 */
export class PracticeLoginPage extends BasePage {
  // Locators
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;
  readonly errorMessageArea: Locator;
  readonly pageHeading: Locator;
  readonly descriptionText: Locator;
  readonly validCredentialsText: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = this.page.locator('input[name="username"]');
    this.passwordField = this.page.locator('input[name="password"]');
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
    this.errorMessageArea = this.page.locator("xpath=//div[@class='container']/div[contains(text(), 'invalid')]");
    this.pageHeading = this.page.getByRole("heading", { level: 2, name: /Test login/i });
    this.descriptionText = this.page.locator("text=This is a simple Login page");
    this.validCredentialsText = this.page.locator("text=Use next credentials to execute Login");
  }

  /**
   * Navigate to the practice login page
   */
  async navigateToLoginPage(): Promise<void> {
    await this.navigateTo(`${this.BASE_URL}/practice-test-login/`);
    await this.waitForNavigation();
  }

  /**
   * Enter username in the username field
   */
  async enterUsername(username: string): Promise<void> {
    await this.usernameField.fill(username);
  }

  /**
   * Enter password in the password field
   */
  async enterPassword(password: string): Promise<void> {
    await this.passwordField.fill(password);
  }

  /**
   * Clear username field
   */
  async clearUsername(): Promise<void> {
    await this.usernameField.clear();
  }

  /**
   * Clear password field
   */
  async clearPassword(): Promise<void> {
    await this.passwordField.clear();
  }

  /**
   * Click the Submit button
   */
  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Login with username and password
   */
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }

  /**
   * Get the value of username field
   */
  async getUsernameValue(): Promise<string | null> {
    return await this.usernameField.inputValue();
  }

  /**
   * Get the value of password field
   */
  async getPasswordValue(): Promise<string | null> {
    return await this.passwordField.inputValue();
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string | null> {
    const errorElement = this.page.locator("xpath=//div[contains(text(), 'invalid')]").first();
    if (await errorElement.isVisible({ timeout: 2000 }).catch(() => false)) {
      return await errorElement.textContent();
    }
    return null;
  }

  /**
   * Check if error message is visible
   */
  async isErrorMessageVisible(): Promise<boolean> {
    const errorElement = this.page.locator("xpath=//div[contains(text(), 'Your username is invalid!') or contains(text(), 'Your password is invalid!')]").first();
    try {
      return await errorElement.isVisible({ timeout: 2000 });
    } catch {
      return false;
    }
  }

  /**
   * Check if username field is visible
   */
  async isUsernameFieldVisible(): Promise<boolean> {
    return await this.usernameField.isVisible();
  }

  /**
   * Check if password field is visible
   */
  async isPasswordFieldVisible(): Promise<boolean> {
    return await this.passwordField.isVisible();
  }

  /**
   * Check if submit button is visible
   */
  async isSubmitButtonVisible(): Promise<boolean> {
    return await this.submitButton.isVisible();
  }

  /**
   * Check if submit button is enabled
   */
  async isSubmitButtonEnabled(): Promise<boolean> {
    return await this.submitButton.isEnabled();
  }

  /**
   * Submit form by pressing Enter key
   */
  async submitByEnterKey(): Promise<void> {
    await this.passwordField.press("Enter");
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Tab to next field for keyboard navigation
   */
  async tabToNextField(): Promise<void> {
    await this.page.keyboard.press("Tab");
  }

  /**
   * Get username field type attribute
   */
  async getUsernameFieldType(): Promise<string | null> {
    return await this.usernameField.getAttribute("type");
  }

  /**
   * Get password field type attribute
   */
  async getPasswordFieldType(): Promise<string | null> {
    return await this.passwordField.getAttribute("type");
  }

  /**
   * Get username field name attribute
   */
  async getUsernameFieldName(): Promise<string | null> {
    return await this.usernameField.getAttribute("name");
  }

  /**
   * Get password field name attribute
   */
  async getPasswordFieldName(): Promise<string | null> {
    return await this.passwordField.getAttribute("name");
  }

  /**
   * Check if page heading is visible
   */
  async isPageHeadingVisible(): Promise<boolean> {
    return await this.pageHeading.isVisible();
  }

  /**
   * Get page heading text
   */
  async getPageHeadingText(): Promise<string | null> {
    return await this.pageHeading.textContent();
  }

  /**
   * Check if valid credentials text is visible
   */
  async isValidCredentialsTextVisible(): Promise<boolean> {
    return await this.validCredentialsText.isVisible();
  }

  /**
   * Focus on username field
   */
  async focusUsernameField(): Promise<void> {
    await this.usernameField.focus();
  }

  /**
   * Focus on password field
   */
  async focusPasswordField(): Promise<void> {
    await this.passwordField.focus();
  }

  /**
   * Get all error messages on the page
   */
  async getAllErrorMessages(): Promise<string[]> {
    const errorElements = this.page.locator("xpath=//div[contains(text(), 'invalid')]");
    const count = await errorElements.count();
    const messages: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const text = await errorElements.nth(i).textContent();
      if (text) {
        messages.push(text);
      }
    }
    
    return messages;
  }

  /**
   * Clear both fields
   */
  async clearAllFields(): Promise<void> {
    await this.clearUsername();
    await this.clearPassword();
  }

  /**
   * Check if page is loaded
   */
  async isPageLoaded(): Promise<boolean> {
    return await this.isPageHeadingVisible() && await this.isUsernameFieldVisible() && await this.isPasswordFieldVisible();
  }
}
