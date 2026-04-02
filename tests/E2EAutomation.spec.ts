import {test, expect} from '@playwright/test'

const productName = "iphone 13 pro"

test("E2E Automation", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill("testnHNk@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()

    const products = page.locator("div.card-body")

    // Find the number of elements the locator is matching
    // count() - return the number of element matching with the locator

    const productCount = await products.count()

    for(let i=0; i<productCount; i++){ 
        const productText = await products.nth(i).locator("h5").textContent() //div.card-body h5
        if(productText === productName){
            await products.nth(i).locator("button").last().click()
            break
        }
    }

    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")

})