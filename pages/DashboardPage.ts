import { Locator, Page } from "playwright";

export class DashboardPage{

    page: Page
    products: Locator
    addToCartSuccMsg : Locator
    viewPageProductName: Locator

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccMsg = this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
    }


    async searchAndAddProductToCart(productName:string){
        await this.products.nth(0).waitFor()
        const countOfProduct = await this.products.count() 
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent() 
            if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break
            }
        }
    }

     async searchAndViewProductDetails(productName:string){
        await this.products.nth(0).waitFor()
        const countOfProduct = await this.products.count() 
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent() 
            if(productText === productName){
                await this.products.nth(i).locator("button").first().click()
                break
            }
        }
    }


    async searchAddAndViewProductDetails(productName:string, index:number){
        await this.products.nth(0).waitFor()
        const countOfProduct = await this.products.count() 
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent() 
            if(productText === productName){
                await this.products.nth(i).locator("button").nth(index).click()
                break
            }
        }
    }

    async searchProduct(productName:string, index:number){
        await this.products.filter({hasText:`${productName}`}).locator("button").nth(index).click() 
    }
    
}