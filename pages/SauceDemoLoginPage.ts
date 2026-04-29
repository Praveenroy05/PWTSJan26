import { Locator, Page } from "@playwright/test";

export class SauceDemoLoginPage {
    page: Page;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.locator("#user-name");
        this.password = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
        this.errorMessage = this.page.locator("[data-test='error']");
    }

    async launchURL(url: string) {
        await this.page.goto(url);
    }

    async loginIntoApplication(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}