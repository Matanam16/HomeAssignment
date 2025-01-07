import { expect, Locator, Page } from "@playwright/test";

export default class ConfirmDialogPage{

    text: Locator;
    

    constructor(protected page: Page){

        this.text = this.page.locator('[class="text-center"]');

        
    }

    public async validateTheIteAddedToTheCart(text: string){
        expect(this.text.first()).toHaveText(text);

    }

    public async clickOnViewCart(){
        await this.text.last().click();

    }



}
