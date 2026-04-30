import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';



let lp: LoginPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(process.env.BASE_URL!)
})

test("Valid login test",{tag: ['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(process.env.EMAIL!, process.env.PASSWORD!)
    await expect(lp.homePageIdentifier).toBeVisible()
})
