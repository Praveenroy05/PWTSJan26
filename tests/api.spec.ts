// API - Application Programming Interface

// Frontend - JS/TS/Agular/React/Vue/......
// Backend  - Java/Python/Php/Go/....
// Database - Sql/Mysql/MongoDB/PostgreS

// {....}

// GET
// POST
// PUT
// DELETE
// PATCH

// 1. Request Format

/*

URL  - https://rahulshettyacademy.com/api/ecom/auth/login
HTTP Method - POST
Payload - body - {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}
Header - NA


*/


// 2. Response Format

/*

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ0Njc1NWFlMmFmZDRjMGI2Mjg2YmMiLCJ1c2VyRW1haWwiOiJ0ZXN0bkhOa0BnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzc3NDczNTUwLCJleHAiOjE4MDkwMzExNTB9.HQxQKSbcrxgMm4_c_gUHED6CiynzMCHeuuM137ErNSo",
    "userId": "66d46755ae2afd4c0b6286bc",
    "message": "Login Successfully"
}

*/

import {test, expect} from '@playwright/test'

const url = "https://rahulshettyacademy.com/api/ecom/auth/login"
const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"
const loginPayload = {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}
const orderPayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}


test("API testing for login", async ({request})=>{

    const response = await request.post(url, {
        data: loginPayload,
    })

    const responseBody = await response.json()
   // console.log(responseBody);
    expect(responseBody).toHaveProperty("token")
    expect(typeof responseBody.token).toBe('string')

    const token = responseBody.token
    console.log(token);
    

    const orderResponse = await request.post(orderURL, {
        data: orderPayload,
        headers:{
            "authorization": token
        }
    })

    const orderJsonResponse = await orderResponse.json()
    const orderID = await orderJsonResponse.orders[0]

    console.log(orderID);
    
})


// .env.qa.stg.prod