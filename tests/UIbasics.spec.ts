// testcase.spec.ts
// filename.test.ts

import {test, expect} from '@playwright/test'

test("Login into application using valid credentials", async function({page}){
   // Launch the url
   // Fill the username(textbox)
   // validate if the username is successfully enterred
   // Fill the password
   // Click on login button
   // Validate if the login is successful.

   // goto("url") - It launches the url on the given browser. url should consists of http/https.

   await page.goto("https://practicetestautomation.com/practice-test-login/")

   // fill("string") - Set the value inside the textbox
   // await page.locator("#username").fill("student")
   await page.getByLabel("Username").fill("student")
   // assertion method - toHaveValue("value") - Check if an INPUT filed is having the value as "value"
   // await page.locator("#username").waitFor()
   await expect.soft(page.locator("#username")).toHaveValue("student")
   await page.getByLabel("Password").fill("Password123")

   // click() - Click on an element
   await page.getByRole("button", {name : "Submit"}).click()

   // Visibility of an element on the page
   // toBeVisible() - Element is visible on the page
   await expect(page.locator(".wp-block-button a")).toBeVisible()

   // An element on the page should have text value as "Logged in Successfully"
   // toHaveText("Text") - Validate if an element have the text as "Text"
   await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully", {timeout : 120000})

   // The page should have a "Specific" url
   // url() - To get the url of the current page
   await expect(page.url()).toContain("logged-in-successfully")
})


test("Handling radio button and checkbox", async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    // click() - Click on an element
    // check() - It validates if the element is already checked/selected, if it is not selected then it click on the element. Only for checkbox or radio.
    // uncheck() - It validates if the element is not already checked/selected, if it is selected then it click on the element. Only for checkbox or radio.

    await page.locator("#gender-radio-2").check()
    // toBeChecked() - which validates of the element is checked or not
    await expect(page.locator("#gender-radio-2")).toBeChecked()

    await page.locator("#hobbies-checkbox-3").check()
    await expect(page.locator("#hobbies-checkbox-3")).toBeChecked()
    
    await page.locator("#hobbies-checkbox-3").uncheck()
    await expect(page.locator("#hobbies-checkbox-3")).not.toBeChecked()

    // count() - Return the total number of matching element with the locator
    let checbox = page.locator("div.form-check input[type='checkbox']")
    let countOfChecbox  = await checbox.count()

    for(let i=0; i<countOfChecbox; i++){
        await checbox.nth(i).check()
        await page.waitForTimeout(1000)
    }

// Note: If you want to uncheck the checkbox you can use either click() or uncheck()

})

// How to get the text value from an element

test("Get the text from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() - return the text value from the matching element even if the element is not visible on the page
    // innerText() - return the text value of an element
    const text = await page.locator("h1.title").innerText()
    console.log(text);

    // Get the text value of multiple element

    await page.locator("h2.title").first().waitFor()
    const allTexts = await page.locator("h2.title").allTextContents()
    console.log(allTexts);


    // allTextContents()
    // allInnerTexts()
})