// Pure test case and assertions

import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let url = "https://rahulshettyacademy.com/client"
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPwd = "Test"

test.beforeEach(async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(url)
})

test("Valid login test", async ()=>{
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Invalid login test", async ()=>{
    await lp.loginIntoApplication(email, incorrectPwd)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})

// Hooks in Playwright
