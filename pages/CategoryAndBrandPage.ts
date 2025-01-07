import { Locator, Page } from "@playwright/test";

export default class CategoryAndBrandPage{

    categoryList: Locator;
    

    constructor(protected page: Page){

        this.categoryList = this.page.locator('[class="panel-group category-products"]');

        
    }

    public async selectCategoryFromTheList(category: string){
        await this.categoryList.getByRole('link', { name: ' Men' }).click();

    }

    public async selectSubCategoryFromTheList(subCategory: string){
        await this.categoryList.getByRole('link', { name: subCategory }).click();

    }

}
