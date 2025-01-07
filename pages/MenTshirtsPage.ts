import { Locator, Page } from "@playwright/test";

export default class MenTshirtsPage{

    item: Locator;
    buttonLocatorWithinItem: Locator;
    

    constructor(protected page: Page){

        this.buttonLocatorWithinItem = this.page.locator('a.btn.add-to-cart');

        
    }
    
    // Add directly from the sub category grid

    //  public async addToCartByProductName(productName: string)  {
    //     const productWrapper = this.page.locator('.single-products', { hasText: productName });
    //     if (await productWrapper.count() === 0) {
    //         throw new Error(`Product with name "${productName}" not found.`);
    //     }
    
    //     const addToCartButton = productWrapper.locator(this.buttonLocatorWithinItem).first();
    //     await addToCartButton.click();
    
    // }

    // View item information

    public async viewItemInfoByProductName(productName: string)  {
        const productWrapper = this.page.locator('[class="product-image-wrapper"]', { hasText: productName });
        if (await productWrapper.count() === 0) {
            throw new Error(`Product with name "${productName}" not found.`);
        }
    
        const addToCartButton = productWrapper.locator('[class="nav nav-pills nav-justified"]')
        await addToCartButton.click();
    
    }



}