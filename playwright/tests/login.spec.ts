import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login page', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('shows the login form', async () => {
    await expect(loginPage.title).toBeVisible();
    await expect(loginPage.userNameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.signInButton).toBeVisible();
  });

  test('masks the password field', async () => {
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
  });

  test('shows an error when fields are empty', async () => {
    await loginPage.signInButton.click();
    await expect(loginPage.errorMessage).toHaveText('Please enter your username and password.');
  });

  test('shows an error when password is missing', async () => {
    await loginPage.userNameInput.fill('amal@example.com');
    await loginPage.signInButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('goes to tasks page after login', async ({ page }) => {
    await loginPage.login('amal@example.com', 'secret123');
    await expect(page).toHaveURL('/tasks');
    await expect(page.getByRole('heading', { name: 'My tasks' })).toBeVisible();
  });

  test('submits with the Enter key', async ({ page }) => {
    await loginPage.userNameInput.fill('amal@example.com');
    await loginPage.passwordInput.fill('secret123');
    await loginPage.passwordInput.press('Enter');
    await expect(page).toHaveURL('/tasks');
  });
});
