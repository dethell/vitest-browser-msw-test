import { defineConfig } from 'vite';

export default defineConfig({
  test: {
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
