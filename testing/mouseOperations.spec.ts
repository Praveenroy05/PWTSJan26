// click - click()
// double click - dblclick()
// right click - click({})
// scroll down - 
// mouse hover - hover()
// Drag and drop - Locator.dragTo(Locator)

import {test, expect} from '@playwright/test'


test("handling Double click and right click operations", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // double click - dblclick() - Double click on an element
    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    // right click - click({button:'right'})
    await page.getByText("right click me").click({button : 'right'})
    await page.getByText("Delete", {exact:true}).click()

    // Note : Playwright by default dismiss any type of alert that appear on the page
})

test("Handling mouse hover for an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - Hover over an element
    await page.getByText("Travel Policies", {exact:true}).hover()
    await expect(page.getByTestId("test-id-Baggage Information")).toBeVisible()
    await expect(page.getByTestId("test-id-Baggage Information")).toContainText("Information")

})

test("handling scroll on the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // scrollIntoViewIfNeeded()
    // await page.getByText("Download Files", {exact: true}).scrollIntoViewIfNeeded()
    await page.getByText("Download Files", {exact: true}).click()
    await page.locator("#input1").fill("Testing")
    await page.locator("#inputText").fill("Scroll Up")
    await expect(page.locator("#inputText")).toHaveValue("Scroll Up")

    // Note: Playwright by defualt perform the scrolling on the page
})

test("handling drag and drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const sourceElement = await page.locator("div#draggable")
    const targetElement = await page.locator("div#droppable")

    // dragTo(targetlocator)

   // await sourceElement.dragTo(targetElement)

   await sourceElement.hover()
   await page.mouse.down()
   await targetElement.hover()      
   await page.mouse.up()
   await expect(page.locator("div#droppable p")).toHaveText("Dropped!")
})

