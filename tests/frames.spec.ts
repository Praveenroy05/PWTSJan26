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
    await page.locator("div.col-xs-6 input").first().fill("Testing")
    await expect(page.locator("div.col-xs-6 input").first()).toHaveValue("Testing")
})