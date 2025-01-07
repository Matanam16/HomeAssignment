import { expect, Locator, Page } from "@playwright/test"

export default class LoginPage{
    
    nameFiled: Locator;
    emailFiled: Locator; 
    passwordfFiled: Locator;
    signupAndloginbtn: Locator;
    logoutBtn: Locator;

    constructor(protected page: Page) {
      this.nameFiled = this.page.locator('[name="name"]');
        this.emailFiled = this.page.locator('[name="email"]');
        this.passwordfFiled = this.page.locator('[name="password"]');
        this.signupAndloginbtn = this.page.locator('[class="btn btn-default"]');
        this.logoutBtn = this.page.locator('[class="fa fa-trash-o"]');
    }

    public async signUpToTheApp(name: string, email: string){
      await this.nameFiled.fill(name);
      await this.emailFiled.nth(1).fill(email);
      await this.signupAndloginbtn.nth(1).click();
    }

    public async loginToApp(email: string, password: string){
      await this.emailFiled.nth(0).fill(email);
        await this.passwordfFiled.fill(password);
        await this.signupAndloginbtn.nth(0).click();
        expect (this.logoutBtn).toBeTruthy();
      }
    }

