import { expect, Locator, Page } from "@playwright/test";

export default class PaymentPage{

    nameOnTheCardFiled: Locator;
    cardNumberFiled: Locator;
    expiryMonthFiled: Locator;
    expiryYearFiled: Locator;
    cvcFIled: Locator;
    payAndConfirmBtn: Locator;
    successfullOr1derMassage: Locator;
    continueBtn: Locator;
    

    constructor(protected page: Page){

        this.nameOnTheCardFiled = this.page.locator('[name="name_on_card"]');
        this.cardNumberFiled = this.page.locator('[name="card_number"]');
        this.cvcFIled = this.page.locator('[name="cvc"]');
        this.expiryMonthFiled = this.page.locator('[name="expiry_month"]');
        this.expiryYearFiled = this.page.locator('[name="expiry_year"]');
        this.payAndConfirmBtn = this.page.locator('[id="submit"]');
        this.successfullOr1derMassage = this.page.locator('[class="col-sm-9 col-sm-offset-1"]');
        this.continueBtn = this.page.locator('[class="btn btn-primary"]');

        
    }

    public async fillPaymentInformation(nameOnCard: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string){
        await this.nameOnTheCardFiled.fill(nameOnCard);
        await this.cardNumberFiled.fill(cardNumber);
        await this.cvcFIled.fill(cvc);
        await this.expiryMonthFiled.fill(expiryMonth);
        await this.expiryYearFiled.fill(expiryYear);

    }

    public async clickOnPayAndConfirmBtn(){
        await this.payAndConfirmBtn.click();
    }

    public async validateTheOrderCompletedSuccessfully (text: string){
        expect(this.successfullOr1derMassage).toContainText(text);

    }

    public async clickOnContinue(){
        await this.continueBtn.click();
    }


}
