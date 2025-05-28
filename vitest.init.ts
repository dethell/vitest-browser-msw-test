import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import { beforeAll, afterEach, afterAll } from 'vitest';

const testMockHandlers = [
    http.get('/*', ({ request }) => {
        // This handler will catch all GET requests
        // debugger;
        console.log('Handler', request.method, request.url);
        return HttpResponse.json({ message: 'This is a mock response for all GET requests.' });
    }),
];

const worker = setupWorker(...testMockHandlers);
worker.events.on('request:start', ({ request }) => {
    // This event is triggered when a request is started
    console.log(`Outgoing: ${request.method} ${request.url}`);
});

beforeAll(async () => {
    console.log('starting MSW worker');
    await worker.start();
});

afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    worker.resetHandlers();
});

afterAll(async () => {
    console.log('stopping MSW worker');
    // Disable request interception and clean up.
    // await commands.stopMockServer();
    worker.stop();
});
