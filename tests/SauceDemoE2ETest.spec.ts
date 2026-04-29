import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/SauceDemoLoginPage';
import { SauceDemoInventoryPage } from '../pages/SauceDemoInventoryPage';
import { SauceDemoCartPage } from '../pages/SauceDemoCartPage';
import { SauceDemoCheckoutPage } from '../pages/SauceDemoCheckoutPage';
import { SauceDemoCheckoutOverviewPage } from '../pages/SauceDemoCheckoutOverviewPage';

test.describe.configure({ mode: 'serial', timeout: 10000, retries:0});

let url = "https://www.saucedemo.com/";
let username = "standard_user";
let password = "secret_sauce";
let productName = "Sauce Labs Backpack";

let loginPage: SauceDemoLoginPage;
let inventoryPage: SauceDemoInventoryPage;
let cartPage: SauceDemoCartPage;
let checkoutPage: SauceDemoCheckoutPage;
let checkoutOverviewPage: SauceDemoCheckoutOverviewPage;

test.beforeEach(async ({ page }) => {
    loginPage = new SauceDemoLoginPage(page);
    inventoryPage = new SauceDemoInventoryPage(page);
    cartPage = new SauceDemoCartPage(page);
    checkoutPage = new SauceDemoCheckoutPage(page);
    checkoutOverviewPage = new SauceDemoCheckoutOverviewPage(page);
    await loginPage.launchURL(url);
    await expect(loginPage.username).toBeVisible();
});

test("SauceDemo E2E Checkout Test", { tag: ['@smoke', '@regression'] }, async () => {
    await test.step("Login with Username and password", async () => {
        await loginPage.loginIntoApplication(username, password);
    });

    await test.step("Add Product 'Sauce Labs Backpack' Into the cart", async () => {
        await inventoryPage.addProductToCart(productName);
        await expect(inventoryPage.cartBadge).toHaveText("1");
    });

    await test.step("Open the cart", async () => {
        await inventoryPage.openCart();
    });

    await test.step("Click on Checkout button", async () => {
        await cartPage.clickCheckout();
        await expect(checkoutPage.firstName).toBeVisible();
    });

    await test.step("Fill Random data in First name, Last name and Zip", async () => {
        const firstName = "Test" + Math.floor(Math.random() * 1000);
        const lastName = "User" + Math.floor(Math.random() * 1000);
        const zipCode = Math.floor(Math.random() * 90000 + 10000).toString();
        await checkoutPage.fillCheckoutForm(firstName, lastName, zipCode);
    });

    await test.step("Click on finish button", async () => {
        await checkoutOverviewPage.clickFinish();
    });

    await test.step("Verify message 'Thank you for your order!'", async () => {
        const message = await checkoutOverviewPage.verifyOrderSuccess();
        expect(message).toBe("Thank you for your order!");
    });
});