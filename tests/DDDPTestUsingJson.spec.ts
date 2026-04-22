// Pure test case and assertions

import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ExcelUtils } from '../utils/ExcelUtils';
// import datas from '../testdata/dd.json'
import path from 'path'

const filePath = path.join(__dirname, "../testdata/excel.xlsx")
const sheetName = "Login"


let datas: any
try{
    datas= ExcelUtils.getExcelData(filePath, sheetName)
}
catch(e){

}
console.log(datas);

let lp: LoginPage
let dp : DashboardPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)

})

// Parameterisation of test title
for(let data of datas){
    test(`@regression Validate the product details on the view page for ${data.productName}`, async ()=>{
    
        await lp.launchURL(data.url)
        await lp.loginIntoApplication(data.username, data.password)
        await expect(lp.homePageIdentifier).toBeVisible()
        await dp.searchProduct(data.productName, 0)
        await expect(dp.viewPageProductName).toHaveText(data.productName)
    })
}



// json
// excel - xlsx - npm install xlsx

// {key : value}