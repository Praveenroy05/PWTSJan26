import {test, expect} from '@playwright/test';

test("Handling Frames", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    // frameLocator("selector") - returns FrameLocator object which helps us to enter into the frame and perform the actions on the elements inside the frame.
    const framePage = page.frameLocator("#singleframe")
   // page.locator('iframe[name="SingleFrame"]').contentFrame()


    await framePage.locator("[type='text']").first().fill("Single frame")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("Single frame")

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