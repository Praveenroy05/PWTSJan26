import { Locator, Page } from "@playwright/test";

export class SauceDemoCheckoutPage {
    page: Page;
    firstName: Locator;
    lastName: Locator;
    zipCode: Locator;
    continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = this.page.locator("#first-name");
        this.lastName = this.page.locator("#last-name");
        this.zipCode = this.page.locator("#postal-code");
        this.continueButton = this.page.locator("#continue");
    }

    async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continueButton.click();
    }
}