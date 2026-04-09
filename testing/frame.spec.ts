// Frames - 

/*

helping us in integrating one html page to another page. Identify the iframe by using a 

<html> - page

    <iframe> - const framePage = page.frameLocator()
        <html>
           <iframe> - const frame1 = framePage.frameLocator()
              <html></html>
            </iframe>
        </html>
    </iframe>

.......
</html>

*/

import {test,expect} from '@playwright/test'

test("handling frames", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    // frameLocator() - Which helps us in entering inside the iframe to select the elements
    const framePage = await page.frameLocator("#Single iframe")

    await framePage.locator("div.col-xs-6 input").first().fill("Testing")
    await expect(framePage.locator("div.col-xs-6 input").first()).toHaveValue("Testing")

    await page.getByText("Iframe with in an Iframe").click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

    await innerFrame.locator("[type='text']").first().fill("Inner Frame")
    await expect(innerFrame.locator("[type='text']").first()).toHaveValue("Inner Frame")

    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
    
    // go back to the previous page
    await page.goBack()
    await page.getByText("Iframe with in an Iframe").click()

    await innerFrame.locator("[type='text']").first().fill("Inner Frame")
    await expect(innerFrame.locator("[type='text']").first()).toHaveValue("Inner Frame")
})