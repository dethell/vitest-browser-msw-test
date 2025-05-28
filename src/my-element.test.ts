import { html, fixture } from '@open-wc/testing-helpers';
import './my-element';

describe('my-element', () => {
  it('renders with default name', async () => {
    const el = await fixture(html`<my-element></my-element>`);
    expect(el.shadowRoot?.textContent).toContain('Hello, World!');
  });

  it('renders with custom name', async () => {
    const el = await fixture(html`<my-element name="Test"></my-element>`);
    expect(el.shadowRoot?.textContent).toContain('Hello, Test!');
  });
});
