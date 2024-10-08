import { Browser, chromium, expect, Page } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const authFile = path.join(__dirname, '../playwright/.auth/user.json');


async function globalSetup() {
    const browser: Browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
 
    //await loginPage.login('standard_user', 'secret_sauce');
  
   
    await page.goto("https://saucedemo.com/");

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByText('Login').click();
    

    await page.context().storageState({ path: "./LoginAuth.json" });
    await browser.close();
}

export default globalSetup;

