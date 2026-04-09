// page - browser
// Fixture - Special type of object which help us in terms of auto setup(Launch the browser) and teardown(Close the browser)

import {test, expect} from '@playwright/test'

test("Page Fixture", async function({page}){
    await page.goto("https://facebook.com")
    await page.goto("https://linkedin.com")
})

test("Browser fixture", async function({browser}){
    const context = await browser.newContext() // Created an instance of a browser - browser contetxt
    const page = await context.newPage() // Creates a new page on the browser
    const page1 = await context.newPage()

    await page.goto("https://google.com")
    await page1.goto("https://linkedin.com")


    // Locators
    // cssSelector
    // xpath
    // getByLocators
})