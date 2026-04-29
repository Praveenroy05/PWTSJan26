import { Locator, Page } from "@playwright/test";

export class SauceDemoCheckoutOverviewPage {
    page: Page;
    finishButton: Locator;
    successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = this.page.locator("#finish");
        this.successMessage = this.page.locator(".complete-header");
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async verifyOrderSuccess() {
        return await this.successMessage.textContent();
    }
}