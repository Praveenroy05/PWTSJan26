/*

Annotation : 

1. test.skip() - Marks the test as irrelevant. Playwright does not run such test.

2. test.fail() - Marks the test as a failing.

3. test.fixme() -  Marks the test as failing test and PW will not run such test.

4. test.only() - The PW will run only those test cases which have been marked as test.only()

5. test.slow() - Marks the test as slow and tripes the test timeout

6. test.step() - Provide the test title for the test step

7. test.describe() - Group the test case and display the title of the describe inside the report

8. test.describe().configure({mode: 'serial'})



*/

import {test, expect} from '@playwright/test'

test.skip("Test1", async ()=>{
    console.log("Test1")
})

test.fixme("Test2", async ()=>{
    console.log("Test2")
})

test.fail("Test3", async ()=>{
    console.log("Test3")
})


// Report - Allure report - Java
// Jenkins - CICD

// Playwright MCP
// Playwright Agent 
// API test cases 
