import { Locator, Page } from "@playwright/test";

export default class ButoonTopBarPage{

    signupLoginBtn: Locator;
    deleteAccountBtn: Locator;
    

    constructor(protected page: Page){

        this.signupLoginBtn = this.page.locator('[class="fa fa-lock"]');
        this.deleteAccountBtn = this.page.locator('[class="fa fa-trash-o"]');

        
    }

    public async clickOnSignupAndLoginBtn(){
        await this.signupLoginBtn.click();

    }

    public async clickOnDeleteAccountBtn(){
        await this.deleteAccountBtn.click();

    }

}
