import type { Locator, Page } from '@playwright/test';

// Page Object: everything the tests need to find or do on the login page lives here,
// so if the page changes, only this file needs updating.
export class LoginPage {
  readonly page: Page;
  readonly title: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { name: 'Sign in to ShipCheck' });
    this.userNameInput = page.getByLabel('Username or email');
    this.passwordInput = page.getByLabel('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(userName: string, password: string) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
