import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: String })
  public name = 'World';

  static styles = css`
    :host {
      display: block;
      padding: 1em;
      color: #333;
    }
  `;

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }

  protected async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  }
}
