import { expect, Locator, Page } from "@playwright/test";

export default class CartPage{

    cartDiscription: Locator;
    proceedToCheckoutBtn: Locator;
    

    constructor(protected page: Page){

        this.cartDiscription = this.page.locator('[class="cart_description"]');
        this.proceedToCheckoutBtn = this.page.locator('[class="btn btn-default check_out"]');

        
    }

    public async validateTheIteAddedToTheCart(text: string){
        expect(this.cartDiscription).toContainText(text);

    }

    public async clickOnProceedToCheckout(){
       await this.proceedToCheckoutBtn.click();

    }




}
