// Drop Down - 

// 2 Types of DD

// 1. Static drop down - The value will never changes - Gender/ country
    // a. Single select DD
    // b. Multi select DD

// 2. Dynamic drop down - The value will be changable - electornics
    // a. Single select DD
    // b. Multi select DD


// Developement of the DD

// 1. <select> tag
// 2. NON select tag - div, span, li, ul,......


// 1. DD developed using <select> tag
// Step by step procedure to select the value from the DD

// 1. launch the url
// 2. Locate the drop down element by writing locator
// 3. Get the value from the drop down using - selectOption("value" or {label or value or index})
// Example : page.locator("#dd").selectOption("saab", {index: 2}or {label: "Opel"} or{value: 'audi'})

// 4. If the drop down is multi-select - selectOption(["AS", "BS", "CS"] OR [{label: "India"}])


//***************************************************** */

// 2. DD developed using NON select tag
// Step by step procedure to select the value from the DD

// 1. launch the url
// 2. Locate the drop down element by writing locator
// 3. Click on the drop down element identified in step #2
// 4. Identify and click on the element that you want to select from the drop down


import {test, expect} from '@playwright/test'

test("Drop down developed using SELECT tag handling", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    const countryDD = await page.locator("#country")
    await countryDD.selectOption("BS")
    await countryDD.selectOption({value: 'CN'})
    await countryDD.selectOption({label: 'New Zealand'})
    await countryDD.selectOption({index: 156})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["volvo", "audi"])
    await page.locator("#cars").selectOption([{label: "Opel"}, {index: 1}])

})


test("Drop down developed using non SELECT tag handling", async ({page})=>{

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-option-2").click()
})




