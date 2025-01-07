
import { Locator, Page } from "@playwright/test";
import LoginPage from "./LoginPage";


export default class MyAcoountPage{
   // Account Information
    titleRadioBtn: Locator;
    nameFiled: Locator;
    emailFiled: Locator;
    paswwordFiled: Locator;
    daySelector: Locator;
    monthSelector: Locator;
    yearSelector: Locator;

    // Address Information
    firstNameFiled: Locator;
    lastNameFiled: Locator;
    companyFiled: Locator;
    addressOneFiled: Locator;
    addressTwoFild: Locator;
    countrySelector: Locator;
    stateFiled: Locator;
    cityFiled: Locator;
    zipCodeFiled: Locator;
    mobileNumberFiled: Locator;
    createAccountBtn: Locator;
   

    constructor(protected page: Page) {

      // Account Information
        this.titleRadioBtn = this.page.locator('[id="id_gender1"]')
        this.nameFiled = this.page.locator('[name="name"]');
        this.emailFiled = this.page.locator('[name="email"]');
        this.paswwordFiled = this.page.locator('[name="password"]');
        this.daySelector = this.page.locator('[class="row"] [id="days"]');
        this.monthSelector = this.page.locator('[name="months"]');
        this.yearSelector = this.page.locator('[name="years"]');
        

        // Address Information
        this.firstNameFiled = this.page.locator('[name="first_name"]');
        this.lastNameFiled = this.page.locator('[name="last_name"]');
        this.companyFiled = this.page.locator('[name="company"]');
        this.addressOneFiled = this.page.locator('[id="address1"]');
        this.addressTwoFild = this.page.locator('[id="address2"]');
        this.countrySelector = this.page.locator('[name="country"]');
        this.stateFiled = this.page.locator('[id="state"]');
        this.cityFiled = this.page.locator('[id="city"]');
        this.zipCodeFiled = this.page.locator('[id="zipcode"]');
        this.mobileNumberFiled = this.page.locator('[id="mobile_number"]');
        this.createAccountBtn = this.page.locator('[class="btn btn-default"]');
    

    }

    public async fillAccountInformation(password: string, day: string, month: string, year: string){
      await this.titleRadioBtn.click();
      await this.paswwordFiled.fill(password);
      await this.daySelector.selectOption(day);
      await this.monthSelector.selectOption(month);
      await this.yearSelector.selectOption(year);
    }

    public async fillAddressInformation(first_name: string, last_name: string, address1: string, country: string, state: string, city: string, zipcode: string, mobile_number: string ){
      await this.firstNameFiled.fill(first_name);
      await this.lastNameFiled.fill(last_name);
      await this.addressOneFiled.fill(address1);
      await this.countrySelector.selectOption(country);
      await this.stateFiled.fill(state);
      await this.cityFiled.fill(city);
      await this.zipCodeFiled.fill(zipcode);
      await this.mobileNumberFiled.fill(mobile_number);
     
    }

    public async clickOnCreateAccountBtn(){
      await this.createAccountBtn.nth(0).click();
    }


  }

