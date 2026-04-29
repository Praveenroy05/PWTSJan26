import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * SuccessPage - Page Object for the Success page after successful login
 * URL: https://practicetestautomation.com/logged-in-successfully/
 */
export class SuccessPage extends BasePage {
  // Locators
  readonly successHeading: Locator;
  readonly successMessage: Locator;
  readonly logoutLink: Locator;
  readonly congratulationsText: Locator;

  constructor(page: Page) {
    super(page);
    this.successHeading = this.page.getByRole("heading", { level: 1, name: /Logged In Successfully/i });
    this.successMessage = this.page.locator("xpath=//strong[contains(text(), 'Congratulations')]");
    this.logoutLink = this.page.getByRole("link", { name: /Log out/i });
    this.congratulationsText = this.page.locator("text=Congratulations");
  }

  /**
   * Check if success heading is visible
   */
  async isSuccessHeadingVisible(): Promise<boolean> {
    return await this.successHeading.isVisible();
  }

  /**
   * Check if success message is visible
   */
  async isSuccessMessageVisible(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }

  /**
   * Check if logout link is visible
   */
  async isLogoutLinkVisible(): Promise<boolean> {
    return await this.logoutLink.isVisible();
  }

  /**
   * Get success message text
   */
  async getSuccessMessageText(): Promise<string | null> {
    return await this.successMessage.textContent();
  }

  /**
   * Click logout link
   */
  async clickLogout(): Promise<void> {
    await this.logoutLink.click();
    await this.waitForNavigation();
  }

  /**
   * Verify user is logged in by checking all success indicators
   */
  async verifySuccessfulLogin(): Promise<boolean> {
    const headingVisible = await this.isSuccessHeadingVisible();
    const messageVisible = await this.isSuccessMessageVisible();
    const logoutVisible = await this.isLogoutLinkVisible();
    
    return headingVisible && messageVisible && logoutVisible;
  }

  /**
   * Get the complete page content for verification
   */
  async getPageContent(): Promise<string | null> {
    return await this.page.content();
  }

  /**
   * Check if "Congratulations" text is present
   */
  async isCongratulationsTextVisible(): Promise<boolean> {
    return await this.congratulationsText.isVisible();
  }

  /**
   * Get success heading text
   */
  async getSuccessHeadingText(): Promise<string | null> {
    return await this.successHeading.textContent();
  }
}
