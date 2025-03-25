import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: { // Configuration options
        baseURL: 'https://www.estantevirtual.com.br',
        browserName: 'chromium',
        headless: false, // Set to true to run tests in invisible mode
        screenshot: 'only-on-failure', // Take screenshots only when tests fail.
        // Not recommended 
        video: 'off' // Disable video recording
    },
    testDir: '.tests' // Directory where the tests are located
});