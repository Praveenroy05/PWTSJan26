import { Locator, Page } from "@playwright/test";

export class SauceDemoCartPage {
    page: Page;
    checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = this.page.locator("#checkout");
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}