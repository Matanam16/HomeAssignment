import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ButoonTopBarPage from '../pages/ButtonTopBarPage';
import MyAcoountPage from '../pages/MyAccountPage';
import CategoryAndBrandPage from '../pages/CategoryAndBrandPage';
import MenTshirtsPage from '../pages/MenTshirtsPage';
import ConfirmDialogPage from '../pages/ConfirmDialogPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import PaymentPage from '../pages/PaymentPage';
import { setupTestData } from '../pages/SetupTestData';
import BasePage from '../pages/BasePage';


test.describe("Sanity Test", async () => {
  let basePage: BasePage;
  let butoonTopBarPage: ButoonTopBarPage;
  let loginPage: LoginPage;
  let myAccountPage: MyAcoountPage;
  let categoryAndBrandPage: CategoryAndBrandPage;
  let menTshirtsPage: MenTshirtsPage;
  let confirmDialogPage: ConfirmDialogPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let paymentPage: PaymentPage;
  const url = 'https://www.automationexercise.com/';
  const email = 'Matanam16@gmail.com';
  const password = '123456';
  const category = 'Men';
  const subCategory = 'Tshirts ';
  const item = 'Green Side Placket Detail T-Shirt';
  const confiemMassage = ['Your product has been added to cart.' , 'Congratulations! Your order has been confirmed!'];
  const fullName = ['Mr. Matan Amsalem', 'Matan Amsalem'];
  const deliveryInfo = 'Haifa Israel 123456789';
  const cardNumber = '111111111111111111111111';
  const cvc = '123';
  const expiryMonth = '12';
  const expiryYear = '2030';
  const deleteAccountMassage = 'Your account has been permanently deleted!';


  test.beforeEach(async ({page}) => {
   basePage = new BasePage(page);
   loginPage = new LoginPage(page);
   myAccountPage = new MyAcoountPage(page);
   butoonTopBarPage = new ButoonTopBarPage(page);
   categoryAndBrandPage = new CategoryAndBrandPage(page);
   menTshirtsPage = new MenTshirtsPage(page);
   confirmDialogPage = new ConfirmDialogPage(page);
   cartPage = new CartPage(page);
   checkoutPage = new CheckoutPage(page);
   paymentPage = new PaymentPage(page);

   await setupTestData(page);
});


  test.afterEach(async ({context}) => {
    await context.clearCookies();
});


    test('Sanity Test', async ({ page }) => {
    await test.step("Login to the account that created", async () => {
      await page.goto(url);
      await butoonTopBarPage.clickOnSignupAndLoginBtn();
      await loginPage.loginToApp(email,password);
    });

    await test.step("Select category and sub category", async () => {
        await categoryAndBrandPage.selectCategoryFromTheList(category);
        await categoryAndBrandPage.selectSubCategoryFromTheList(subCategory);
    });

    await test.step("Select an item", async () => {
        await menTshirtsPage.addToCartByProductName(item);
    });

    await test.step("Validate that the item added to the cart and navigate to it", async () => {
      await confirmDialogPage.validateTheIteAddedToTheCart(confiemMassage[0]);
      await confirmDialogPage.clickOnViewCart();
    });

    await test.step("Validate that the item added the the cart and proceed to checkout", async () => {
      await cartPage.validateTheIteAddedToTheCart(item);
      await cartPage.clickOnProceedToCheckout();
      await checkoutPage.clickOnPlaceOrderBtn();
    });

    await test.step("Fill payment details", async () => {
      await paymentPage.fillPaymentInformation(fullName[1], cardNumber, cvc, expiryMonth, expiryYear);
      await paymentPage.clickOnPayAndConfirmBtn();
    });

    await test.step("Validate that the order is completed successfully ", async () => {
      await paymentPage.validateTheOrderCompletedSuccessfully(confiemMassage[1]);
      await paymentPage.clickOnContinue();
    });

    await test.step("Delete the user that created at the begining of the test ", async () => {
      await butoonTopBarPage.clickOnDeleteAccountBtn();
      await basePage.validateDeleteAccountMassage(deleteAccountMassage);
    });


  });
});