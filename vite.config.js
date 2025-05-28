import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'browser',
    globals: true,
    browser: {
        enabled: true,
        provider: 'playwright',
        headless: false,
        instances: [
            {
                browser: 'chromium',
            },
        ],
    },
    setupFiles: ['./vitest.init.ts'],
  }
});
