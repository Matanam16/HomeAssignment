import { expect, Locator, Page } from "@playwright/test";

export default class ItemInformationPage{

    itemInfo: Locator;
    addToCartBtn: Locator;
    

    constructor(protected page: Page){

        this.itemInfo = this.page.locator('.product-information p');
        this.addToCartBtn =this.page.locator('[class="fa fa-shopping-cart"]');

        
    }

    public async validateItemInStock(text: string){
        expect(this.itemInfo.nth(1)).toContainText(text);

    }
    
    public async clickOnAddToCartBtn (){
        await this.addToCartBtn.nth(1).click();
    }


}
