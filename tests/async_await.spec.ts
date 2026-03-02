import {test, expect} from '@playwright/test'


test("Login",   async function({page}){
    // launch the url
    // fill the username
    // fill the password
    // click on login button
    // validate if the login is succ
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

   // promise - pending, success, rejected
})

// async - function level
// await - step level
// async-await goes together


// page - browser fixture






// function test1(title:string, fun:Function){ // 
//     fun()
//     console.log(title);
// }

// test1("Login", ()=>{
//     console.log("Testing");
// })

