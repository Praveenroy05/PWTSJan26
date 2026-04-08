// Locators realted to login page only
// Methods related to login page only

import { Locator, Page } from "@playwright/test";

export class LoginPage{

    // Locators
    page : Page
    username: Locator 
    password: Locator
    loginButton: Locator
    errorMessage: Locator
    homePageIdentifier: Locator

    // constructor

    constructor(page:Page){
        this.page = page // lp.page= page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginButton = this.page.getByRole('button', {name:'Login'})
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator(".fa-sign-out")
    }

    // Methods

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}

