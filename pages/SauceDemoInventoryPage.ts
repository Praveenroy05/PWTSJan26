import { Locator, Page } from "@playwright/test";

export class SauceDemoInventoryPage {
    page: Page;
    products: Locator;
    cartBadge: Locator;
    cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = this.page.locator(".inventory_item");
        this.cartBadge = this.page.locator(".shopping_cart_badge");
        this.cartLink = this.page.locator(".shopping_cart_link");
    }

    async addProductToCart(productName: string) {
        const countOfProducts = await this.products.count();
        for (let i = 0; i < countOfProducts; i++) {
            const productText = await this.products.nth(i).locator(".inventory_item_name").textContent();
            if (productText === productName) {
                await this.products.nth(i).locator("button").click();
                break;
            }
        }
    }

    async openCart() {
        await this.cartLink.click();
    }
}