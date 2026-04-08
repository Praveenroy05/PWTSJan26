let productName = "ZARA COAT 3"
let email = "testnHNk@gmail.com"
let country = " Singapore"


import {test, expect} from '@playwright/test'

test("E2E Automation scenario", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")

    await page.getByPlaceholder("email@example.com").clear()
    await page.getByPlaceholder("email@example.com").fill(email)

    await page.getByPlaceholder("enter your passsword").fill("Testing@1234")
    await page.getByRole('button', {name:'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()

    const products = page.locator("div.card-body") 

    // Find the number of products are available on the page

    // count() - Returns the number of element matching with the locator

    await products.nth(0).waitFor()
    // const countOfProduct = await products.count() // 3 [0-2] // 0,1,2 <3
    // console.log(countOfProduct);

    await products.filter({hasText:`${productName}`}).locator("button").last().click() 
    
    // div.card-body:has-text("iphone 13 pro") button
    // for(let i=0; i<countOfProduct; i++){
    //     const productText = await products.nth(i).locator("h5").textContent() // div.card-body h5
    //     console.log(productText);
    //     if(productText === productName){
    //         await products.nth(i).locator("button").last().click()
    //         break
    //     }
    // }
    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")

    await page.locator("[routerlink='/dashboard/cart']").click()

    await page.getByRole('button',{name:'Checkout'}).click()

    await expect(page.locator("div.user__name input").first()).toHaveValue(email)
    // pressSequentially() - It will enter char by char
    await page.locator("div.user__name input").last().pressSequentially("in")

    const ddResult  = page.locator("section.ta-results button")

    await ddResult.nth(0).waitFor()

    await ddResult.filter({hasText:`${country}`}).click()

    await page.getByText("Place Order").click()
    await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")

    const orderText = await page.locator(".em-spacer-1 label.ng-star-inserted").textContent()

    console.log(orderText);

})