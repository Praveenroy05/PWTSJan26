// Pure test case and assertions

import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

let url = "https://rahulshettyacademy.com/client"
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "iphone 13 pro"

let lp: LoginPage
let dp : DashboardPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("@smoke @regression Add the product to the cart", async ()=>{
    await dp.searchProduct(productName,1)
    await expect(dp.addToCartSuccMsg).toHaveText("Product Added To Cart")
})

test("@regression Validate the product details on the view page", async ()=>{
   await dp.searchProduct(productName, 0)
   await expect(dp.viewPageProductName).toHaveText(productName)
})

