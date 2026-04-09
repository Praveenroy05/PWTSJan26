// Hooks - A special method which performs a setup and tear down process.

// test.beforeAll() - It will be executed before running any of the test cases.- db connect
// test.beforeEach() - It will run before running each and every test. - Common steps for all the test cases
// test()
// test.afterEach() - It will run after running each and every test. - 
// test.afterAll()  - It will be executed after execution of all the test cases. close db connect


import {test} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before ALl")
})

test.afterAll(async ()=>{
    console.log("After ALl")
})

test.afterEach(async ()=>{
    console.log("After each")
})

test.beforeEach(async ()=>{
    console.log("Before Each")
})

test("Test1",async ()=>{
    console.log("Test- 1")
})

test("Test2",async ()=>{
    console.log("Test- 2")
})

test("Test3",async ()=>{
    console.log("Test- 3")
})