// Pure test case and assertions

import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../testdata/login.json'

let lp: LoginPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(loginData.url)
})

test("Valid login test",{tag: ['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(loginData.email, loginData.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Invalid login test",{tag: '@regression'}, async ()=>{
    await lp.loginIntoApplication(loginData.email, loginData.incorrectPwd)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})

// Hooks in Playwright
