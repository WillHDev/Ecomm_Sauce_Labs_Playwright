import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username =  page.getByPlaceholder('Username');
    this.password =  page.getByPlaceholder('Password');
    this.loginBtn =  page.getByText('Login');
}

async login( username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async load() {
    await this.page.goto('https://saucedemo.com/');
  }
}