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