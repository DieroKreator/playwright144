// imports
import test from '@playwright/test';

// Métodos de Teste
test('Login valido', async ({ page }) => {
    await page.goto('/login');

    await page.waitForTimeout(2000);

    // await page.fill('input[name="email"]', '
    // await page.fill('input[name="password"]', '
    // await page.click('button[type="submit"]');
    // await page.waitForSelector('text="Olá, "');
});