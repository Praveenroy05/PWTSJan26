// Multiple tabs or windows - "popup" event - page.waitForEvent("popup")

//step by step process to handle multiple tabs/windows using PW:

// 1. Launch the url
// 2. Wait for "popup" event to appear on the page -  page.waitForEvent("popup")
// 3. Identify and click on the element which is responsible for generate of "popup" event on the webpage
// 4. We can store the final result of const newPage = await page.waitForEvent("popup")
// 5. Perform any action on the new tab/window, we must use newPage object
// 6. Come back to main/original page and perform the action by using "page" fixture

import {test, expect} from '@playwright/test'

test("Multiple tabs or windows handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup")

    // Click on the button which is responsible for generation of "popup" event
    await page.locator("#Tabbed button").click()

    // Waiting for the final result of waitForEvent("popup")
    const newPage = await page1

    // Perform any action on the new tab/window
    await newPage.getByText("Downloads", {exact: true}).click()
    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront()
    await page.waitForTimeout(2000)

    // Come back  to the main/original page and perform any action

    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()



    //  page.reload()
    //  page.goBack()
    //  page.goForward()

})