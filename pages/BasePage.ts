import test, { expect, Locator, Page } from "@playwright/test";
export default class BasePage{

    deleteAccountMassage: Locator;
   
    constructor(protected page: Page){

        this.deleteAccountMassage = this.page.locator('[class="col-sm-9 col-sm-offset-1"]');
    }

    public async GoToUrl(url:string){
        await this.page.goto(url);
    }

    public async validatePageUrl(url: string) {
            await expect(this.page).toHaveURL(url)
    }

    public async validateDeleteAccountMassage(expectedText: string) {
            await expect(this.deleteAccountMassage).toContainText(expectedText);

    }

    
    
}
