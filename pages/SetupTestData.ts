
import { Locator, Page } from "@playwright/test";
import ButoonTopBarPage from "./ButtonTopBarPage";
import LoginPage from "./LoginPage";
import MyAcoountPage from "./MyAccountPage";


export async function setupTestData(page: Page) {
    const butoonTopBarPage = new ButoonTopBarPage(page);
    const loginPage = new LoginPage(page);
    const myAccountPage = new MyAcoountPage(page);
      const url = 'https://www.automationexercise.com/';
      const email = 'Matanam16@gmail.com';
      const password = '123456';
      const day = '22';
      const month = 'May';
      const year = '2000';
      const firstName = 'Matan';
      const lastName = 'Amsalem';
      const address1 = 'Nissenboim 4';
      const country = 'Israel';
      const state = 'Israel';
      const city = 'Haifa';
      const zipcode = '123456789';
      const mobileNumber = '050-9220593';
    
    
    await page.goto(url);
    await butoonTopBarPage.clickOnSignupAndLoginBtn();
    await loginPage.signUpToTheApp(firstName, email);
    await myAccountPage.fillAccountInformation(password, day, month, year);
    await myAccountPage.fillAddressInformation(firstName, lastName,address1, country, state, city, zipcode, mobileNumber);
    await myAccountPage.clickOnCreateAccountBtn();
  }

