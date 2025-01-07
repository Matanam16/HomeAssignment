import { expect, Locator, Page } from "@playwright/test";

export default class CheckoutPage{

    fullName: Locator;
    address: Locator;
    deliveryInfo: Locator;
    country: Locator;
    mobileNumber: Locator;
    proceedToPaymentBtn: Locator;
    

    constructor(protected page: Page){

        this.proceedToPaymentBtn= this.page.locator('[class="btn btn-default check_out"]');

        
    }


    public async clickOnPlaceOrderBtn(){
        await this.proceedToPaymentBtn.click();
    }



}
