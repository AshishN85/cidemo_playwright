import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveTitle(/Playwright/);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('new title page & website', async ({ page }) => {
  await page.goto('https://automationstepbystep.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NEVER STOP LEARN/);
});

test('URL check validation', async ({ page }) => {
  await page.goto('https://automationstepbystep.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NEVER STOP LEARN/);

  await page.locator('#menu-item-4595').getByRole('link', { name: 'About' }).click();

  await expect(page).toHaveURL(/.*about-me/);

  await page.getByText('Home').click();

  await expect(page).toHaveURL(/.*step/);
});

//You can use various test hooks such as "test.describe" to declare a group of tests.
test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});

test('has title crazy', async ({ page }) => {
  await page.goto('https://automationstepbystep.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NEVER STOP LEARNING/);
});
